
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import { FileText, Upload, Link } from "lucide-react";
import NewsletterHero from "@/components/newsletter/NewsletterHero";
import NewsletterAbout from "@/components/newsletter/NewsletterAbout";
import NewsletterAdminForm from "@/components/newsletter/NewsletterAdminForm";
import NewsletterGrid, { Newsletter } from "@/components/newsletter/NewsletterGrid";
import PDFPreview from "@/components/newsletter/PDFPreview";

// Sample PDF URL for demonstration
const samplePdfUrl = "https://stjosephsgoodwood.hostking000.com/wp-content/uploads/2024/09/NEWSLETTER-23RD-SUNDAY.pdf";

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
];

const NewslettersPage = () => {
  const { toast } = useToast();
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

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
    if (fileInputRef.current) fileInputRef.current.value = '';
    if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <NewsletterHero />

        {/* About Newsletters Section */}
        <NewsletterAbout />

        {/* Newsletters Grid Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-church-navy">Available Newsletters</h2>
                <button 
                  onClick={toggleAdminMode}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-800 transition-colors"
                >
                  {isAdminMode ? "Exit Admin Mode" : "Admin Mode"}
                </button>
              </div>

              {isAdminMode && (
                <NewsletterAdminForm 
                  formData={formData}
                  handleChange={handleChange}
                  handleFileChange={handleFileChange}
                  handleSubmit={handleSubmit}
                  resetForm={resetForm}
                  selectedNewsletter={selectedNewsletter}
                  uploadMethod={uploadMethod}
                  setUploadMethod={setUploadMethod}
                />
              )}

              <NewsletterGrid 
                newsletters={newsletters}
                isAdminMode={isAdminMode}
                onEdit={handleEdit}
                onDelete={handleDelete}
                onView={handleViewPdf}
              />
            </div>
          </div>
        </section>

        {/* PDF Preview Modal */}
        <PDFPreview 
          previewPdfUrl={previewPdfUrl} 
          closePreview={closePreview} 
        />
      </main>
      <Footer />
    </div>
  );
};

export default NewslettersPage;
