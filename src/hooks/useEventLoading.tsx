
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Event, CalendarEventRow } from "@/types/calendar";
import { User } from "@supabase/supabase-js";

export const useEventLoading = (user: User | null) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [pendingEvents, setPendingEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);

  // Load events from Supabase
  const loadEvents = async () => {
    try {
      const { data, error } = await supabase
        .from("calendar_events")
        .select("*")
        .eq("status", "approved");

      if (error) {
        console.error("Error loading events:", error);
        return;
      }

      if (data) {
        // Create properly typed Event objects
        const formattedEvents = data.map((event) => ({
          id: event.id,
          title: event.title,
          date: new Date(event.date),
          time: event.time,
          category: event.category,
          description: event.description || undefined,
          status: 'approved' as const,
          created_at: new Date(event.created_at),
          created_by: event.created_by,
          updated_at: event.updated_at,
          contact_name: event.contact_name || undefined,
          contact_email: event.contact_email || undefined,
          contact_phone: event.contact_phone || undefined,
        }));
        
        setEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error in loadEvents:", error);
    }
  };

  // Load pending events for admins
  const loadPendingEvents = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from("calendar_events")
        .select("*")
        .eq("status", "pending");

      if (error) {
        console.error("Error loading pending events:", error);
        return;
      }

      if (data) {
        // Create properly typed Event objects
        const formattedEvents = data.map((event) => ({
          id: event.id,
          title: event.title,
          date: new Date(event.date),
          time: event.time,
          category: event.category,
          description: event.description || undefined,
          status: 'pending' as const,
          created_at: new Date(event.created_at),
          created_by: event.created_by,
          updated_at: event.updated_at,
          contact_name: event.contact_name || undefined,
          contact_email: event.contact_email || undefined,
          contact_phone: event.contact_phone || undefined,
        }));
        
        setPendingEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error in loadPendingEvents:", error);
    }
  };

  // Load events on first render and whenever user changes
  useEffect(() => {
    loadEvents();
    
    if (user) {
      loadPendingEvents();
    }
  }, [user]);

  return {
    events,
    pendingEvents,
    loadEvents,
    loadPendingEvents,
    loading,
    setLoading
  };
};
