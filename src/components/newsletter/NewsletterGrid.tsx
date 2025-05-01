
import React from "react";
import { FileText } from "lucide-react";
import NewsletterCard from "./NewsletterCard";

export interface Newsletter {
  id: string;
  title: string;
  date: string;
  fileUrl: string;
  description: string;
  thumbnailUrl?: string;
}

interface NewsletterGridProps {
  newsletters: Newsletter[];
  isAdminMode: boolean;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onView: (fileUrl: string) => void;
  searchTerm?: string;
  selectedYear?: string;
  selectedMonth?: string;
}

const NewsletterGrid: React.FC<NewsletterGridProps> = ({ 
  newsletters, 
  isAdminMode, 
  onEdit, 
  onDelete, 
  onView,
  searchTerm = "",
  selectedYear = "all",
  selectedMonth = "all"
}) => {
  // Filter newsletters based on search term and filters
  const filteredNewsletters = newsletters.filter(newsletter => {
    // Search term filter
    const matchesSearch = searchTerm === "" || 
      newsletter.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      newsletter.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Date filters
    const newsletterDate = new Date(newsletter.date);
    const matchesYear = selectedYear === "all" || 
      newsletterDate.getFullYear().toString() === selectedYear;
    
    const matchesMonth = selectedMonth === "all" || 
      (newsletterDate.getMonth() + 1).toString().padStart(2, '0') === selectedMonth;
    
    return matchesSearch && matchesYear && matchesMonth;
  });

  return (
    <>
      {filteredNewsletters.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNewsletters.map(newsletter => (
            <NewsletterCard
              key={newsletter.id}
              id={newsletter.id}
              title={newsletter.title}
              date={newsletter.date}
              fileUrl={newsletter.fileUrl}
              description={newsletter.description}
              thumbnailUrl={newsletter.thumbnailUrl}
              isAdminMode={isAdminMode}
              onEdit={onEdit}
              onDelete={onDelete}
              onView={onView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-white rounded-lg shadow">
          <FileText size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500">
            {searchTerm || selectedYear !== "all" || selectedMonth !== "all" 
              ? "No newsletters match your search criteria." 
              : "No newsletters available at this time."}
          </p>
        </div>
      )}
    </>
  );
};

export default NewsletterGrid;
