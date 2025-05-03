
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendarHero from "@/components/calendar/CalendarHero";
import CalendarSection from "@/components/calendar/CalendarSection";
import { useCalendarState } from "@/hooks/useCalendarState";
import { Button } from "@/components/ui/button";

const Calendar = () => {
  const calendarState = useCalendarState();
  const { 
    loading, 
    user, 
    showLoginModal, 
    setShowLoginModal,
    showEventRequestModal, 
    setShowEventRequestModal
  } = calendarState;

  if (loading) {
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
        
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-end gap-4 mb-6">
            {!user && (
              <>
                <Button 
                  variant="outline" 
                  onClick={() => setShowLoginModal(true)}
                >
                  Admin Login
                </Button>
                <Button 
                  onClick={() => setShowEventRequestModal(true)}
                >
                  Request Event
                </Button>
              </>
            )}
          </div>
        </div>
        
        <CalendarSection calendarState={calendarState} />
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
