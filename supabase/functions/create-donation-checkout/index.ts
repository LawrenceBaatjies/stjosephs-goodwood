
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@14.21.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, donationType, email, firstName, lastName } = await req.json();

    // Initialize Stripe
    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2023-10-16",
    });

    // Convert amount from string to number and ensure it's in cents
    const amountInCents = Math.round(parseFloat(amount) * 100);
    
    // Create a Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "zar",
            product_data: {
              name: "Donation to St Joseph's Parish",
              description: donationType === "monthly" ? "Monthly recurring donation" : "One-time donation",
            },
            unit_amount: amountInCents,
            recurring: donationType === "monthly" ? { interval: "month" } : undefined,
          },
          quantity: 1,
        },
      ],
      mode: donationType === "monthly" ? "subscription" : "payment",
      customer_email: email,
      metadata: {
        firstName,
        lastName,
        donationType
      },
      success_url: `${req.headers.get("origin")}/donation-success`,
      cancel_url: `${req.headers.get("origin")}/donation`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
