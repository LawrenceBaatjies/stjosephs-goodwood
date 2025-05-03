
import { z } from "zod";

export const registrationSchema = z.object({
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

export type RegistrationFormData = z.infer<typeof registrationSchema>;
