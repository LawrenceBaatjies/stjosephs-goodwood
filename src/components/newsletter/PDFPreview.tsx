
import React from "react";
import { Printer, Download } from "lucide-react";

interface PDFPreviewProps {
  previewPdfUrl: string | null;
  closePreview: () => void;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ previewPdfUrl, closePreview }) => {
  if (!previewPdfUrl) return null;
  
  return (
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
  );
};

export default PDFPreview;
