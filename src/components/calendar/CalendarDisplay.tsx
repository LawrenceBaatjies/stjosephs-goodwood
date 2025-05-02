
import React from 'react';
import { Card } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import CalendarGridView from "@/components/calendar/CalendarGridView";

interface CalendarDisplayProps {
  view: 'calendar' | 'grid';
  date: Date;
  selectedDate: Date | null;
  events: any[];
  onSelectDate: (date: Date | undefined) => void;
  isDateWithEvents: (date: Date) => boolean;
}

const CalendarDisplay = ({
  view,
  date,
  selectedDate,
  events,
  onSelectDate,
  isDateWithEvents
}: CalendarDisplayProps) => {
  return (
    <Card className="p-6">
      {view === 'calendar' ? (
        <CalendarComponent
          mode="single"
          selected={selectedDate || undefined}
          onSelect={onSelectDate}
          className="rounded-md border pointer-events-auto"
          modifiers={{
            withEvents: (date) => isDateWithEvents(date),
          }}
          modifiersStyles={{
            withEvents: { 
              backgroundColor: "#f0f8ff", 
              fontWeight: "bold",
              borderBottom: "2px solid #d4a760" 
            }
          }}
        />
      ) : (
        <CalendarGridView 
          currentDate={date}
          events={events}
          onSelectDate={onSelectDate}
          selectedDate={selectedDate || undefined}
        />
      )}
    </Card>
  );
};

export default CalendarDisplay;
