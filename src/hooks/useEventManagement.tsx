
import { useState } from "react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { EventRequest, NewEvent } from "@/types/calendar";
import { User } from "@supabase/supabase-js";

export const useEventManagement = (
  user: User | null, 
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
  const handleEventRequest = async (eventDetails: EventRequest) => {
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
      
      return true;
    } catch (error) {
      console.error("Error in handleEventRequest:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
      return false;
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
      const eventPayload = {
        title: newEvent.title,
        description: newEvent.description,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: "00:00",
        category: newEvent.category,
        created_by: user.id,
        status: "approved"
      };

      // For adding events, we need to match the database schema exactly
      const { error } = await supabase
        .from("calendar_events")
        .insert([eventPayload as any]);

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
      
      return true;
    } catch (error) {
      console.error("Error in addEvent:", error);
      return false;
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
