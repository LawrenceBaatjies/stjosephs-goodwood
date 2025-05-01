
import React from "react";
import { Printer, Download, X, FileImage, FileText, Upload } from "lucide-react";

interface PDFPreviewProps {
  previewPdfUrl: string | null;
  closePreview: () => void;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ previewPdfUrl, closePreview }) => {
  if (!previewPdfUrl) return null;

  // Determine file type based on URL extension
  const isImage = previewPdfUrl.match(/\.(jpeg|jpg|png|gif|webp)$/i) !== null;
  const isPdf = previewPdfUrl.match(/\.(pdf)$/i) !== null;
  
  const renderPreview = () => {
    if (isImage) {
      return (
        <div className="h-full w-full flex items-center justify-center bg-gray-100">
          <img
            src={previewPdfUrl}
            alt="Newsletter"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      );
    } else if (isPdf) {
      return (
        <iframe 
          src={previewPdfUrl} 
          title="PDF Preview" 
          className="w-full h-full"
          allowFullScreen
        />
      );
    } else {
      return (
        <div className="h-full w-full flex flex-col items-center justify-center bg-gray-100">
          <FileImage size={64} className="text-gray-400 mb-4" />
          <p className="text-gray-500">File format not supported for preview</p>
        </div>
      );
    }
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-6xl h-[85vh] flex flex-col">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-gray-50 text-gray-800">
          <div className="flex items-center">
            {isPdf ? (
              <FileText size={24} className="text-red-600 mr-2" />
            ) : (
              <FileImage size={24} className="text-blue-600 mr-2" />
            )}
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
          <div className="bg-white h-full overflow-auto rounded shadow border">
            {renderPreview()}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-3 bg-gray-50">
          {isPdf && (
            <button
              onClick={() => window.open(previewPdfUrl, '_blank')?.print()}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md flex items-center"
            >
              <Printer size={16} className="mr-2" />
              Print
            </button>
          )}
          <a
            href={previewPdfUrl}
            download
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
