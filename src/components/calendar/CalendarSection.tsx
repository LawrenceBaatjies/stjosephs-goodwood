
import React from 'react';
import { format } from 'date-fns';
import { Card } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import EventList from "@/components/calendar/EventList";
import AddEventForm from "@/components/calendar/AddEventForm";
import CalendarGridView from "@/components/calendar/CalendarGridView";

interface CalendarSectionProps {
  calendarState: ReturnType<typeof import('@/hooks/useCalendarState').useCalendarState>;
}

const CalendarSection = ({ calendarState }: CalendarSectionProps) => {
  const {
    date,
    events,
    selectedDate,
    eventsForSelectedDate,
    isSubscriber,
    calendarView,
    newEvent,
    setShowSubscribeForm,
    setCalendarView,
    handleDateSelect,
    addEvent,
    setNewEvent,
    isDateWithEvents
  } = calendarState;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Card className="p-6">
              <CalendarHeader 
                isSubscriber={isSubscriber}
                onShowSubscribe={() => setShowSubscribeForm(true)}
                view={calendarView}
                onViewChange={setCalendarView}
              />
              
              {calendarView === 'calendar' ? (
                <CalendarComponent
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
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
                  onSelectDate={handleDateSelect}
                  selectedDate={selectedDate}
                />
              )}
            </Card>
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-[#d4a760] mb-6">
                {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Select a date"}
              </h2>
              
              <EventList events={eventsForSelectedDate} />

              {isSubscriber && selectedDate && (
                <AddEventForm
                  newEvent={newEvent}
                  onEventChange={setNewEvent}
                  onAddEvent={addEvent}
                />
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
