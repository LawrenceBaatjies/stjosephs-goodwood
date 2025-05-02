
import React from 'react';
import { Card } from "@/components/ui/card";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import AdminHeader from "@/components/calendar/AdminHeader";
import PendingEvents from "@/components/calendar/PendingEvents";
import EventsPanel from "@/components/calendar/EventsPanel";
import CalendarDisplay from "@/components/calendar/CalendarDisplay";
import AdminLoginModal from "@/components/calendar/AdminLoginModal";
import EventRequestModal from "@/components/calendar/EventRequestModal";

interface CalendarSectionProps {
  calendarState: ReturnType<typeof import('@/hooks/useCalendarState').useCalendarState>;
}

const CalendarSection = ({ calendarState }: CalendarSectionProps) => {
  const {
    date,
    events,
    pendingEvents,
    selectedDate,
    eventsForSelectedDate,
    user,
    calendarView,
    newEvent,
    loading,
    authError,
    showLoginModal,
    showEventRequestModal,
    setCalendarView,
    handleDateSelect,
    addEvent,
    approveEvent,
    deleteEvent,
    setNewEvent,
    isDateWithEvents,
    handleAdminLogin,
    handleLogout,
    handleEventRequest,
    setShowLoginModal,
    setShowEventRequestModal,
  } = calendarState;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AdminHeader 
          userEmail={user?.email || null}
          onLogout={handleLogout}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <CalendarHeader />
            
            <CalendarDisplay
              view={calendarView}
              date={date}
              selectedDate={selectedDate}
              events={events}
              onSelectDate={handleDateSelect}
              isDateWithEvents={isDateWithEvents}
            />
            
            {user && pendingEvents.length > 0 && (
              <Card className="p-6 mt-6">
                <PendingEvents
                  events={pendingEvents}
                  onApprove={approveEvent}
                  onDelete={deleteEvent}
                  loading={loading}
                />
              </Card>
            )}
          </div>

          <div className="lg:col-span-5">
            <EventsPanel
              selectedDate={selectedDate}
              events={eventsForSelectedDate}
              newEvent={newEvent}
              isAdmin={!!user}
              loading={loading}
              onAddEvent={addEvent}
              onDeleteEvent={deleteEvent}
              onEventChange={setNewEvent}
            />
          </div>
        </div>

        {/* Modals */}
        <AdminLoginModal
          open={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleAdminLogin}
          loading={loading}
          error={authError}
        />

        <EventRequestModal
          open={showEventRequestModal}
          onClose={() => setShowEventRequestModal(false)}
          onSubmitRequest={handleEventRequest}
          loading={loading}
        />
      </div>
    </section>
  );
};

export default CalendarSection;
