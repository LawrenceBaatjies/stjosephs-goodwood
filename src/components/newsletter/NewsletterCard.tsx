
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Printer, Eye } from "lucide-react";

export interface NewsletterCardProps {
  id: string;
  title: string;
  date: string;
  fileUrl: string;
  description: string;
  thumbnailUrl?: string;
  isAdminMode?: boolean;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView?: (fileUrl: string) => void;
}

const NewsletterCard = ({
  id,
  title,
  date,
  fileUrl,
  description,
  thumbnailUrl,
  isAdminMode = false,
  onEdit,
  onDelete,
  onView,
}: NewsletterCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePrint = () => {
    window.open(fileUrl, '_blank')?.print();
  };

  const handleView = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onView) {
      onView(fileUrl);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    // Let the default link behavior happen for downloads
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all hover:shadow-md">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer" onClick={handleView}>
        {thumbnailUrl ? (
          <img 
            src={thumbnailUrl} 
            alt={`${title} thumbnail`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <FileText size={64} className="text-gray-400" />
          </div>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity duration-200">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleView}
            className="flex items-center"
          >
            <Eye className="mr-1" size={16} />
            View PDF
          </Button>
        </div>
      </div>
      <CardContent className="flex-grow pt-4">
        <h3 className="text-lg font-semibold text-church-navy mb-1 line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{formatDate(date)}</p>
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="pt-0 flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleView}
          className="flex-1"
        >
          <Eye className="mr-1" size={16} />
          View
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handlePrint}
          className="flex-1"
        >
          <Printer className="mr-1" size={16} />
          Print
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          asChild
        >
          <a 
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            onClick={handleDownload}
          >
            <Download className="mr-1" size={16} />
            Download
          </a>
        </Button>
        
        {isAdminMode && (
          <>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onEdit && onEdit(id)}
              className="flex-1 bg-yellow-50 hover:bg-yellow-100 text-yellow-700"
            >
              Edit
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onDelete && onDelete(id)}
              className="flex-1 bg-red-50 hover:bg-red-100 text-red-700"
            >
              Delete
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};

export default NewsletterCard;
