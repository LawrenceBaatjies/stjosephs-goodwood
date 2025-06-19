
import { useToast } from "@/hooks/use-toast";
import { useNewsletterDatabase } from "@/hooks/useNewsletterDatabase";
import { useNewsletterFileUpload } from "@/hooks/useNewsletterFileUpload";
import { NewsletterFormData, UploadMethod } from "@/components/newsletter/types";

export const useNewsletterSubmit = (
  isAuthenticated: boolean,
  formData: NewsletterFormData,
  uploadMethod: UploadMethod,
  selectedNewsletter: any,
  resetForm: () => void
) => {
  const { toast } = useToast();
  const { uploadNewsletter, updateNewsletter } = useNewsletterDatabase();
  const { uploadFile } = useNewsletterFileUpload();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isAuthenticated) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "You must be logged in to manage newsletters.",
      });
      return;
    }
    
    let fileUrl = formData.fileUrl;
    let thumbnailUrl = formData.thumbnailUrl;
    
    // Process file uploads if needed
    if (uploadMethod === 'upload' && formData.fileToUpload) {
      const uploadedUrl = await uploadFile(formData.fileToUpload);
      if (uploadedUrl) fileUrl = uploadedUrl;
      else return; // Exit if file upload failed
    }
    
    if (formData.thumbnailToUpload) {
      const uploadedThumbnail = await uploadFile(formData.thumbnailToUpload);
      if (uploadedThumbnail) thumbnailUrl = uploadedThumbnail;
    }
    
    const newsletterData = {
      title: formData.title,
      date: formData.date,
      fileUrl: fileUrl,
      description: formData.description,
      thumbnailUrl: thumbnailUrl
    };
    
    if (selectedNewsletter) {
      // Update existing newsletter
      await updateNewsletter(selectedNewsletter.id, newsletterData);
    } else {
      // Add new newsletter
      await uploadNewsletter(newsletterData);
    }
    
    resetForm();
  };

  return { handleSubmit };
};
