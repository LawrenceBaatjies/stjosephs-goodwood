
import React from "react";
import { Printer, Download, X } from "lucide-react";

interface PDFPreviewProps {
  previewPdfUrl: string | null;
  closePreview: () => void;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({ previewPdfUrl, closePreview }) => {
  if (!previewPdfUrl) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-[#333333] rounded-lg shadow-xl w-full max-w-6xl h-[85vh] flex flex-col">
        <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-[#232323] text-white">
          <div className="flex items-center">
            <div className="bg-[#f40f02] p-1 rounded mr-2">
              <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 11.5V4.5H9V11.5H23Z" fill="white"/>
                <path d="M9 27.5V20.5H23V27.5H9Z" fill="white"/>
                <path d="M23 18.5H9V13.5H23V18.5Z" fill="white"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold">Parish Newsletter</h3>
          </div>
          <button 
            onClick={closePreview}
            className="p-2 hover:bg-gray-700 rounded-full text-white"
            aria-label="Close preview"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-grow bg-[#525659] p-2 overflow-hidden">
          <div className="bg-white h-full overflow-auto rounded shadow">
            <iframe 
              src={previewPdfUrl} 
              title="PDF Preview" 
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
        
        <div className="p-3 border-t border-gray-700 flex justify-end space-x-3 bg-[#232323]">
          <button
            onClick={() => window.open(previewPdfUrl, '_blank')?.print()}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md flex items-center"
          >
            <Printer size={16} className="mr-2" />
            Print
          </button>
          <a
            href={previewPdfUrl}
            download
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#f40f02] hover:bg-[#d30d02] text-white rounded-md flex items-center"
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
