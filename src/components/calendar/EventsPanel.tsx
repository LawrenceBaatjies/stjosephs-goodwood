
import React from 'react';
import { format } from "date-fns";
import { Card } from "@/components/ui/card";
import EventList from "@/components/calendar/EventList";
import AddEventForm from "@/components/calendar/AddEventForm";
import { Event, NewEvent } from "@/types/calendar";

interface EventsPanelProps {
  selectedDate: Date | null;
  events: Event[];
  newEvent?: NewEvent;
  isAdmin: boolean;
  loading: boolean;
  onAddEvent: () => Promise<void>;
  onDeleteEvent: (id: string) => void;
  onEventChange?: (event: NewEvent) => void;
}

const EventsPanel = ({
  selectedDate,
  events,
  newEvent,
  isAdmin,
  loading,
  onAddEvent,
  onDeleteEvent,
  onEventChange
}: EventsPanelProps) => {
  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-[#d4a760] mb-6">
        {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Select a date"}
      </h2>
      
      <EventList events={events} isAdmin={isAdmin} onDelete={onDeleteEvent} />

      {isAdmin && selectedDate && newEvent && onEventChange && (
        <AddEventForm
          newEvent={newEvent}
          onEventChange={onEventChange}
          onAddEvent={onAddEvent}
          loading={loading}
        />
      )}

      {!isAdmin && !selectedDate && (
        <div className="bg-gray-50 p-4 rounded-md mt-4">
          <p className="text-gray-600 text-center">
            Select a date to view events or request to add a new one.
          </p>
        </div>
      )}
    </Card>
  );
};

export default EventsPanel;
