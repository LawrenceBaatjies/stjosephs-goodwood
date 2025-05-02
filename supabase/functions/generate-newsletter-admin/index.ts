
// Follow this setup guide to integrate the Deno runtime and Supabase functions:
// https://deno.com/manual/runtime/supabase

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as bcrypt from "https://deno.land/x/bcrypt@v0.4.1/mod.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }
  
  // Only allow POST requests
  if (req.method !== "POST") {
    return new Response(
      JSON.stringify({ error: "Method not allowed" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 405,
      }
    );
  }

  try {
    const { email, password, secret_key } = await req.json();
    
    // Validate the request - require a secret key for additional security
    const ADMIN_SECRET = Deno.env.get("ADMIN_SECRET_KEY");
    
    if (!ADMIN_SECRET || secret_key !== ADMIN_SECRET) {
      return new Response(
        JSON.stringify({ error: "Unauthorized. Invalid secret key." }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        }
      );
    }
    
    // Validate input
    if (!email || !password || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }
    
    // Hash the password with bcrypt
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Get Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Create admin user in Supabase Auth
    const { data: authUser, error: authError } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
    });
    
    if (authError) {
      console.error("Auth user creation error:", authError);
      return new Response(
        JSON.stringify({ error: "Failed to create user: " + authError.message }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }
    
    // Create admin record in admin_users table
    const { data: adminUser, error: adminError } = await supabase
      .from("admin_users")
      .insert({
        id: authUser.user.id,
        email: email,
        password_hash: hashedPassword,
      })
      .select();
      
    if (adminError) {
      console.error("Admin record creation error:", adminError);
      // Clean up auth user if admin record creation fails
      await supabase.auth.admin.deleteUser(authUser.user.id);
      
      return new Response(
        JSON.stringify({ error: "Failed to create admin record: " + adminError.message }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 500,
        }
      );
    }
    
    return new Response(
      JSON.stringify({ 
        message: "Admin user created successfully",
        user: { id: authUser.user.id, email: email }  
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 201,
      }
    );
    
  } catch (error) {
    console.error("Error creating admin user:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
