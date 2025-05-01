
import React, { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import NewsletterCard from "@/components/newsletter/NewsletterCard";
import { FileText, Upload, Link } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Newsletter {
  id: string;
  title: string;
  date: string;
  fileUrl: string;
  description: string;
  thumbnailUrl?: string;
}

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
        <div className="relative bg-church-navy text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2671&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          
          <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Parish Newsletters
              </h1>
              <p className="text-xl mb-8 font-light">
                Stay connected with our parish community through our regular newsletters
              </p>
            </div>
          </div>
        </div>

        {/* About Newsletters Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="rounded-lg shadow-md overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop" 
                      alt="Parish Newsletter" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-2xl font-bold text-church-navy mb-4">About Our Newsletters</h2>
                  <p className="text-gray-700 mb-4">
                    Our parish newsletters are published regularly to keep our community informed about important events,
                    celebrations, and announcements. They contain a wealth of information including Mass schedules, 
                    upcoming events, spiritual reflections, and ministry updates.
                  </p>
                  <p className="text-gray-700">
                    Newsletters are an essential way to stay connected with our parish life and activities.
                    You can view, download, or print current and past newsletters below.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">
                    {selectedNewsletter ? "Edit Newsletter" : "Add New Newsletter"}
                  </h3>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Title</Label>
                        <Input
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="date">Date</Label>
                        <Input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label>PDF Document</Label>
                        <div className="flex space-x-4 mb-2">
                          <button
                            type="button"
                            onClick={() => setUploadMethod('url')}
                            className={`px-4 py-2 rounded-md transition-colors ${
                              uploadMethod === 'url' 
                                ? 'bg-church-navy text-white'
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            }`}
                          >
                            <Link size={16} className="inline-block mr-1" />
                            URL Link
                          </button>
                          <button
                            type="button"
                            onClick={() => setUploadMethod('upload')}
                            className={`px-4 py-2 rounded-md transition-colors ${
                              uploadMethod === 'upload' 
                                ? 'bg-church-navy text-white'
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                            }`}
                          >
                            <Upload size={16} className="inline-block mr-1" />
                            Upload File
                          </button>
                        </div>
                        
                        {uploadMethod === 'url' ? (
                          <div className="space-y-2">
                            <Label htmlFor="fileUrl">PDF URL</Label>
                            <Input
                              type="text"
                              id="fileUrl"
                              name="fileUrl"
                              value={formData.fileUrl}
                              onChange={handleChange}
                              required={uploadMethod === 'url'}
                              placeholder="Enter URL to PDF"
                            />
                          </div>
                        ) : (
                          <div className="space-y-2">
                            <Label htmlFor="pdfFile">Upload PDF</Label>
                            <Input
                              type="file"
                              id="pdfFile"
                              name="pdfFile"
                              ref={fileInputRef}
                              accept="application/pdf"
                              onChange={handleFileChange}
                              required={uploadMethod === 'upload'}
                            />
                          </div>
                        )}
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="thumbnailUrl">Thumbnail Image</Label>
                        <div className="flex space-x-4 mb-2">
                          <Input
                            type="text"
                            id="thumbnailUrl"
                            name="thumbnailUrl"
                            value={formData.thumbnailUrl}
                            onChange={handleChange}
                            className="flex-1"
                            placeholder="Enter image URL for thumbnail"
                          />
                          <div className="text-center">or</div>
                          <Input
                            type="file"
                            id="thumbnailFile"
                            name="thumbnailFile"
                            ref={thumbnailInputRef}
                            accept="image/*"
                            onChange={handleFileChange}
                            className="flex-1"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={3}
                        />
                      </div>
                    </div>
                    
                    <div className="flex space-x-3 justify-end">
                      {selectedNewsletter && (
                        <button
                          type="button"
                          onClick={resetForm}
                          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        type="submit"
                        className="px-4 py-2 bg-church-red text-white rounded-md hover:bg-opacity-90"
                      >
                        {selectedNewsletter ? "Update Newsletter" : "Add Newsletter"}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {newsletters.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {newsletters.map(newsletter => (
                    <NewsletterCard
                      key={newsletter.id}
                      id={newsletter.id}
                      title={newsletter.title}
                      date={newsletter.date}
                      fileUrl={newsletter.fileUrl}
                      description={newsletter.description}
                      thumbnailUrl={newsletter.thumbnailUrl}
                      isAdminMode={isAdminMode}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                      onView={handleViewPdf}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-white rounded-lg shadow">
                  <FileText size={48} className="mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500">No newsletters available at this time.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PDF Preview Modal */}
        {previewPdfUrl && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-[80vh] flex flex-col">
              <div className="p-4 border-b flex justify-between items-center">
                <h3 className="text-xl font-semibold">Newsletter Preview</h3>
                <button 
                  onClick={closePreview}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  ×
                </button>
              </div>
              <div className="flex-grow p-4 overflow-hidden">
                <iframe 
                  src={previewPdfUrl} 
                  title="PDF Preview" 
                  className="w-full h-full"
                />
              </div>
              <div className="p-4 border-t flex justify-end space-x-2">
                <button
                  onClick={() => window.open(previewPdfUrl, '_blank')?.print()}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md flex items-center"
                >
                  <Printer size={16} className="mr-2" />
                  Print
                </button>
                <a
                  href={previewPdfUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-church-navy text-white rounded-md flex items-center"
                >
                  <Download size={16} className="mr-2" />
                  Download
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default NewslettersPage;
