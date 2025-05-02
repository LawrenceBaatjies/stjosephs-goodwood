
import React from "react";
import { Event } from "@/types/calendar";
import PendingEventsList from "./PendingEventsList";

interface PendingEventsProps {
  events: Event[];
  onApprove: (id: string) => void;
  onDelete: (id: string) => void;
  loading: boolean;
}

const PendingEvents = ({ events, onApprove, onDelete, loading }: PendingEventsProps) => {
  if (events.length === 0) return null;

  return (
    <div>
      <h3 className="text-xl font-bold text-church-red mb-4">
        Pending Event Requests ({events.length})
      </h3>
      <PendingEventsList 
        events={events} 
        onApprove={onApprove} 
        onDelete={onDelete} 
        loading={loading} 
      />
    </div>
  );
};

export default PendingEvents;
