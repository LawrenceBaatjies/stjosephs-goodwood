import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase-client";

const donationFormSchema = z.object({
  amount: z.string().min(1, "Please select or enter an amount"),
  donationType: z.enum(["one-time", "monthly"], {
    required_error: "Please select a donation type",
  }),
  paymentMethod: z.enum(["card"], {
    required_error: "Please select a payment method",
  }),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
});

const Donation = () => {
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

  async function onSubmit(values: z.infer<typeof donationFormSchema>) {
    try {
      setIsSubmitting(true);

      const { amount, donationType, email, firstName, lastName } = values;

      const { data, error } = await supabase.functions.invoke('create-donation-checkout', {
        body: { amount, donationType, email, firstName, lastName }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Donation error:", error);
      toast({
        title: "Error processing donation",
        description: "There was a problem processing your donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
              <p className="text-xl font-light">
                Support the mission and work of St Joseph's Parish
              </p>
            </div>
          </div>
        </div>

        {/* Donation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
                <h2 className="text-2xl font-bold text-[#d4a760] mb-4">Why Your Support Matters</h2>
                <p className="text-gray-700 mb-4">
                  Your generous donations help us maintain our church building, support our parish ministries, 
                  and serve our community. By contributing to St Joseph's, you're helping to ensure that we 
                  can continue our mission of spreading the Gospel and serving those in need.
                </p>
                <p className="text-gray-700">
                  All donations to St Joseph's Parish are tax-deductible as allowed by law.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Donation Form */}
                <div className="lg:col-span-7">
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
                              <FormItem>
                                <FormLabel>Donation Amount (ZAR)</FormLabel>
                                <FormControl>
                                  <div className="space-y-4">
                                    <div className="grid grid-cols-3 gap-3">
                                      {["100", "250", "500", "1000", "2500", "5000"].map((amount) => (
                                        <Button
                                          key={amount}
                                          type="button"
                                          variant={field.value === amount ? "default" : "outline"}
                                          onClick={() => form.setValue("amount", amount)}
                                          className={`w-full ${field.value === amount ? 'bg-[#d4a760] hover:bg-[#c9965a]' : ''}`}
                                        >
                                          R{amount}
                                        </Button>
                                      ))}
                                    </div>
                                    <div className="relative">
                                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R</span>
                                      <Input
                                        placeholder="Other amount"
                                        className="pl-8"
                                        {...field}
                                        onChange={(e) => {
                                          // Only allow numbers and decimal points
                                          if (/^\d*\.?\d*$/.test(e.target.value) || e.target.value === '') {
                                            field.onChange(e);
                                          }
                                        }}
                                      />
                                    </div>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
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
                              <FormItem>
                                <FormLabel>Payment Method</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select payment method" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="card">Credit/Debit Card</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
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
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? "Processing..." : "Proceed to Payment"}
                          </Button>
                        </form>
                      </Form>
                    </CardContent>
                  </Card>
                </div>

                {/* Donation Information */}
                <div className="lg:col-span-5">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl text-[#d4a760]">Other Ways to Support</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Bank Transfer</h3>
                        <p className="text-gray-700 text-sm">
                          You can also make donations via direct bank transfer to:
                        </p>
                        <div className="bg-gray-50 p-3 rounded-md mt-2">
                          <p className="text-sm">Account Name: Goodwood Catholic Church</p>
                          <p className="text-sm">Bank: Standard Bank </p>
                          <p className="text-sm">( PG's & General Acc): 07 165 857 2</p>
                          <p className="text-sm">(100 Club Dues Only Acc): 07 593 1672</p>
                          <p className="text-sm">Reference: Donation - [Your Name]</p>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">In-Person Donations</h3>
                        <p className="text-gray-700 text-sm">
                          Donations can be made in person during Mass collections or at the parish office during office hours.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">Planned Giving</h3>
                        <p className="text-gray-700 text-sm">
                          Join our Planned Giving Program to make regular contributions to support our parish. 
                          For more information, please contact the parish office.
                        </p>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full space-y-4">
                        <p className="text-sm text-gray-600">
                          If you have any questions about donations or need assistance, please contact us at:
                        </p>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm">donations@stjosephs.example</span>
                        </div>
                        <div className="flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <span className="text-sm">(123) 456-7890</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
