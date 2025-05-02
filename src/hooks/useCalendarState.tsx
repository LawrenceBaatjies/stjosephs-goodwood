
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Session, User } from "@supabase/supabase-js";
import { Event, Subscriber } from "@/types/calendar";

interface EventRequest {
  title: string;
  date: Date;
  time: string;
  description: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
}

interface NewEvent {
  title: string;
  description: string;
  category: string;
}

export const useCalendarState = () => {
  const { toast } = useToast();
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [pendingEvents, setPendingEvents] = useState<Event[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showEventRequestModal, setShowEventRequestModal] = useState(false);
  const [calendarView, setCalendarView] = useState<'calendar' | 'grid'>('calendar');
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  
  // Auth state
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  // New event form
  const [newEvent, setNewEvent] = useState<NewEvent>({
    title: "",
    description: "",
    category: "Other",
  });

  // Filter events for selected date
  const eventsForSelectedDate = selectedDate
    ? events.filter(
        (event) => format(new Date(event.date), "yyyy-MM-dd") === format(selectedDate, "yyyy-MM-dd")
      )
    : [];

  // Check if a date has events
  const isDateWithEvents = (date: Date) => {
    return events.some(
      (event) => format(new Date(event.date), "yyyy-MM-dd") === format(date, "yyyy-MM-dd")
    );
  };

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
        const formattedEvents: Event[] = data.map((event: any) => ({
          ...event,
          id: event.id,
          date: new Date(event.date),
          created_at: new Date(event.created_at),
          status: 'approved' as const,
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
        const formattedEvents: Event[] = data.map((event: any) => ({
          ...event,
          id: event.id,
          date: new Date(event.date),
          created_at: new Date(event.created_at),
          status: 'pending' as const,
        }));
        
        setPendingEvents(formattedEvents);
      }
    } catch (error) {
      console.error("Error in loadPendingEvents:", error);
    }
  };

  // Handle date selection
  const handleDateSelect = (newDate: Date | undefined) => {
    setSelectedDate(newDate || null);
  };

  // Admin login
  const handleAdminLogin = async (email: string, password: string) => {
    setLoading(true);
    setAuthError(null);
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setAuthError(error.message);
        return;
      }

      if (data && data.user) {
        setUser(data.user);
        setSession(data.session);
        setShowLoginModal(false);
        toast({
          title: "Login successful",
          description: "You now have admin access to the calendar.",
        });
        
        // Load pending events after successful login
        loadPendingEvents();
      }
    } catch (error: any) {
      setAuthError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Admin logout
  const handleLogout = async () => {
    setLoading(true);
    
    try {
      await supabase.auth.signOut();
      setUser(null);
      setSession(null);
      toast({
        title: "Logged out successfully",
      });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoading(false);
    }
  };

  // Submit event request
  const handleEventRequest = async (eventDetails: EventRequest) => {
    setLoading(true);
    
    try {
      // Save the event request
      const { data, error } = await supabase
        .from("calendar_events")
        .insert([
          {
            title: eventDetails.title,
            description: eventDetails.description,
            date: format(eventDetails.date, "yyyy-MM-dd"),
            time: eventDetails.time,
            category: "Other",
            status: "pending",
            contact_name: eventDetails.contactName,
            contact_email: eventDetails.contactEmail,
            contact_phone: eventDetails.contactPhone,
            created_by: user?.id || null,
          },
        ]);

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
  const addEvent = async () => {
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
      const eventData = {
        title: newEvent.title,
        description: newEvent.description,
        date: format(selectedDate, "yyyy-MM-dd"),
        time: "00:00",
        category: newEvent.category,
        status: "approved",
        created_by: user.id,
      };

      const { data, error } = await supabase
        .from("calendar_events")
        .insert([eventData]);

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
      const { error } = await supabase
        .from("calendar_events")
        .update({ status: "approved" })
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

  // Check session on mount and set up auth listener
  useEffect(() => {
    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setSession(session);

      if (event === 'SIGNED_IN' && session?.user) {
        loadPendingEvents();
      }
    });

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setSession(session);
      
      if (session?.user) {
        loadPendingEvents();
      }
    });

    // Load approved events
    loadEvents();

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return {
    date,
    events,
    pendingEvents,
    selectedDate,
    calendarView,
    newEvent,
    user,
    loading,
    authError,
    showLoginModal,
    showEventRequestModal,
    eventsForSelectedDate,
    setDate,
    handleDateSelect,
    setCalendarView,
    setNewEvent,
    addEvent,
    approveEvent,
    deleteEvent,
    isDateWithEvents,
    handleAdminLogin,
    handleLogout,
    handleEventRequest,
    setShowLoginModal,
    setShowEventRequestModal,
  };
};
