
import { useState } from "react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { EventRequest, NewEvent } from "@/types/calendar";
import { AdminUser } from "./useCalendarAuth";

export const useEventManagement = (
  user: AdminUser | null, 
  loadEvents: () => Promise<void>, 
  loadPendingEvents: () => Promise<void>,
  setLoading: (loading: boolean) => void
) => {
  const { toast } = useToast();
  
  // New event form
  const [newEvent, setNewEvent] = useState<NewEvent>({
    title: "",
    description: "",
    category: "Other",
  });

  // Submit event request
  const handleEventRequest = async (eventDetails: EventRequest): Promise<void> => {
    setLoading(true);
    
    try {
      const eventPayload = {
        title: eventDetails.title,
        description: eventDetails.description,
        date: format(eventDetails.date, "yyyy-MM-dd"),
        time: eventDetails.time,
        category: "Other",
        created_by: user?.id || null,
        contact_name: eventDetails.contactName,
        contact_email: eventDetails.contactEmail,
        contact_phone: eventDetails.contactPhone,
        status: "pending"
      };

      // Save the event request
      const { data, error } = await supabase
        .from("calendar_events")
        .insert([eventPayload as any]);

      if (error) {
        console.error("Error submitting event request:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to submit event request. Please try again.",
        });
        return;
      }

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
  const addEvent = async (selectedDate: Date | null): Promise<void> => {
    if (!user || !selectedDate || !newEvent.title.trim()) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please select a date and enter event details.",
      });
      return;
    }

    setLoading(true);
    
    try {
      const eventPayload = {
        title: newEvent.title.trim(),
        description: newEvent.description?.trim() || null,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: "09:00", // Default time
        category: newEvent.category || "Other",
        created_by: user.id,
        status: "approved"
      };

      console.log("Adding event with payload:", eventPayload);

      const { data, error } = await supabase
        .from("calendar_events")
        .insert([eventPayload])
        .select();

      if (error) {
        console.error("Supabase error adding event:", error);
        toast({
          variant: "destructive",
          title: "Failed to add event",
          description: `Database error: ${error.message}`,
        });
        return;
      }

      console.log("Event added successfully:", data);

      // Reset form and reload events
      setNewEvent({
        title: "",
        description: "",
        category: "Other",
      });
      
      await loadEvents();
      
      toast({
        title: "Event Added",
        description: "The event has been added to the calendar.",
      });
    } catch (error) {
      console.error("Error in addEvent:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred while adding the event.",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    newEvent,
    setNewEvent,
    handleEventRequest,
    addEvent
  };
};
