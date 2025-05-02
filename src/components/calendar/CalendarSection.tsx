
import React from 'react';
import { format } from 'date-fns';
import { Card } from "@/components/ui/card";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import EventList from "@/components/calendar/EventList";
import AddEventForm from "@/components/calendar/AddEventForm";
import CalendarGridView from "@/components/calendar/CalendarGridView";
import AdminLoginModal from "@/components/calendar/AdminLoginModal";
import EventRequestModal from "@/components/calendar/EventRequestModal";
import { Event } from "@/types/calendar";

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
        <Card className="p-6 mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">
              {user ? `Welcome, ${user.email}` : 'Parish Calendar'}
            </h3>
            {user && (
              <button
                onClick={handleLogout}
                className="text-sm text-gray-500 hover:underline"
              >
                Logout
              </button>
            )}
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <Card className="p-6">
              <CalendarHeader 
                isAdmin={!!user}
                view={calendarView}
                onViewChange={setCalendarView}
                onShowLogin={() => setShowLoginModal(true)}
                onShowEventRequest={() => setShowEventRequestModal(true)}
              />
              
              {calendarView === 'calendar' ? (
                <CalendarComponent
                  mode="single"
                  selected={selectedDate || undefined}
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
                  selectedDate={selectedDate || undefined}
                />
              )}
            </Card>
            
            {/* Admin section for pending events */}
            {user && pendingEvents.length > 0 && (
              <Card className="p-6 mt-6">
                <div>
                  <h3 className="text-xl font-bold text-church-red mb-4">
                    Pending Event Requests ({pendingEvents.length})
                  </h3>
                  <ul className="space-y-3">
                    {pendingEvents.map((event) => (
                      <li key={event.id} className="border p-3 rounded-md">
                        <div className="flex justify-between">
                          <div>
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-gray-500">
                              {format(event.date, "PPP")} at {event.time}
                            </p>
                            {event.description && (
                              <p className="text-sm mt-1">{event.description}</p>
                            )}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => approveEvent(event.id)}
                              className="px-2 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
                              disabled={loading}
                            >
                              Approve
                            </button>
                            <button
                              onClick={() => deleteEvent(event.id)}
                              className="px-2 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                              disabled={loading}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            )}
          </div>

          <div className="lg:col-span-5">
            <Card className="p-6">
              <h2 className="text-2xl font-bold text-[#d4a760] mb-6">
                {selectedDate ? format(selectedDate, "MMMM dd, yyyy") : "Select a date"}
              </h2>
              
              <EventList events={eventsForSelectedDate} isAdmin={!!user} onDelete={deleteEvent} />

              {user && selectedDate && (
                <AddEventForm
                  newEvent={newEvent}
                  onEventChange={setNewEvent}
                  onAddEvent={addEvent}
                  loading={loading}
                />
              )}

              {!user && !selectedDate && (
                <div className="bg-gray-50 p-4 rounded-md mt-4">
                  <p className="text-gray-600 text-center">
                    Select a date to view events or request to add a new one.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Admin Login Modal */}
        <AdminLoginModal
          open={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleAdminLogin}
          loading={loading}
          error={authError}
        />

        {/* Event Request Modal */}
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
