
import { format } from "date-fns";
import { Event } from "@/types/calendar";

interface EventListProps {
  events: Event[];
}

const EventList = ({ events }: EventListProps) => {
  return events.length > 0 ? (
    <div className="space-y-4">
      {events.map((event) => (
        <div key={event.id} className="p-4 rounded-lg bg-gray-50">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-semibold text-lg">{event.title}</h3>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded-full text-gray-700">
              {event.category}
            </span>
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
