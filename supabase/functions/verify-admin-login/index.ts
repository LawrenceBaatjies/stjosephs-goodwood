import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import * as bcrypt from "https://esm.sh/bcryptjs@2.4.3";
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
    const { email, password } = await req.json();
    
    // Validate input
    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password are required" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 400,
        }
      );
    }
    
    // Get Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseKey);
    
    // Query admin_users table
    const { data: adminUsers, error: queryError } = await supabase
      .from("admin_users")
      .select("id, email, password_hash")
      .eq("email", email)
      .limit(1);

    if (queryError) {
      console.error("Query error:", queryError);
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        }
      );
    }

    if (!adminUsers || adminUsers.length === 0) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        }
      );
    }

    const adminUser = adminUsers[0];
    
    // Verify password with bcrypt
    const passwordMatch = bcrypt.compareSync(password, adminUser.password_hash);
    
    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password" }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
          status: 401,
        }
      );
    }
    
    // Login successful
    return new Response(
      JSON.stringify({ 
        success: true,
        user: { 
          id: adminUser.id, 
          email: adminUser.email 
        }
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 200,
      }
    );
    
  } catch (error) {
    console.error("Error verifying login:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
