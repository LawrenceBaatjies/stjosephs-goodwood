
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { Newsletter, NewsletterFormData, UploadMethod } from "./types";
import { useNewsletterDatabase } from "@/hooks/useNewsletterDatabase";
import { useNewsletterFileUpload } from "@/hooks/useNewsletterFileUpload";
import { useNewsletterFilters } from "@/hooks/useNewsletterFilters";
import { useNewsletterForm } from "@/hooks/useNewsletterForm";
import { useNewsletterControls } from "@/hooks/useNewsletterControls";
import { dummyNewsletters } from "./newsletterData";
import { supabase } from "@/integrations/supabase/client";

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
  isLoading: boolean;
  isUploading: boolean;
  isAuthenticated: boolean;
  handleLogin: (email: string, password: string) => Promise<void>;
  handleLogout: () => Promise<void>;
  authError: string | null;
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
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
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Use the database hook for newsletter data
  const {
    newsletters: dbNewsletters,
    isLoading,
    uploadNewsletter,
    updateNewsletter,
    deleteNewsletter
  } = useNewsletterDatabase();

  // Use the file upload hook
  const { uploadFile, isUploading } = useNewsletterFileUpload();
  
  useEffect(() => {
    // Use database newsletters if available, otherwise use dummy data
    if (dbNewsletters.length > 0) {
      setNewsletters(dbNewsletters);
    } else {
      setNewsletters(dummyNewsletters);
    }
  }, [dbNewsletters]);
  
  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        setIsAuthenticated(true);
      }
    };
    
    checkAuth();
    
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (session) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      }
    );
    
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  const handleLogin = async (email: string, password: string) => {
    try {
      setAuthError(null);
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (signInError) {
        setAuthError(signInError.message);
        return;
      }
      
      if (data.session) {
        setIsAuthenticated(true);
        setShowLoginModal(false);
      }
    } catch (err: any) {
      setAuthError(err.message || 'Failed to login');
    }
  };
  
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setIsAuthenticated(false);
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };
  
  const filters = useNewsletterFilters(newsletters);
  const controls = useNewsletterControls(newsletters, setNewsletters);
  
  // Extend the form hook with database integration
  const form = useNewsletterForm(newsletters, setNewsletters);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    let fileUrl = form.formData.fileUrl;
    let thumbnailUrl = form.formData.thumbnailUrl;
    
    // Process file uploads if needed
    if (form.uploadMethod === 'upload' && form.formData.fileToUpload) {
      const uploadedUrl = await uploadFile(form.formData.fileToUpload);
      if (uploadedUrl) fileUrl = uploadedUrl;
      else return; // Exit if file upload failed
    }
    
    if (form.formData.thumbnailToUpload) {
      const uploadedThumbnail = await uploadFile(form.formData.thumbnailToUpload);
      if (uploadedThumbnail) thumbnailUrl = uploadedThumbnail;
    }
    
    const newsletterData = {
      title: form.formData.title,
      date: form.formData.date,
      fileUrl: fileUrl,
      description: form.formData.description,
      thumbnailUrl: thumbnailUrl
    };
    
    if (form.selectedNewsletter) {
      // Update existing newsletter
      await updateNewsletter(form.selectedNewsletter.id, newsletterData);
    } else {
      // Add new newsletter
      await uploadNewsletter(newsletterData);
    }
    
    form.resetForm();
  };

  const value = {
    newsletters,
    setNewsletters,
    ...filters,
    ...controls,
    ...form,
    handleSubmit,
    isLoading,
    isUploading,
    isAuthenticated,
    handleLogin,
    handleLogout,
    authError,
    showLoginModal,
    setShowLoginModal,
  };

  return (
    <NewsletterContext.Provider value={value}>
      {children}
    </NewsletterContext.Provider>
  );
};
