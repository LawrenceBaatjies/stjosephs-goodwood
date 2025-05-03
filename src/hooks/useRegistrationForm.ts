
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFormSubmission } from "@/hooks/useFormSubmission";
import { registrationSchema, RegistrationFormData } from "@/types/registration";

export const useRegistrationForm = () => {
  const form = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
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

  const onSubmit = async (values: RegistrationFormData) => {
    console.log(values);
    
    // Submit to Supabase and send email
    const success = await submitForm("registration", values);
    
    if (success) {
      form.reset();
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit
  };
};
