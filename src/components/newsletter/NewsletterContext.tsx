
import React, { createContext, useState, useContext, ReactNode, useMemo } from "react";
import { Newsletter } from "./NewsletterGrid";
import { useNewsletterToast } from "@/hooks/useNewsletterToast";

// Sample PDF URL for demonstration
const samplePdfUrl = "https://stjosephsgoodwood.hostking000.com/wp-content/uploads/2024/09/NEWSLETTER-23RD-SUNDAY.pdf";

// Initial dummy data
const dummyNewsletters: Newsletter[] = [
  {
    id: "1",
    title: "Parish Newsletter - Easter 2025",
    date: "2025-04-15",
    fileUrl: samplePdfUrl,
    description: "Special Easter edition with Holy Week schedule and reflections. Including updates on parish activities and community news.",
    thumbnailUrl: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Monthly Newsletter - March 2025",
    date: "2025-03-01",
    fileUrl: samplePdfUrl,
    description: "Updates on parish activities, Lenten program, and upcoming events. This month's edition includes a special message from the parish priest.",
    thumbnailUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1374&auto=format&fit=crop",
  },
  {
    id: "3",
    title: "Monthly Newsletter - February 2025",
    date: "2025-02-01",
    fileUrl: samplePdfUrl,
    description: "Parish updates, ministry spotlights, and community news. Read about the upcoming parish feast day celebrations and volunteer opportunities.",
  },
  {
    id: "4",
    title: "Christmas Special Edition - December 2024",
    date: "2024-12-20",
    fileUrl: samplePdfUrl,
    description: "Christmas Mass schedule, holiday events, and seasonal reflections.",
    thumbnailUrl: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=1469&auto=format&fit=crop",
  },
  {
    id: "5", 
    title: "All Saints Day - November 2024",
    date: "2024-11-01",
    fileUrl: samplePdfUrl,
    description: "Special edition for All Saints Day with prayer services and community activities.",
  }
];

interface NewsletterFormData {
  title: string;
  date: string;
  fileUrl: string;
  description: string;
  thumbnailUrl: string;
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
  uploadMethod: 'url' | 'upload';
  setUploadMethod: React.Dispatch<React.SetStateAction<'url' | 'upload'>>;
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
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [selectedNewsletter, setSelectedNewsletter] = useState<Newsletter | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    fileUrl: "",
    description: "",
    thumbnailUrl: "",
  });
  const [uploadMethod, setUploadMethod] = useState<'url' | 'upload'>('url');
  const [previewPdfUrl, setPreviewPdfUrl] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  // Calculate available years from newsletter dates
  const availableYears = useMemo(() => {
    const years = newsletters.map(newsletter => 
      new Date(newsletter.date).getFullYear().toString()
    );
    return Array.from(new Set(years)).sort((a, b) => parseInt(b) - parseInt(a));
  }, [newsletters]);

  const { toast } = useNewsletterToast();

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
      toast({
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
      toast({
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
      toast({
        title: "Newsletter added",
        description: `"${formData.title}" has been added successfully.`
      });
    }
    
    resetForm();
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

  const handleDelete = (id: string) => {
    setNewsletters(newsletters.filter(newsletter => newsletter.id !== id));
    toast({
      title: "Newsletter deleted",
      description: "The newsletter has been deleted successfully."
    });
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

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
    resetForm();
  };

  const handleViewPdf = (fileUrl: string) => {
    setPreviewPdfUrl(fileUrl);
  };

  const closePreview = () => {
    setPreviewPdfUrl(null);
  };

  const value = {
    newsletters,
    setNewsletters,
    isAdminMode,
    setIsAdminMode,
    selectedNewsletter,
    setSelectedNewsletter,
    formData,
    setFormData,
    uploadMethod,
    setUploadMethod,
    previewPdfUrl,
    setPreviewPdfUrl,
    searchTerm,
    setSearchTerm,
    selectedYear,
    setSelectedYear,
    selectedMonth,
    setSelectedMonth,
    availableYears,
    handleEdit,
    handleDelete,
    handleViewPdf,
    handleSubmit,
    resetForm,
    handleChange,
    handleFileChange,
    toggleAdminMode,
    closePreview,
  };

  return (
    <NewsletterContext.Provider value={value}>
      {children}
    </NewsletterContext.Provider>
  );
};
