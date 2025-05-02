
import { User } from "@supabase/supabase-js";
import { useEventLoading } from "./useEventLoading";
import { useEventManagement } from "./useEventManagement";
import { useEventAdminActions } from "./useEventAdminActions";
import { useEventRequestModal } from "./useEventRequestModal";

export const useCalendarEvents = (user: User | null, setLoading: (loading: boolean) => void) => {
  // Get event loading functionality
  const eventLoading = useEventLoading(user);
  
  // Get event management functionality
  const eventManagement = useEventManagement(
    user, 
    eventLoading.loadEvents, 
    eventLoading.loadPendingEvents,
    setLoading
  );
  
  // Get event admin actions
  const eventAdmin = useEventAdminActions(
    user, 
    eventLoading.loadEvents, 
    eventLoading.loadPendingEvents,
    setLoading
  );
  
  // Get event request modal state
  const eventModal = useEventRequestModal();
  
  return {
    // Event data
    events: eventLoading.events,
    pendingEvents: eventLoading.pendingEvents,
    
    // Event form state
    newEvent: eventManagement.newEvent,
    setNewEvent: eventManagement.setNewEvent,
    
    // Modal state
    showEventRequestModal: eventModal.showEventRequestModal,
    setShowEventRequestModal: eventModal.setShowEventRequestModal,
    
    // Event management actions
    addEvent: eventManagement.addEvent,
    handleEventRequest: eventManagement.handleEventRequest,
    
    // Admin actions
    approveEvent: eventAdmin.approveEvent,
    deleteEvent: eventAdmin.deleteEvent,
    
    // Reload methods
    loadEvents: eventLoading.loadEvents,
    loadPendingEvents: eventLoading.loadPendingEvents,
  };
};
