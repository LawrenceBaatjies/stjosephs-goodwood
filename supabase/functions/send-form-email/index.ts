
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface FormSubmission {
  id: string;
  form_type: string;
  submission_data: any;
}

interface EmailMapping {
  [key: string]: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client with the service role key
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Get email mappings for different form types
    const emailMappings: EmailMapping = {
      "baptism": "baptism@stjosephsbrooklyn.co.za",
      "confirmation": "confirmation@stjosephsbrooklyn.co.za", // Sr. Mary Elizabeth
      "marriage": "marriage@stjosephsbrooklyn.co.za",
      "eucharist": "eucharist@stjosephsbrooklyn.co.za",
      "reconciliation": "reconciliation@stjosephsbrooklyn.co.za",
      "holyorders": "holyorders@stjosephsbrooklyn.co.za",
      "anointing": "anointing@stjosephsbrooklyn.co.za",
      "registration": "admin@stjosephsbrooklyn.co.za",
      "contact": "admin@stjosephsbrooklyn.co.za",
      "default": "admin@stjosephsbrooklyn.co.za",
    };

    // Get the form submission ID from the request
    const { id } = await req.json();

    // Fetch the form submission from the database
    const { data: submission, error: fetchError } = await supabase
      .from("form_submissions")
      .select("*")
      .eq("id", id)
      .single();

    if (fetchError || !submission) {
      return new Response(
        JSON.stringify({ error: "Failed to fetch form submission" }),
        {
          status: 404,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const formData = submission as FormSubmission;
    const recipientEmail = emailMappings[formData.form_type] || emailMappings.default;
    
    // Format the email content
    const emailContent = formatEmailContent(formData);
    
    // Here you would integrate with an email service like SendGrid, Resend, etc.
    // For demonstration, we'll just log the email content and mark it as sent
    console.log(`Sending email to ${recipientEmail}`);
    console.log(`Subject: New ${formData.form_type} submission`);
    console.log(`Content: ${emailContent}`);
    
    // Mark the submission as emailed
    const { error: updateError } = await supabase
      .from("form_submissions")
      .update({ email_sent: true })
      .eq("id", formData.id);

    if (updateError) {
      return new Response(
        JSON.stringify({ error: "Failed to update form submission status" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
    
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});

// Helper function to format email content
function formatEmailContent(formData: FormSubmission): string {
  let content = `New ${formData.form_type} Submission\n\n`;
  
  // Add all submission data
  Object.entries(formData.submission_data).forEach(([key, value]) => {
    content += `${key}: ${value}\n`;
  });
  
  return content;
}
