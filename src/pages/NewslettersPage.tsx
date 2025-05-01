
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import NewsletterCard from "@/components/newsletter/NewsletterCard";
import { FileText } from "lucide-react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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
  };

  const toggleAdminMode = () => {
    setIsAdminMode(!isAdminMode);
    resetForm();
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
                        <label htmlFor="title" className="block font-medium text-gray-700">
                          Title
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-md"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="date" className="block font-medium text-gray-700">
                          Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-md"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="fileUrl" className="block font-medium text-gray-700">
                          File URL (PDF Link)
                        </label>
                        <input
                          type="text"
                          id="fileUrl"
                          name="fileUrl"
                          value={formData.fileUrl}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border rounded-md"
                          placeholder="Upload file or enter PDF URL"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="thumbnailUrl" className="block font-medium text-gray-700">
                          Thumbnail URL (optional)
                        </label>
                        <input
                          type="text"
                          id="thumbnailUrl"
                          name="thumbnailUrl"
                          value={formData.thumbnailUrl}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border rounded-md"
                          placeholder="Enter image URL for thumbnail"
                        />
                      </div>
                      
                      <div className="space-y-2 md:col-span-2">
                        <label htmlFor="description" className="block font-medium text-gray-700">
                          Description
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 border rounded-md"
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
      </main>
      <Footer />
    </div>
  );
};

export default NewslettersPage;
