
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import CalendarHero from "@/components/calendar/CalendarHero";
import CalendarSection from "@/components/calendar/CalendarSection";
import SubscribeModal from "@/components/calendar/SubscribeModal";
import { useCalendarState } from "@/hooks/useCalendarState";

const Calendar = () => {
  const calendarState = useCalendarState();
  const { 
    checkingSubscription, 
    showSubscribeForm, 
    email, 
    loading, 
    subscriptionError,
    setEmail,
    setShowSubscribeForm,
    handleSubscribe
  } = calendarState;

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
        <CalendarHero />
        <CalendarSection calendarState={calendarState} />
        
        {/* Subscription Modal */}
        {showSubscribeForm && (
          <SubscribeModal
            email={email}
            onEmailChange={setEmail}
            onSubscribe={handleSubscribe}
            onClose={() => {
              setShowSubscribeForm(false);
            }}
            loading={loading}
            subscriptionError={subscriptionError}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
