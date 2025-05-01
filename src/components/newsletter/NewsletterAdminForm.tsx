import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Link, FileImage } from "lucide-react";
import { useNewsletterToast } from "@/hooks/useNewsletterToast";
import { Newsletter, NewsletterFormData, UploadMethod } from "./types";

interface NewsletterAdminFormProps {
  formData: NewsletterFormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
  selectedNewsletter: Newsletter | null;
  uploadMethod: UploadMethod;
  setUploadMethod: (method: UploadMethod) => void;
}

const NewsletterAdminForm: React.FC<NewsletterAdminFormProps> = ({
  formData,
  handleChange,
  handleFileChange,
  handleSubmit,
  resetForm,
  selectedNewsletter,
  uploadMethod,
  setUploadMethod
}) => {
  const { toast } = useNewsletterToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);

  return (
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
            <Label>Newsletter File (PDF, JPG, PNG)</Label>
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
                <Label htmlFor="fileUrl">File URL (PDF, JPG, PNG)</Label>
                <Input
                  type="text"
                  id="fileUrl"
                  name="fileUrl"
                  value={formData.fileUrl}
                  onChange={handleChange}
                  required={uploadMethod === 'url'}
                  placeholder="Enter URL to PDF or image file"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <Label htmlFor="pdfFile">Upload File</Label>
                <Input
                  type="file"
                  id="pdfFile"
                  name="pdfFile"
                  ref={fileInputRef}
                  accept="application/pdf,image/jpeg,image/png,image/jpg"
                  onChange={handleFileChange}
                  required={uploadMethod === 'upload'}
                />
                <p className="text-xs text-gray-500">Accepted formats: PDF, JPG, PNG</p>
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
  );
};

export default NewsletterAdminForm;
