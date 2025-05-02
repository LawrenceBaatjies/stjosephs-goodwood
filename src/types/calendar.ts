
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
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}

export interface EventRequest {
  title: string;
  date: Date;
  time: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

export interface NewEvent {
  title: string;
  description: string;
  category: string;
}
