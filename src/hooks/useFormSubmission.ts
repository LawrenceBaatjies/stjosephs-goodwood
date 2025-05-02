
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export const useFormSubmission = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formType: string, formData: any) => {
    setIsSubmitting(true);
    
    try {
      // Store the submission in Supabase
      const { data, error } = await supabase
        .from('form_submissions')
        .insert({
          form_type: formType,
          submission_data: formData
        })
        .select();
      
      if (error) {
        console.error('Error submitting form:', error);
        toast({
          variant: 'destructive',
          title: 'Submission Failed',
          description: 'There was an error submitting your form. Please try again.',
        });
        return false;
      }
      
      // Trigger the email sending edge function
      if (data && data[0]) {
        try {
          // Call the edge function to send the email
          const { error: emailError } = await supabase.functions.invoke('send-form-email', {
            body: { id: data[0].id },
          });
          
          if (emailError) {
            console.error('Error sending email:', emailError);
            // We still consider the form submitted even if email sending fails
          }
        } catch (emailErr) {
          console.error('Exception sending email:', emailErr);
        }
      }
      
      toast({
        title: 'Submission Successful',
        description: 'Your form has been submitted successfully.',
      });
      
      return true;
    } catch (err) {
      console.error('Exception in form submission:', err);
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'An unexpected error occurred. Please try again.',
      });
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return {
    submitForm,
    isSubmitting
  };
};
