
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
}

export type UploadMethod = 'url' | 'upload';
