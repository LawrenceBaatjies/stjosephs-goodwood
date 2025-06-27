
import { useState } from "react";
import { format, addDays, subDays, addWeeks, subWeeks, addMonths, subMonths } from "date-fns";
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
  
  // Get events management - pass the AdminUser directly
  const events = useCalendarEvents(auth.user, setLoading);
  
  // Get date handling
  const dates = useCalendarDates(events.events);
  
  // Calculate range for the selected dates based on view
  const getRangeStartDate = () => {
    return dates.selectedDate || new Date();
  };
  
  const getRangeEndDate = () => {
    if (!dates.selectedDate) return new Date();
    
    if (currentView === "week") {
      return addDays(dates.selectedDate, 6);
    } else if (currentView === "month") {
      return addDays(dates.selectedDate, 30);
    }
    
    return dates.selectedDate; // for day view
  };
  
  // Helper functions for date navigation
  const getNextDate = () => {
    if (currentView === "month") {
      dates.setDate(addMonths(dates.date, 1));
    } else if (currentView === "week") {
      dates.setDate(addWeeks(dates.date, 1));
    } else {
      dates.setDate(addDays(dates.date, 1));
    }
  };
  
  const getPrevDate = () => {
    if (currentView === "month") {
      dates.setDate(subMonths(dates.date, 1));
    } else if (currentView === "week") {
      dates.setDate(subWeeks(dates.date, 1));
    } else {
      dates.setDate(subDays(dates.date, 1));
    }
  };
  
  const goToToday = () => {
    dates.setDate(new Date());
    dates.handleDateSelect(new Date());
  };
  
  const formatMonthYear = (date: Date) => format(date, "MMMM yyyy");
  
  const formatDateRange = (start: Date, end: Date) => {
    return `${format(start, "MMM d")} - ${format(end, "MMM d, yyyy")}`;
  };

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
    formatMonthYear,
    formatDateRange,
    rangeStartDate: getRangeStartDate(),
    rangeEndDate: getRangeEndDate(),
    getNextDate,
    getPrevDate,
    goToToday,
    
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
