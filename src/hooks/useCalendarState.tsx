
import { useState } from "react";
import { format, addDays, subDays } from "date-fns";
import { useCalendarDates } from "./useCalendarDates";
import { useCalendarAuth } from "./useCalendarAuth";
import { useCalendarEvents } from "./useCalendarEvents";
import { Event } from "@/types/calendar";

// Define the calendar view type
export type CalendarViewType = "month" | "week" | "day";

export const useCalendarState = () => {
  const [loading, setLoading] = useState(false);
  const [currentView, setCurrentView] = useState<CalendarViewType>("month");
  
  // Get auth state
  const auth = useCalendarAuth();
  
  // Get events management
  const events = useCalendarEvents(auth.user, setLoading);
  
  // Get date handling
  const dates = useCalendarDates(events.events);

  return {
    // Auth state
    user: auth.user,
    loading: loading || auth.loading,
    authError: auth.authError,
    showLoginModal: auth.showLoginModal,
    setShowLoginModal: auth.setShowLoginModal,
    handleAdminLogin: auth.handleAdminLogin,
    handleLogout: auth.handleLogout,
    
    // View state
    currentView,
    setCurrentView,
    
    // Date handling
    date: dates.date,
    selectedDate: dates.selectedDate,
    setSelectedDate: dates.handleDateSelect, // Expose this for the CalendarHeader component
    calendarView: dates.calendarView,
    eventsForSelectedDate: dates.eventsForSelectedDate,
    setDate: dates.setDate,
    handleDateSelect: dates.handleDateSelect,
    setCalendarView: dates.setCalendarView,
    isDateWithEvents: dates.isDateWithEvents,
    
    // Add date-related functions needed by CalendarHeader
    formatMonthYear: (date: Date) => format(date, "MMMM yyyy"),
    formatDateRange: (start: Date, end: Date) => `${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`,
    rangeStartDate: dates.selectedDate || new Date(),
    rangeEndDate: dates.selectedDate || new Date(),
    getNextDate: () => {
      dates.setDate(addDays(dates.date, currentView === "month" ? 30 : currentView === "week" ? 7 : 1));
    },
    getPrevDate: () => {
      dates.setDate(subDays(dates.date, currentView === "month" ? 30 : currentView === "week" ? 7 : 1));
    },
    goToToday: () => {
      dates.setDate(new Date());
      dates.handleDateSelect(new Date());
    },
    
    // Events management
    events: events.events,
    pendingEvents: events.pendingEvents,
    newEvent: events.newEvent,
    showEventRequestModal: events.showEventRequestModal,
    setNewEvent: events.setNewEvent,
    addEvent: (selectedDate = dates.selectedDate) => events.addEvent(selectedDate),
    approveEvent: events.approveEvent,
    deleteEvent: events.deleteEvent,
    handleEventRequest: events.handleEventRequest,
    setShowEventRequestModal: events.setShowEventRequestModal,
  };
};
