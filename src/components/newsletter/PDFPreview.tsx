
import React from "react";
import { Printer, Download, X, FileImage, FileText } from "lucide-react";

interface PDFPreviewProps {
  previewPdfUrl: string | null;
  closePreview: () => void;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ previewPdfUrl, closePreview }) => {
  if (!previewPdfUrl) return null;
  
  // Fixed image for newsletter template regardless of the file type
  const newsletterImage = "/lovable-uploads/e2a0c4ac-9f5a-4b85-a016-d74c7bb0f05e.png";
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-[85vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 text-gray-800">
          <div className="flex items-center">
            <FileText size={24} className="text-red-600 mr-2" />
            <h3 className="text-xl font-semibold">Parish Newsletter</h3>
          </div>
          <button 
            onClick={closePreview}
            className="p-2 hover:bg-gray-200 rounded-full"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-grow bg-gray-100 overflow-hidden">
          <div className="bg-white h-full overflow-auto rounded shadow border flex items-center justify-center">
            {/* Always display the newsletter image */}
            <img
              src={newsletterImage}
              alt="Parish Newsletter"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50">
          <button
            onClick={() => window.open(newsletterImage, '_blank')?.print()}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md flex items-center"
          >
            <Printer size={16} className="mr-2" />
            Print
          </button>
          <a
            href={newsletterImage}
            download="parish-newsletter.png"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center"
          >
            <Download size={16} className="mr-2" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default PDFPreview;
