
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

// Define the structure of the calendar_events table in Supabase
// This helps TypeScript understand what properties are available
export interface CalendarEventRow {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  description?: string | null;
  created_at: string;
  created_by?: string | null;
  updated_at: string;
  status: 'pending' | 'approved';
  contact_name?: string | null;
  contact_email?: string | null;
  contact_phone?: string | null;
}
