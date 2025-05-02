
import React from 'react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from 'date-fns';
import { Event } from '@/types/calendar';
import { Card, CardContent } from '@/components/ui/card';

interface CalendarGridViewProps {
  currentDate: Date;
  events: Event[];
  onSelectDate: (date: Date) => void;
  selectedDate: Date | undefined;
}

const CalendarGridView: React.FC<CalendarGridViewProps> = ({ 
  currentDate, 
  events, 
  onSelectDate,
  selectedDate
}) => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const hasEvents = (date: Date) => {
    return events.some(event => 
      isSameDay(new Date(event.date), date)
    );
  };

  return (
    <div className="grid grid-cols-7 gap-2">
      {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
        <div 
          key={day} 
          className="text-center font-semibold py-2 text-sm bg-gray-100 rounded"
        >
          {day}
        </div>
      ))}
      
      {daysInMonth.map((date, i) => {
        const dayHasEvents = hasEvents(date);
        const isSelected = selectedDate ? isSameDay(date, selectedDate) : false;
        
        return (
          <Card 
            key={i} 
            className={`
              min-h-[80px] cursor-pointer transition-all 
              ${!isSameMonth(date, currentDate) ? 'opacity-40' : ''}
              ${isToday(date) ? 'border-blue-400' : ''}
              ${isSelected ? 'ring-2 ring-[#d4a760]' : ''}
              ${dayHasEvents ? 'bg-blue-50' : ''}
              hover:shadow-md
            `}
            onClick={() => onSelectDate(date)}
          >
            <CardContent className="p-2">
              <div className="flex justify-between items-start">
                <span className={`
                  font-medium text-sm rounded-full w-6 h-6 flex items-center justify-center
                  ${isToday(date) ? 'bg-blue-500 text-white' : ''}
                `}>
                  {format(date, 'd')}
                </span>
                
                {dayHasEvents && (
                  <span className="h-2 w-2 rounded-full bg-[#d4a760]" />
                )}
              </div>
              
              <div className="mt-2">
                {dayHasEvents && (
                  <div className="text-xs">
                    {events
                      .filter(event => isSameDay(new Date(event.date), date))
                      .slice(0, 2)
                      .map((event, i) => (
                        <div key={i} className="truncate mb-1 text-gray-600">
                          {event.title}
                        </div>
                      ))}
                    
                    {events.filter(event => isSameDay(new Date(event.date), date)).length > 2 && (
                      <div className="text-xs text-gray-500">
                        +{events.filter(event => isSameDay(new Date(event.date), date)).length - 2} more
                      </div>
                    )}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default CalendarGridView;
