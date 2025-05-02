import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { useFormSubmission } from "@/hooks/useFormSubmission";

const formSchema = z.object({
  title: z.string().min(1, "Please select a title"),
  firstName: z.string().min(2, "First name must be at least 2 characters").max(50),
  lastName: z.string().min(2, "Last name must be at least 2 characters").max(50),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  suburb: z.string().min(2, "Suburb must be at least 2 characters"),
  postalCode: z.string().min(4, "Please enter a valid postal code"),
  previousParish: z.string().optional(),
  sacraments: z.object({
    baptism: z.boolean().default(false),
    communion: z.boolean().default(false),
    confirmation: z.boolean().default(false),
    marriage: z.boolean().default(false),
  }),
  interestedInGroup: z.string().optional(),
  additionalInfo: z.string().optional(),
  howHeard: z.string().min(1, "Please tell us how you heard about us"),
});

const Registration = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      suburb: "",
      postalCode: "",
      previousParish: "",
      sacraments: {
        baptism: false,
        communion: false,
        confirmation: false,
        marriage: false,
      },
      interestedInGroup: "",
      additionalInfo: "",
      howHeard: "",
    },
  });

  const { submitForm, isSubmitting } = useFormSubmission();

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    
    // Submit to Supabase and send email
    const success = await submitForm("registration", values);
    
    if (success) {
      form.reset();
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
              backgroundImage: "url('https://images.unsplash.com/photo-1524745519059-0c8e5fca3686?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish Registration</h1>
              <p className="text-xl font-light">
                Join our parish community
              </p>
            </div>
          </div>
        </div>

        {/* Registration Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
                <p className="text-gray-700">
                  Welcome to St Joseph's Parish! Please complete this form to register with our parish. 
                  Your information will be kept confidential and will only be used for parish communications.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Title */}
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Title</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select title" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="Mr">Mr</SelectItem>
                              <SelectItem value="Mrs">Mrs</SelectItem>
                              <SelectItem value="Ms">Ms</SelectItem>
                              <SelectItem value="Dr">Dr</SelectItem>
                              <SelectItem value="Rev">Rev</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* First Name */}
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
                    
                    {/* Last Name */}
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
                    
                    {/* Email */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    {/* Phone */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Address Fields */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#d4a760]">Address</h3>
                    
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Street Address</FormLabel>
                          <FormControl>
                            <Input placeholder="Street address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="suburb"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Suburb</FormLabel>
                            <FormControl>
                              <Input placeholder="Suburb" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="postalCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Postal Code</FormLabel>
                            <FormControl>
                              <Input placeholder="Postal code" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  {/* Previous Parish */}
                  <FormField
                    control={form.control}
                    name="previousParish"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Parish (if applicable)</FormLabel>
                        <FormControl>
                          <Input placeholder="Previous parish" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Sacraments */}
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-[#d4a760]">Sacraments Received</h3>
                    <div className="flex flex-wrap gap-6">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="baptism"
                          {...form.register("sacraments.baptism")}
                          className="rounded border-gray-300 text-[#d4a760] shadow-sm focus:border-[#d4a760] focus:ring focus:ring-[#d4a760] focus:ring-opacity-50"
                        />
                        <label htmlFor="baptism">Baptism</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="communion"
                          {...form.register("sacraments.communion")}
                          className="rounded border-gray-300 text-[#d4a760] shadow-sm focus:border-[#d4a760] focus:ring focus:ring-[#d4a760] focus:ring-opacity-50"
                        />
                        <label htmlFor="communion">First Communion</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="confirmation"
                          {...form.register("sacraments.confirmation")}
                          className="rounded border-gray-300 text-[#d4a760] shadow-sm focus:border-[#d4a760] focus:ring focus:ring-[#d4a760] focus:ring-opacity-50"
                        />
                        <label htmlFor="confirmation">Confirmation</label>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="marriage"
                          {...form.register("sacraments.marriage")}
                          className="rounded border-gray-300 text-[#d4a760] shadow-sm focus:border-[#d4a760] focus:ring focus:ring-[#d4a760] focus:ring-opacity-50"
                        />
                        <label htmlFor="marriage">Marriage</label>
                      </div>
                    </div>
                  </div>
                  
                  {/* Interested in Group */}
                  <FormField
                    control={form.control}
                    name="interestedInGroup"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interested in Parish Group (Optional)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select group" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Choir">Choir</SelectItem>
                            <SelectItem value="Liturgy">Liturgy Committee</SelectItem>
                            <SelectItem value="Youth">Youth Group</SelectItem>
                            <SelectItem value="Bible">Bible Study</SelectItem>
                            <SelectItem value="Outreach">Outreach Ministry</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* Additional Info */}
                  <FormField
                    control={form.control}
                    name="additionalInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Information (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any additional information you'd like to share" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {/* How Heard */}
                  <FormField
                    control={form.control}
                    name="howHeard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How did you hear about us?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="friend" />
                              </FormControl>
                              <FormLabel className="font-normal">Friend/Family</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="website" />
                              </FormControl>
                              <FormLabel className="font-normal">Website</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="social" />
                              </FormControl>
                              <FormLabel className="font-normal">Social Media</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="other" />
                              </FormControl>
                              <FormLabel className="font-normal">Other</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Registration'}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
