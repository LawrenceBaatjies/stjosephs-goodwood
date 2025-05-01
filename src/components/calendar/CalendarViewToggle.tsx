
import React from 'react';
import { CalendarDays, Grid3X3 } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CalendarViewToggleProps {
  view: 'calendar' | 'grid';
  onViewChange: (view: 'calendar' | 'grid') => void;
}

const CalendarViewToggle: React.FC<CalendarViewToggleProps> = ({ view, onViewChange }) => {
  return (
    <div className="inline-flex rounded-md shadow-sm mb-4" role="group">
      <Button
        type="button"
        variant={view === 'calendar' ? 'default' : 'outline'}
        className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
          view === 'calendar' ? 'bg-[#d4a760] hover:bg-[#c69750] text-white border-[#d4a760]' : ''
        }`}
        onClick={() => onViewChange('calendar')}
      >
        <CalendarDays size={16} className="mr-2" />
        Calendar View
      </Button>
      <Button
        type="button"
        variant={view === 'grid' ? 'default' : 'outline'}
        className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
          view === 'grid' ? 'bg-[#d4a760] hover:bg-[#c69750] text-white border-[#d4a760]' : ''
        }`}
        onClick={() => onViewChange('grid')}
      >
        <Grid3X3 size={16} className="mr-2" />
        Grid View
      </Button>
    </div>
  );
};

export default CalendarViewToggle;
