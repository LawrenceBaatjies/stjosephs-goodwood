
import { useState } from "react";
import { Newsletter, NewsletterFormData, UploadMethod } from "../components/newsletter/types";
import { useToastNotification } from "./useToastNotification";

export const useNewsletterForm = (
  newsletters: Newsletter[],
  setNewsletters: React.Dispatch<React.SetStateAction<Newsletter[]>>
) => {
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [formData, setFormData] = useState<NewsletterFormData>({
    title: "",
    date: "",
    fileUrl: "",
    description: "",
    thumbnailUrl: "",
  });
  const [uploadMethod, setUploadMethod] = useState<UploadMethod>('url');
  
  const { success } = useToastNotification();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Create a URL for the uploaded file
      const fileUrl = URL.createObjectURL(file);
      
      if (e.target.name === 'pdfFile') {
        setFormData({
          ...formData,
          fileUrl: fileUrl
        });
      } else if (e.target.name === 'thumbnailFile') {
        setFormData({
          ...formData,
          thumbnailUrl: fileUrl
        });
      }

      // Show success toast
      success({
        title: "File uploaded successfully",
        description: `"${file.name}" has been uploaded.`
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (selectedNewsletter) {
      // Update existing newsletter
      const updatedNewsletters = newsletters.map(newsletter => 
        newsletter.id === selectedNewsletter.id 
          ? { ...newsletter, ...formData }
          : newsletter
      );
      setNewsletters(updatedNewsletters);
      success({
        title: "Newsletter updated",
        description: `"${formData.title}" has been updated successfully.`
      });
    } else {
      // Add new newsletter
      const newNewsletter: Newsletter = {
        id: Date.now().toString(),
        ...formData
      };
      setNewsletters([newNewsletter, ...newsletters]);
      success({
        title: "Newsletter added",
        description: `"${formData.title}" has been added successfully.`
      });
    }
    
    resetForm();
  };

  const resetForm = () => {
    setSelectedNewsletter(null);
    setFormData({
      title: "",
      date: "",
      fileUrl: "",
      description: "",
      thumbnailUrl: "",
    });
    setUploadMethod('url');
  };

  const handleEdit = (id: string) => {
    const newsletter = newsletters.find(item => item.id === id);
    if (newsletter) {
      setSelectedNewsletter(newsletter);
      setFormData({
        title: newsletter.title,
        date: newsletter.date,
        fileUrl: newsletter.fileUrl,
        description: newsletter.description,
        thumbnailUrl: newsletter.thumbnailUrl || "",
      });
      setUploadMethod('url');
    }
  };

  return {
    selectedNewsletter,
    setSelectedNewsletter,
    formData,
    setFormData,
    uploadMethod,
    setUploadMethod,
    handleChange,
    handleFileChange,
    handleSubmit,
    resetForm,
    handleEdit
  };
};
