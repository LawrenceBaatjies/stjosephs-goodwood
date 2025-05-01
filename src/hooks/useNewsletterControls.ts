
import { useState } from "react";
import { useToastNotification } from "./useToastNotification";
import { Newsletter } from "../components/newsletter/types";

export const useNewsletterControls = (
  newsletters: Newsletter[],
  setNewsletters: React.Dispatch<React.SetStateAction<Newsletter[]>>
) => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [previewPdfUrl, setPreviewPdfUrl] = useState<string | null>(null);
  
  const { success, error } = useToastNotification();

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
    success({
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
