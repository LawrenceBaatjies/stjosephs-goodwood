
import React from "react";
import { Event } from "@/types/calendar";
import PendingEventItem from "./PendingEventItem";

interface PendingEventsListProps {
  events: Event[];
  onApprove: (id: string) => void;
  onDelete: (id: string) => void;
  loading: boolean;
}

const PendingEventsList = ({ 
  events, 
  onApprove, 
  onDelete, 
  loading 
}: PendingEventsListProps) => {
  if (events.length === 0) return null;

  return (
    <ul className="space-y-3">
      {events.map((event) => (
        <PendingEventItem
          key={event.id}
          event={event}
          onApprove={onApprove}
          onDelete={onDelete}
          loading={loading}
        />
      ))}
    </ul>
  );
};

export default PendingEventsList;
