
export interface Notice {
  id: string;
  title: string;
  date: string;
  time: string | null;
  description: string | null;
  location: string | null;
}

export interface NoticeFormData {
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
}
