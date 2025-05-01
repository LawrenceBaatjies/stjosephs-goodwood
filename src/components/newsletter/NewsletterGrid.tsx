
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
}

const NewsletterGrid: React.FC<NewsletterGridProps> = ({ 
  newsletters, 
  isAdminMode, 
  onEdit, 
  onDelete, 
  onView 
}) => {
  return (
    <>
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
              onEdit={onEdit}
              onDelete={onDelete}
              onView={onView}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-white rounded-lg shadow">
          <FileText size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500">No newsletters available at this time.</p>
        </div>
      )}
    </>
  );
};

export default NewsletterGrid;
