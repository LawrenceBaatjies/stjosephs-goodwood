import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarPlus, Download, Mail, AlertTriangle } from "lucide-react";
import { format } from "date-fns";
import { supabase, isSupabaseConfigured } from "@/lib/supabase-client";
import { toast } from "@/components/ui/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const sampleEvents = [
  { id: 1, title: "Sunday Mass", date: new Date(2025, 4, 4), time: "09:00", category: "Mass" },
  { id: 2, title: "Choir Practice", date: new Date(2025, 4, 6), time: "18:30", category: "Music" },
  { id: 3, title: "Parish Council Meeting", date: new Date(2025, 4, 10), time: "19:00", category: "Meeting" },
  { id: 4, title: "Children's Liturgy", date: new Date(2025, 4, 11), time: "09:00", category: "Liturgy" },
  { id: 5, title: "Baptism Service", date: new Date(2025, 4, 17), time: "12:00", category: "Sacrament" },
  { id: 6, title: "Food Pantry Distribution", date: new Date(2025, 4, 20), time: "10:00", category: "Outreach" },
];

interface Event {
  id: number;
  title: string;
  date: Date;
  time: string;
  category: string;
  description?: string;
}

interface Subscriber {
  id: string;
  email: string;
  created_at: string;
}

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

        if (error) {
          throw error;
        }

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

  const downloadCalendar = () => {
    toast({
      title: "Download Started",
      description: "Your calendar is being downloaded as a PDF.",
    });
  };

  const sendCalendarByEmail = () => {
    toast({
      title: "Email Sent",
      description: "The calendar has been sent to your email.",
    });
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
              {!isSubscriber && (
                <Button 
                  onClick={() => setShowSubscribeForm(true)}
                  className="mt-6"
                >
                  Subscribe for Full Access
                </Button>
              )}
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7">
                <Card className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-[#d4a760]">Parish Events</h2>
                    <div className="flex gap-2">
                      {isSubscriber ? (
                        <>
                          <Button variant="outline" onClick={downloadCalendar}>
                            <Download className="h-4 w-4 mr-2" />
                            Download PDF
                          </Button>
                          <Button variant="outline" onClick={sendCalendarByEmail}>
                            <Mail className="h-4 w-4 mr-2" />
                            Email Calendar
                          </Button>
                        </>
                      ) : (
                        <Button onClick={() => setShowSubscribeForm(true)}>
                          Subscribe for More
                        </Button>
                      )}
                    </div>
                  </div>
                  
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
                  
                  {eventsForSelectedDate.length > 0 ? (
                    <div className="space-y-4">
                      {eventsForSelectedDate.map((event) => (
                        <div key={event.id} className="p-4 rounded-lg bg-gray-50">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg">{event.title}</h3>
                            <span className="text-sm bg-gray-200 px-2 py-1 rounded-full text-gray-700">
                              {event.category}
                            </span>
                          </div>
                          <p className="text-gray-700 mb-2">Time: {event.time}</p>
                          {event.description && <p className="text-gray-600">{event.description}</p>}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-6">No events scheduled for this date.</p>
                  )}

                  {isSubscriber && selectedDate && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="event-title">Event Title</Label>
                          <Input
                            id="event-title"
                            value={newEvent.title}
                            onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                            placeholder="Enter event title"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="event-time">Time</Label>
                          <Input
                            id="event-time"
                            value={newEvent.time}
                            onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                            placeholder="HH:MM"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="event-category">Category</Label>
                          <Select 
                            value={newEvent.category} 
                            onValueChange={(value) => setNewEvent({...newEvent, category: value})}
                          >
                            <SelectTrigger id="event-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Mass">Mass</SelectItem>
                              <SelectItem value="Liturgy">Liturgy</SelectItem>
                              <SelectItem value="Sacrament">Sacrament</SelectItem>
                              <SelectItem value="Meeting">Meeting</SelectItem>
                              <SelectItem value="Outreach">Outreach</SelectItem>
                              <SelectItem value="Music">Music</SelectItem>
                              <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="event-description">Description (Optional)</Label>
                          <Input
                            id="event-description"
                            value={newEvent.description}
                            onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                            placeholder="Enter event description"
                          />
                        </div>

                        <Button 
                          onClick={addEvent} 
                          className="w-full"
                          disabled={!newEvent.title || !newEvent.time}
                        >
                          <CalendarPlus className="h-4 w-4 mr-2" />
                          Add Event
                        </Button>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            </div>
          </div>
        </section>

        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-[#d4a760]">Subscribe to Calendar</h3>
            <p className="mb-6">
              Subscribe to unlock premium features:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Add events to the parish calendar</li>
              <li>Download calendar as PDF</li>
              <li>Receive email notifications of upcoming events</li>
              <li>Edit and manage your events</li>
            </ul>
            
            <div className="mb-4">
              <Label htmlFor="subscribe-email">Email Address</Label>
              <Input 
                id="subscribe-email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1"
              />
            </div>
            
            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={() => setShowSubscribeForm(false)} disabled={loading}>Cancel</Button>
              <Button onClick={handleSubscribe} disabled={loading || !email}>
                {loading ? "Processing..." : "Subscribe Now"}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
