
import React, { createContext, useState, useContext, ReactNode } from "react";
import { Newsletter, NewsletterFormData, UploadMethod } from "./types";
import { dummyNewsletters } from "./newsletterData";
import { useNewsletterFilters } from "@/hooks/useNewsletterFilters";
import { useNewsletterForm } from "@/hooks/useNewsletterForm";
import { useNewsletterControls } from "@/hooks/useNewsletterControls";

interface NewsletterContextType {
  newsletters: Newsletter[];
  setNewsletters: React.Dispatch<React.SetStateAction<Newsletter[]>>;
  isAdminMode: boolean;
  setIsAdminMode: React.Dispatch<React.SetStateAction<boolean>>;
  selectedNewsletter: Newsletter | null;
  setSelectedNewsletter: React.Dispatch<React.SetStateAction<Newsletter | null>>;
  formData: NewsletterFormData;
  setFormData: React.Dispatch<React.SetStateAction<NewsletterFormData>>;
  uploadMethod: UploadMethod;
  setUploadMethod: React.Dispatch<React.SetStateAction<UploadMethod>>;
  previewPdfUrl: string | null;
  setPreviewPdfUrl: React.Dispatch<React.SetStateAction<string | null>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedMonth: string;
  setSelectedMonth: React.Dispatch<React.SetStateAction<string>>;
  availableYears: string[];
  handleEdit: (id: string) => void;
  handleDelete: (id: string) => void;
  handleViewPdf: (fileUrl: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleAdminMode: () => void;
  closePreview: () => void;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const useNewsletterContext = () => {
  const context = useContext(NewsletterContext);
  if (!context) {
    throw new Error("useNewsletterContext must be used within a NewsletterProvider");
  }
  return context;
};

export const NewsletterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>(dummyNewsletters);
  
  const filters = useNewsletterFilters(newsletters);
  const controls = useNewsletterControls(newsletters, setNewsletters);
  const form = useNewsletterForm(newsletters, setNewsletters);

  const value = {
    newsletters,
    setNewsletters,
    ...filters,
    ...controls,
    ...form,
  };

  return (
    <NewsletterContext.Provider value={value}>
      {children}
    </NewsletterContext.Provider>
  );
};
