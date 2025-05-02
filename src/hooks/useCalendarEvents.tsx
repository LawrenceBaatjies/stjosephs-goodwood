
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Event, EventRequest, NewEvent } from "@/types/calendar";
import { User } from "@supabase/supabase-js";
import { TablesInsert } from "@/integrations/supabase/types";

export const useCalendarEvents = (user: User | null, setLoading: (loading: boolean) => void) => {
  const { toast } = useToast();
  const [events, setEvents] = useState<Event[]>([]);
  const [pendingEvents, setPendingEvents] = useState<Event[]>([]);
  const [showEventRequestModal, setShowEventRequestModal] = useState(false);
  
  // New event form
  const [newEvent, setNewEvent] = useState<NewEvent>({
    title: "",
    description: "",
    category: "Other",
  });

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
        // Create properly typed Event objects without using spread operator
        const formattedEvents: Event[] = data.map((event: any) => ({
          id: event.id,
          title: event.title,
          date: new Date(event.date),
          time: event.time,
          category: event.category,
          description: event.description,
          status: 'approved',
          created_at: new Date(event.created_at),
          created_by: event.created_by,
          updated_at: event.updated_at,
          contact_name: event.contact_name,
          contact_email: event.contact_email,
          contact_phone: event.contact_phone,
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
        // Create properly typed Event objects without using spread operator
        const formattedEvents: Event[] = data.map((event: any) => ({
          id: event.id,
          title: event.title,
          date: new Date(event.date),
          time: event.time,
          category: event.category,
          description: event.description,
          status: 'pending',
          created_at: new Date(event.created_at),
          created_by: event.created_by,
          updated_at: event.updated_at,
          contact_name: event.contact_name,
          contact_email: event.contact_email,
          contact_phone: event.contact_phone,
        }));
        
        setPendingEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error in loadPendingEvents:", error);
    }
  };

  // Submit event request
  const handleEventRequest = async (eventDetails: EventRequest) => {
    setLoading(true);
    
    try {
      // Define the event insert payload with correct typing from Supabase schema
      const eventPayload: TablesInsert<"calendar_events"> = {
        title: eventDetails.title,
        description: eventDetails.description,
        date: format(eventDetails.date, "yyyy-MM-dd"),
        time: eventDetails.time,
        category: "Other",
        contact_name: eventDetails.contactName,
        contact_email: eventDetails.contactEmail,
        contact_phone: eventDetails.contactPhone,
        created_by: user?.id || null,
        // We'll handle adding status directly at the database level
      };

      // Add the status using direct typing to any since it exists in DB but not in types
      const fullPayload = {
        ...eventPayload,
        status: "pending" // Type as any to bypass TS checking
      } as any;

      // Save the event request
      const { data, error } = await supabase
        .from("calendar_events")
        .insert([fullPayload]);

      if (error) {
        console.error("Error submitting event request:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to submit event request. Please try again.",
        });
        return;
      }

      setShowEventRequestModal(false);
      toast({
        title: "Request Submitted",
        description: "Your event request has been submitted for review.",
      });

      // Reload pending events if user is admin
      if (user) {
        loadPendingEvents();
      }
    } catch (error) {
      console.error("Error in handleEventRequest:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Add new event (admin only)
  const addEvent = async (selectedDate: Date | null) => {
    if (!user || !selectedDate || !newEvent.title) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select a date and enter event details.",
      });
      return;
    }

    setLoading(true);
    
    try {
      // Define the event insert payload with correct typing from Supabase schema
      const eventPayload: TablesInsert<"calendar_events"> = {
        title: newEvent.title,
        description: newEvent.description,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: "00:00",
        category: newEvent.category,
        created_by: user.id,
        // We'll handle adding status directly at the database level
      };

      // Add the status using direct typing to any since it exists in DB but not in types
      const fullPayload = {
        ...eventPayload,
        status: "approved" // Type as any to bypass TS checking
      } as any;

      // For adding events, we need to match the database schema exactly
      const { error } = await supabase
        .from("calendar_events")
        .insert([fullPayload]);

      if (error) {
        console.error("Error adding event:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to add event. Please try again.",
        });
        return;
      }

      // Reset form and reload events
      setNewEvent({
        title: "",
        description: "",
        category: "Other",
      });
      
      loadEvents();
      
      toast({
        title: "Event Added",
        description: "The event has been added to the calendar.",
      });
    } catch (error) {
      console.error("Error in addEvent:", error);
    } finally {
      setLoading(false);
    }
  };

  // Approve a pending event
  const approveEvent = async (eventId: string) => {
    if (!user) return;

    setLoading(true);
    
    try {
      // Use the update method to change the status to approved
      const { error } = await supabase
        .from("calendar_events")
        .update({ status: "approved" } as any)
        .eq("id", eventId);

      if (error) {
        console.error("Error approving event:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to approve event. Please try again.",
        });
        return;
      }

      // Reload events
      loadEvents();
      loadPendingEvents();
      
      toast({
        title: "Event Approved",
        description: "The event has been approved and added to the calendar.",
      });
    } catch (error) {
      console.error("Error in approveEvent:", error);
    } finally {
      setLoading(false);
    }
  };

  // Delete an event
  const deleteEvent = async (eventId: string) => {
    if (!user) return;

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from("calendar_events")
        .delete()
        .eq("id", eventId);

      if (error) {
        console.error("Error deleting event:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to delete event. Please try again.",
        });
        return;
      }

      // Reload events
      loadEvents();
      loadPendingEvents();
      
      toast({
        title: "Event Deleted",
        description: "The event has been deleted from the calendar.",
      });
    } catch (error) {
      console.error("Error in deleteEvent:", error);
    } finally {
      setLoading(false);
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
    newEvent,
    showEventRequestModal,
    setNewEvent,
    addEvent,
    approveEvent,
    deleteEvent,
    handleEventRequest,
    setShowEventRequestModal,
    loadEvents,
    loadPendingEvents,
  };
};
