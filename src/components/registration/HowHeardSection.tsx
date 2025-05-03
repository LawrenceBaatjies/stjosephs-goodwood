
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { RegistrationFormData } from "@/types/registration";

interface HowHeardSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

const HowHeardSection: React.FC<HowHeardSectionProps> = ({ form }) => {
  return (
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
  );
};

export default HowHeardSection;
