
import { format } from "date-fns";
import { Event } from "@/types/calendar";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

interface EventListProps {
  events: Event[];
  isAdmin?: boolean;
  onDelete?: (id: string) => void;
}

const EventList = ({ events, isAdmin = false, onDelete }: EventListProps) => {
  return events.length > 0 ? (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="p-4 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <div className="flex items-center gap-2">
              <span className="text-sm bg-gray-200 px-2 py-1 rounded-full text-gray-700">
                {event.category}
              </span>
              
              {isAdmin && onDelete && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-red-600 hover:text-red-800 p-1 h-auto"
                  onClick={() => onDelete(event.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          <p className="text-gray-700 mb-2">Time: {event.time}</p>
          {event.description && <p className="text-gray-600">{event.description}</p>}
        </div>
      ))}
    </div>
  ) : (
    <p className="text-gray-500 text-center py-6">No events scheduled for this date.</p>
  );
};

export default EventList;
