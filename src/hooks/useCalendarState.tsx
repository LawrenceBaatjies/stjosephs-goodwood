
import { useState } from "react";
import { useCalendarDates } from "./useCalendarDates";
import { useCalendarAuth } from "./useCalendarAuth";
import { useCalendarEvents } from "./useCalendarEvents";

export const useCalendarState = () => {
  const [loading, setLoading] = useState(false);
  
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
    
    // Date handling
    date: dates.date,
    selectedDate: dates.selectedDate,
    calendarView: dates.calendarView,
    eventsForSelectedDate: dates.eventsForSelectedDate,
    setDate: dates.setDate,
    handleDateSelect: dates.handleDateSelect,
    setCalendarView: dates.setCalendarView,
    isDateWithEvents: dates.isDateWithEvents,
    
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
