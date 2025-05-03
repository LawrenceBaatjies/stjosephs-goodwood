
import React from "react";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { RegistrationFormData } from "@/types/registration";
import { UseFormReturn } from "react-hook-form";
import PersonalInfoSection from "./PersonalInfoSection";
import AddressSection from "./AddressSection";
import ParishInfoSection from "./ParishInfoSection";
import HowHeardSection from "./HowHeardSection";

interface RegistrationFormProps {
  form: UseFormReturn<RegistrationFormData>;
  onSubmit: (values: RegistrationFormData) => Promise<void>;
  isSubmitting: boolean;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ 
  form, 
  onSubmit,
  isSubmitting 
}) => {
  return (
    <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-8">
      <p className="text-gray-700">
        Welcome to St Joseph's Parish! Please complete this form to register with our parish. 
        Your information will be kept confidential and will only be used for parish communications.
      </p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
          <PersonalInfoSection form={form} />
          <AddressSection form={form} />
          <ParishInfoSection form={form} />
          <HowHeardSection form={form} />

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
  );
};

export default RegistrationForm;
