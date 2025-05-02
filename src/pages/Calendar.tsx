
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CalendarHero from "@/components/calendar/CalendarHero";
import CalendarSection from "@/components/calendar/CalendarSection";
import { useCalendarState } from "@/hooks/useCalendarState";

const Calendar = () => {
  const calendarState = useCalendarState();
  const { loading } = calendarState;

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
        <CalendarSection calendarState={calendarState} />
      </main>
      <Footer />
    </div>
  );
};

export default Calendar;
