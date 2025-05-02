
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
    fileToUpload: null,
    thumbnailToUpload: null,
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
      
      if (e.target.name === 'pdfFile') {
        setFormData({
          ...formData,
          fileToUpload: file
        });
      } else if (e.target.name === 'thumbnailFile') {
        setFormData({
          ...formData,
          thumbnailToUpload: file
        });
      }

      // Show success toast
      success({
        title: "File selected successfully",
        description: `"${file.name}" has been selected.`
      });
    }
  };

  const resetForm = () => {
    setSelectedNewsletter(null);
    setFormData({
      title: "",
      date: "",
      fileUrl: "",
      description: "",
      thumbnailUrl: "",
      fileToUpload: null,
      thumbnailToUpload: null,
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
        fileToUpload: null,
        thumbnailToUpload: null,
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
    resetForm,
    handleEdit
  };
};
