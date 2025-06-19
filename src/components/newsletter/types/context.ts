
import { Newsletter, NewsletterFormData, UploadMethod } from "../types";

export interface AdminUser {
  id: string;
  email: string;
}

export interface NewsletterContextType {
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
