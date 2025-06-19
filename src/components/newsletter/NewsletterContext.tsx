
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { Newsletter } from "./types";
import { NewsletterContextType } from "./types/context";
import { useNewsletterDatabase } from "@/hooks/useNewsletterDatabase";
import { useNewsletterFileUpload } from "@/hooks/useNewsletterFileUpload";
import { useNewsletterFilters } from "@/hooks/useNewsletterFilters";
import { useNewsletterForm } from "@/hooks/useNewsletterForm";
import { useNewsletterControls } from "@/hooks/useNewsletterControls";
import { useNewsletterAuth } from "@/hooks/useNewsletterAuth";
import { useNewsletterSubmit } from "@/hooks/useNewsletterSubmit";
import { dummyNewsletters } from "./newsletterData";

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const useNewsletterContext = () => {
  const context = useContext(NewsletterContext);
  if (!context) {
    throw new Error("useNewsletterContext must be used within a NewsletterProvider");
  }
  return context;
};

export const NewsletterProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  
  // Use the database hook for newsletter data
  const {
    newsletters: dbNewsletters,
    isLoading
  } = useNewsletterDatabase();

  // Use the file upload hook
  const { isUploading } = useNewsletterFileUpload();
  
  // Use authentication hook
  const auth = useNewsletterAuth();
  
  useEffect(() => {
    // Use database newsletters if available, otherwise use dummy data
    if (dbNewsletters.length > 0) {
      setNewsletters(dbNewsletters);
    } else {
      setNewsletters(dummyNewsletters);
    }
  }, [dbNewsletters]);
  
  const filters = useNewsletterFilters(newsletters);
  const controls = useNewsletterControls(newsletters, setNewsletters);
  const form = useNewsletterForm(newsletters, setNewsletters);
  
  // Use the submit hook
  const { handleSubmit } = useNewsletterSubmit(
    auth.isAuthenticated,
    form.formData,
    form.uploadMethod,
    form.selectedNewsletter,
    form.resetForm
  );

  const value = {
    newsletters,
    setNewsletters,
    ...filters,
    ...controls,
    ...form,
    ...auth,
    handleSubmit,
    isLoading,
    isUploading,
  };

  return (
    <NewsletterContext.Provider value={value}>
      {children}
    </NewsletterContext.Provider>
  );
};
