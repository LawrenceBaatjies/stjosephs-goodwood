
export interface Event {
  id: string;
  title: string;
  date: Date;
  time: string;
  category: string;
  description?: string;
  status: 'pending' | 'approved';
  created_at?: Date;
  created_by?: string | null;
  updated_at?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}
