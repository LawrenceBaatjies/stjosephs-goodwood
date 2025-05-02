
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface EventContactFormProps {
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  onContactNameChange: (value: string) => void;
  onContactEmailChange: (value: string) => void;
  onContactPhoneChange: (value: string) => void;
  required?: boolean;
}

const EventContactForm = ({
  contactName,
  contactEmail,
  contactPhone,
  onContactNameChange,
  onContactEmailChange,
  onContactPhoneChange,
  required = false,
}: EventContactFormProps) => {
  return (
    <div className="space-y-2 pt-2">
      <h4 className="text-sm font-medium">Contact Information</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="contactName">Your Name{required && "*"}</Label>
          <Input
            id="contactName"
            value={contactName}
            onChange={(e) => onContactNameChange(e.target.value)}
            required={required}
          />
        </div>
        <div>
          <Label htmlFor="contactEmail">Email{required && "*"}</Label>
          <Input
            id="contactEmail"
            type="email"
            value={contactEmail}
            onChange={(e) => onContactEmailChange(e.target.value)}
            required={required}
          />
        </div>
      </div>
      <div>
        <Label htmlFor="contactPhone">Phone{required && "*"}</Label>
        <Input
          id="contactPhone"
          value={contactPhone}
          onChange={(e) => onContactPhoneChange(e.target.value)}
          required={required}
        />
      </div>
    </div>
  );
};

export default EventContactForm;
