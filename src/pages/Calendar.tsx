import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { supabase, isSupabaseConfigured } from "@/lib/supabase-client";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import EventList from "@/components/calendar/EventList";
import AddEventForm from "@/components/calendar/AddEventForm";
import SubscribeModal from "@/components/calendar/SubscribeModal";
import type { Event } from "@/types/calendar";

const sampleEvents = [
  { id: 1, title: "Sunday Mass", date: new Date(2025, 4, 4), time: "09:00", category: "Mass" },
  { id: 2, title: "Choir Practice", date: new Date(2025, 4, 6), time: "18:30", category: "Music" },
  { id: 3, title: "Parish Council Meeting", date: new Date(2025, 4, 10), time: "19:00", category: "Meeting" },
  { id: 4, title: "Children's Liturgy", date: new Date(2025, 4, 11), time: "09:00", category: "Liturgy" },
  { id: 5, title: "Baptism Service", date: new Date(2025, 4, 17), time: "12:00", category: "Sacrament" },
  { id: 6, title: "Food Pantry Distribution", date: new Date(2025, 4, 20), time: "10:00", category: "Outreach" },
];

const Calendar = () => {
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
  const [supabaseConfigured, setSupabaseConfigured] = useState<boolean>(true);

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

  useEffect(() => {
    setSupabaseConfigured(isSupabaseConfigured());
  }, []);

  const handleDateSelect = (newDate: Date | undefined) => {
    setSelectedDate(newDate);
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

      toast({
        title: "Event Added",
        description: "Your event has been successfully added to the calendar.",
      });
    } catch (error) {
      console.error("Error adding event:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to add event. Please try again.",
      });
    }
  };

  const handleSubscribe = async () => {
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);

    if (!supabaseConfigured) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description: "Supabase is not properly configured. Please check your environment variables.",
      });
      setLoading(false);
      return;
    }

    try {
      const { data: existingSubscriber, error: fetchError } = await supabase
        .from('calendar_subscribers')
        .select('*')
        .eq('email', email.toLowerCase())
        .single();

      if (fetchError && fetchError.code !== 'PGRST116') {
        throw fetchError;
      }

      if (existingSubscriber) {
        setIsSubscriber(true);
        localStorage.setItem('calendarSubscriberEmail', email.toLowerCase());
        setShowSubscribeForm(false);
        toast({
          title: "Welcome back!",
          description: "You're already subscribed to the calendar service.",
        });
      } else {
        const { data, error } = await supabase
          .from('calendar_subscribers')
          .insert([{ email: email.toLowerCase() }]);

        if (error) throw error;

        setIsSubscriber(true);
        localStorage.setItem('calendarSubscriberEmail', email.toLowerCase());
        setShowSubscribeForm(false);
        toast({
          title: "Subscription Successful",
          description: "You now have access to all calendar features.",
        });
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      toast({
        variant: "destructive",
        title: "Subscription Failed",
        description: "An error occurred. Please try again.",
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

  if (checkingSubscription) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <p>Loading calendar...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {!supabaseConfigured && (
          <Alert variant="destructive" className="mx-auto my-4 max-w-4xl">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Configuration Error</AlertTitle>
            <AlertDescription>
              Supabase environment variables are missing. Some features may not work properly.
              Please make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your Supabase project settings.
            </AlertDescription>
          </Alert>
        )}
        
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish Calendar</h1>
              <p className="text-xl font-light">
                Stay updated with all upcoming events and activities
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <Card className="p-6">
                  <CalendarHeader 
                    isSubscriber={isSubscriber}
                    onShowSubscribe={() => setShowSubscribeForm(true)}
                  />
                  
                  <CalendarComponent
                    mode="single"
                    selected={selectedDate}
                    onSelect={handleDateSelect}
                    className="rounded-md border pointer-events-auto"
                    modifiers={{
                      withEvents: (date) => isDateWithEvents(date),
                    }}
                    modifiersStyles={{
                      withEvents: { 
                        backgroundColor: "#f0f8ff", 
                        fontWeight: "bold",
                        borderBottom: "2px solid #d4a760" 
                      }
                    }}
                  />
                </Card>
              </div>

              <div className="lg:col-span-5">
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-[#d4a760] mb-6">
                    {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Select a date"}
                  </h2>
                  
                  <EventList events={eventsForSelectedDate} />

                  {isSubscriber && selectedDate && (
                    <AddEventForm
                      newEvent={newEvent}
                      onEventChange={setNewEvent}
                      onAddEvent={addEvent}
                    />
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        {showSubscribeForm && (
          <SubscribeModal
            email={email}
            onEmailChange={setEmail}
            onSubscribe={handleSubscribe}
            onClose={() => setShowSubscribeForm(false)}
            loading={loading}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
