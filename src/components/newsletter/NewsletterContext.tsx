
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { Newsletter, NewsletterFormData, UploadMethod } from "./types";
import { useNewsletterDatabase } from "@/hooks/useNewsletterDatabase";
import { useNewsletterFileUpload } from "@/hooks/useNewsletterFileUpload";
import { useNewsletterFilters } from "@/hooks/useNewsletterFilters";
import { useNewsletterForm } from "@/hooks/useNewsletterForm";
import { useNewsletterControls } from "@/hooks/useNewsletterControls";
import { dummyNewsletters } from "./newsletterData";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface AdminUser {
  id: string;
  email: string;
}

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
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const { toast } = useToast();
  
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
      try {
        const adminData = localStorage.getItem('newsletter_admin');
        if (adminData) {
          const admin = JSON.parse(adminData);
          setAdminUser(admin);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        localStorage.removeItem('newsletter_admin');
      }
    };
    
    checkAuth();
  }, []);
  
  const handleLogin = async (email: string, password: string) => {
    try {
      setAuthError(null);
      
      // First, try to create default admin user if none exist
      await createDefaultAdminUser();
      
      // Query admin_users table
      const { data: adminUsers, error: queryError } = await supabase
        .from('admin_users')
        .select('id, email, password_hash')
        .eq('email', email);

      if (queryError) {
        console.error('Query error:', queryError);
        setAuthError('Login failed. Please try again.');
        return;
      }

      if (!adminUsers || adminUsers.length === 0) {
        setAuthError('Invalid email or password.');
        return;
      }

      const adminUser = adminUsers[0];
      
      // For now, we'll do a simple password check
      // In production, you'd want to hash the password and compare
      if (password === 'admin123') {
        const user: AdminUser = {
          id: adminUser.id,
          email: adminUser.email
        };
        
        setAdminUser(user);
        setIsAuthenticated(true);
        setShowLoginModal(false);
        
        // Store in localStorage for persistence
        localStorage.setItem('newsletter_admin', JSON.stringify(user));
        
        toast({
          title: "Login Successful",
          description: "You are now logged in as an admin.",
        });
      } else {
        setAuthError('Invalid email or password.');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setAuthError(err.message || 'Failed to login');
    }
  };

  const createDefaultAdminUser = async () => {
    try {
      // Check if any admin users exist
      const { data: existingAdmins, error: checkError } = await supabase
        .from('admin_users')
        .select('id')
        .limit(1);

      if (checkError) {
        console.error('Error checking existing admins:', checkError);
        return;
      }

      // If no admin users exist, create default one
      if (!existingAdmins || existingAdmins.length === 0) {
        const { error: insertError } = await supabase
          .from('admin_users')
          .insert({
            email: 'admin@parish.com',
            password_hash: 'temp_hash' // In production, this should be properly hashed
          });

        if (insertError) {
          console.error('Error creating default admin:', insertError);
        } else {
          console.log('Default admin user created: admin@parish.com / admin123');
        }
      }
    } catch (error) {
      console.error('Exception creating default admin:', error);
    }
  };
  
  const handleLogout = async () => {
    try {
      setAdminUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('newsletter_admin');
      
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
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
    
    if (!isAuthenticated) {
      toast({
        variant: "destructive",
        title: "Authentication Required",
        description: "You must be logged in to manage newsletters.",
      });
      return;
    }
    
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
