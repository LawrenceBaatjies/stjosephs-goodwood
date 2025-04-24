
export interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  category: string;
  description?: string;
}

export interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}
