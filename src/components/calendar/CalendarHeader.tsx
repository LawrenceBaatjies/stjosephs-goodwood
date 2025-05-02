
import React from "react";
import { Button } from "@/components/ui/button";
import CalendarViewToggle from "./CalendarViewToggle";
import { PlusCircle, LogIn } from "lucide-react";

interface CalendarHeaderProps {
  isAdmin: boolean;
  view: 'calendar' | 'grid';
  onViewChange: (view: 'calendar' | 'grid') => void;
  onShowLogin: () => void;
  onShowEventRequest: () => void;
}

const CalendarHeader = ({
  isAdmin,
  view,
  onViewChange,
  onShowLogin,
  onShowEventRequest
}: CalendarHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">Parish Calendar</h2>
        <p className="text-gray-500 mt-1">View and request parish events</p>
      </div>
      
      <div className="flex flex-wrap items-center gap-3">
        <CalendarViewToggle view={view} onViewChange={onViewChange} />
        
        {isAdmin ? (
          <Button 
            className="bg-[#d4a760] hover:bg-[#c09550] flex items-center" 
            onClick={onShowEventRequest}
          >
            <PlusCircle className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        ) : (
          <>
            <Button 
              className="bg-church-navy hover:bg-opacity-90 flex items-center" 
              onClick={onShowLogin}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Admin Login
            </Button>
            
            <Button 
              variant="outline"
              className="border-church-red text-church-red hover:bg-church-red hover:text-white flex items-center"
              onClick={onShowEventRequest}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Request Event
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default CalendarHeader;
