
export interface Newsletter {
  id: string;
  title: string;
  date: string;
  fileUrl: string;
  description: string;
  thumbnailUrl?: string;
}

export interface NewsletterFormData {
  title: string;
  date: string;
  fileUrl: string;
  description: string;
  thumbnailUrl: string;
  fileToUpload?: File | null;
  thumbnailToUpload?: File | null;
}

export type UploadMethod = 'url' | 'upload';
