
import { useState, useEffect } from "react";
import { useToastNotification } from "@/hooks/useToastNotification";
import { supabase } from "@/integrations/supabase/client";
import { Event } from "@/types/calendar";
import { format } from "date-fns";

// Sample events for initial state
const sampleEvents = [
  { id: 1, title: "Sunday Mass", date: new Date(2025, 4, 4), time: "09:00", category: "Mass" },
  { id: 2, title: "Choir Practice", date: new Date(2025, 4, 6), time: "18:30", category: "Music" },
  { id: 3, title: "Parish Council Meeting", date: new Date(2025, 4, 10), time: "19:00", category: "Meeting" },
  { id: 4, title: "Children's Liturgy", date: new Date(2025, 4, 11), time: "09:00", category: "Liturgy" },
  { id: 5, title: "Baptism Service", date: new Date(2025, 4, 17), time: "12:00", category: "Sacrament" },
  { id: 6, title: "Food Pantry Distribution", date: new Date(2025, 4, 20), time: "10:00", category: "Outreach" },
];

export const useCalendarState = () => {
  const { success, error } = useToastNotification();
  const [date, setDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<Event[]>(sampleEvents);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [eventsForSelectedDate, setEventsForSelectedDate] = useState<Event[]>([]);
  const [isSubscriber, setIsSubscriber] = useState<boolean>(false);
  const [showSubscribeForm, setShowSubscribeForm] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [checkingSubscription, setCheckingSubscription] = useState<boolean>(true);
  const [newEvent, setNewEvent] = useState<Partial<Event>>({
    title: "",
    time: "",
    category: "Other",
    description: ""
  });
  const [calendarView, setCalendarView] = useState<'calendar' | 'grid'>('calendar');
  const [subscriptionError, setSubscriptionError] = useState<string | null>(null);

  useEffect(() => {
    const checkSubscription = async () => {
      const savedEmail = localStorage.getItem('calendarSubscriberEmail');
      
      if (savedEmail) {
        setEmail(savedEmail);
        try {
          const { data, error } = await supabase
            .from('calendar_subscribers')
            .select('*')
            .eq('email', savedEmail)
            .single();
            
          if (data) {
            setIsSubscriber(true);
          }
        } catch (error) {
          console.error("Error checking subscription:", error);
        }
      }
      setCheckingSubscription(false);
    };
    
    checkSubscription();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const filteredEvents = events.filter(
        event => 
          event.date.getFullYear() === selectedDate.getFullYear() &&
          event.date.getMonth() === selectedDate.getMonth() &&
          event.date.getDate() === selectedDate.getDate()
      );
      setEventsForSelectedDate(filteredEvents);
    } else {
      setEventsForSelectedDate([]);
    }
  }, [selectedDate, events]);

  const handleDateSelect = (newDate: Date | undefined) => {
    setSelectedDate(newDate);
  };

  const sendEventNotificationEmail = (newEvent: Event) => {
    // In a real application, this would call a serverless function to send emails
    console.log(`Sending email notification about event: ${newEvent.title}`);
    success({
      title: "Event Notification Sent",
      description: "All subscribers have been notified about the new event."
    });
  };

  const addEvent = async () => {
    if (!selectedDate || !newEvent.title || !newEvent.time || !isSubscriber) return;
    
    const newEventObj: Event = {
      id: Math.max(0, ...events.map(e => e.id)) + 1,
      title: newEvent.title || "",
      date: selectedDate,
      time: newEvent.time || "",
      category: newEvent.category || "Other",
      description: newEvent.description
    };
    
    try {
      setEvents(prev => [...prev, newEventObj]);
      setEventsForSelectedDate(prev => [...prev, newEventObj]);
      
      setNewEvent({
        title: "",
        time: "",
        category: "Other",
        description: ""
      });

      // Send email notification about the new event
      sendEventNotificationEmail(newEventObj);

      success({
        title: "Event Added",
        description: "Your event has been successfully added to the calendar."
      });
    } catch (err) {
      console.error("Error adding event:", err);
      error({
        title: "Error",
        description: "Failed to add event. Please try again."
      });
    }
  };

  const handleSubscribe = async () => {
    setSubscriptionError(null);
    
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscriptionError("Please enter a valid email address.");
      error({
        title: "Invalid Email",
        description: "Please enter a valid email address."
      });
      return;
    }

    setLoading(true);

    try {
      // First check if the email already exists
      const { data: existingSubscriber, error: fetchError } = await supabase
        .from('calendar_subscribers')
        .select('*')
        .eq('email', email.toLowerCase())
        .maybeSingle();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (existingSubscriber) {
        setIsSubscriber(true);
        localStorage.setItem('calendarSubscriberEmail', email.toLowerCase());
        setShowSubscribeForm(false);
        success({
          title: "Welcome back!",
          description: "You're already subscribed to the calendar service."
        });
      } else {
        // Insert the new subscriber
        const { data, error: insertError } = await supabase
          .from('calendar_subscribers')
          .insert([{ email: email.toLowerCase() }]);

        if (insertError) throw insertError;

        setIsSubscriber(true);
        localStorage.setItem('calendarSubscriberEmail', email.toLowerCase());
        setShowSubscribeForm(false);
        success({
          title: "Subscription Successful",
          description: "You now have access to all calendar features."
        });
      }
    } catch (err: any) {
      console.error("Error during subscription:", err);
      setSubscriptionError(err.message || "An error occurred. Please try again.");
      error({
        title: "Subscription Failed",
        description: err.message || "An error occurred. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const isDateWithEvents = (date: Date) => {
    return events.some(
      event => 
        event.date.getFullYear() === date.getFullYear() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getDate() === date.getDate()
    );
  };

  return {
    date,
    events,
    selectedDate,
    eventsForSelectedDate,
    isSubscriber,
    showSubscribeForm,
    email,
    loading,
    checkingSubscription,
    newEvent,
    calendarView,
    subscriptionError,
    setEmail,
    setShowSubscribeForm,
    setCalendarView,
    handleDateSelect,
    addEvent,
    handleSubscribe,
    setNewEvent,
    isDateWithEvents
  };
};
