
import { useState } from "react";
import { useNewsletterToast } from "./useNewsletterToast";
import { Newsletter } from "../components/newsletter/types";

export const useNewsletterControls = (
  newsletters: Newsletter[],
  setNewsletters: React.Dispatch<React.SetStateAction<Newsletter[]>>
) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [previewPdfUrl, setPreviewPdfUrl] = useState<string | null>(null);
  
  const { toast } = useNewsletterToast();

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  const handleViewPdf = (fileUrl: string) => {
    setPreviewPdfUrl(fileUrl);
  };

  const closePreview = () => {
    setPreviewPdfUrl(null);
  };

  const handleDelete = (id: string) => {
    setNewsletters(newsletters.filter(newsletter => newsletter.id !== id));
    toast({
      title: "Newsletter deleted",
      description: "The newsletter has been deleted successfully."
    });
  };

  return {
    isAdminMode,
    setIsAdminMode,
    previewPdfUrl,
    setPreviewPdfUrl,
    toggleAdminMode,
    handleViewPdf,
    closePreview,
    handleDelete
  };
};
