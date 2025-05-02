
import React from "react";
import { format } from "date-fns";
import { Event } from "@/types/calendar";

interface PendingEventItemProps {
  event: Event;
  onApprove: (id: string) => void;
  onDelete: (id: string) => void;
  loading: boolean;
}

const PendingEventItem = ({ 
  event, 
  onApprove, 
  onDelete, 
  loading 
}: PendingEventItemProps) => {
  return (
    <li className="border p-3 rounded-md">
      <div className="flex justify-between">
        <div>
          <h4 className="font-medium">{event.title}</h4>
          <p className="text-sm text-gray-500">
            {format(event.date, "PPP")} at {event.time}
          </p>
          {event.description && (
            <p className="text-sm mt-1">{event.description}</p>
          )}
          {event.contact_name && (
            <p className="text-xs text-gray-600 mt-1">
              Contact: {event.contact_name} ({event.contact_email})
            </p>
          )}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onApprove(event.id)}
            className="px-2 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
            disabled={loading}
          >
            Approve
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="px-2 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
            disabled={loading}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default PendingEventItem;
