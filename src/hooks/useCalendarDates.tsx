
import { useState } from "react";
import { format } from "date-fns";
import { Event } from "@/types/calendar";

export const useCalendarDates = (events: Event[]) => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarView, setCalendarView] = useState<'calendar' | 'grid'>('calendar');

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

  // Handle date selection
  const handleDateSelect = (newDate: Date | undefined) => {
    setSelectedDate(newDate || null);
  };

  return {
    date,
    selectedDate,
    calendarView,
    eventsForSelectedDate,
    setDate,
    setCalendarView,
    handleDateSelect,
    isDateWithEvents,
  };
};
