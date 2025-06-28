
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/hooks/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase-client";
import AmountSelector from "./AmountSelector";
import PaymentMethodSelector from "./PaymentMethodSelector";

const donationFormSchema = z.object({
  amount: z.string().min(1, "Please select or enter an amount"),
  donationType: z.enum(["one-time", "monthly"], {
    required_error: "Please select a donation type",
  }),
  paymentMethod: z.enum(["card", "bank_transfer", "digital_wallet"], {
    required_error: "Please select a payment method",
  }),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

interface DonationFormProps {
  configError: string | null;
}

const DonationForm = ({ configError }: DonationFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof donationFormSchema>>({
    resolver: zodResolver(donationFormSchema),
    defaultValues: {
      amount: "",
      donationType: "one-time",
      paymentMethod: "card",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const selectedPaymentMethod = form.watch("paymentMethod");

  async function onSubmit(values: z.infer<typeof donationFormSchema>) {
    if (!isSupabaseConfigured()) {
      toast({
        title: "Configuration Error",
        description: "Donation system is not properly configured. Please contact the administrator.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const { amount, donationType, paymentMethod, email, firstName, lastName } = values;
      const amountNumber = parseFloat(amount);

      if (isNaN(amountNumber) || amountNumber <= 0) {
        throw new Error("Please enter a valid amount");
      }

      console.log("Attempting to create donation checkout...", { 
        amount: amountNumber, 
        donationType, 
        paymentMethod, 
        email, 
        firstName, 
        lastName 
      });
      
      const { data, error } = await supabase.functions.invoke('create-donation-checkout', {
        body: { 
          amount: amountNumber.toString(), 
          donationType, 
          paymentMethod,
          email, 
          firstName, 
          lastName 
        }
      });

      console.log("Supabase function response:", { data, error });

      if (error) {
        console.error("Supabase function error:", error);
        throw new Error(error.message || "Failed to create checkout session");
      }

      if (data?.url) {
        console.log("Redirecting to checkout:", data.url);
        window.open(data.url, '_blank');
        
        toast({
          title: "Redirecting to Payment",
          description: "Opening Stripe checkout in a new tab. Please complete your donation there.",
          duration: 5000,
        });
      } else {
        console.error("No checkout URL returned:", data);
        throw new Error("No checkout URL returned from server");
      }
    } catch (error) {
      console.error("Donation error:", error);
      let errorMessage = "Unknown error occurred";
      
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === 'string') {
        errorMessage = error;
      }
      
      if (errorMessage.includes("Edge Function returned a non-2xx status code")) {
        errorMessage = "Payment service configuration error. Please contact support.";
      }
      
      toast({
        title: "Error processing donation",
        description: `There was a problem processing your donation: ${errorMessage}. Please try again or contact support.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-[#d4a760]">Donation Details</CardTitle>
        <CardDescription>
          Please fill in the following information to make your donation.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Amount */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <AmountSelector
                  value={field.value}
                  onChange={field.onChange}
                  onSetValue={(amount) => form.setValue("amount", amount)}
                />
              )}
            />
            
            {/* Donation Type */}
            <FormField
              control={form.control}
              name="donationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Donation Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="one-time" />
                        </FormControl>
                        <FormLabel className="font-normal">One-time donation</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="monthly" />
                        </FormControl>
                        <FormLabel className="font-normal">Monthly recurring donation</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            {/* Payment Method */}
            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <PaymentMethodSelector
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            
            {/* Personal Information */}
            <div className="space-y-4">
              <h3 className="font-semibold">Personal Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormDescription>
                      We'll send your donation receipt to this email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting || !!configError}
            >
              {isSubmitting ? "Processing..." : "Proceed to Payment"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default DonationForm;
