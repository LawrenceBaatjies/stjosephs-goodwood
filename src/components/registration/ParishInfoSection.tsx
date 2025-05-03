
import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { RegistrationFormData } from "@/types/registration";

interface ParishInfoSectionProps {
  form: UseFormReturn<RegistrationFormData>;
}

const ParishInfoSection: React.FC<ParishInfoSectionProps> = ({ form }) => {
  return (
    <>
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
    </>
  );
};

export default ParishInfoSection;
