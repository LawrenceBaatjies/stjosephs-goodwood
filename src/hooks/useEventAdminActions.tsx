
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { User } from "@supabase/supabase-js";

export const useEventAdminActions = (
  user: User | null, 
  loadEvents: () => Promise<void>, 
  loadPendingEvents: () => Promise<void>,
  setLoading: (loading: boolean) => void
) => {
  const { toast } = useToast();

  // Approve a pending event
  const approveEvent = async (eventId: string) => {
    if (!user) return false;

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from("calendar_events")
        .update({ status: "approved" } as any)
        .eq("id", eventId);

      if (error) {
        console.error("Error approving event:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to approve event. Please try again.",
        });
        return false;
      }

      // Reload events
      loadEvents();
      loadPendingEvents();
      
      toast({
        title: "Event Approved",
        description: "The event has been approved and added to the calendar.",
      });
      
      return true;
    } catch (error) {
      console.error("Error in approveEvent:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  // Delete an event
  const deleteEvent = async (eventId: string) => {
    if (!user) return false;

    setLoading(true);
    
    try {
      const { error } = await supabase
        .from("calendar_events")
        .delete()
        .eq("id", eventId);

      if (error) {
        console.error("Error deleting event:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to delete event. Please try again.",
        });
        return false;
      }

      // Reload events
      loadEvents();
      loadPendingEvents();
      
      toast({
        title: "Event Deleted",
        description: "The event has been deleted from the calendar.",
      });
      
      return true;
    } catch (error) {
      console.error("Error in deleteEvent:", error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    approveEvent,
    deleteEvent
  };
};
