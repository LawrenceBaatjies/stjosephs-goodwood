
import React from "react";
import { Button } from "@/components/ui/button";

// Define the CalendarViewType as needed in this component
export type CalendarViewType = "month" | "week" | "day";

interface CalendarViewToggleProps {
  currentView: CalendarViewType;
  setView: (view: CalendarViewType) => void;
}

const CalendarViewToggle: React.FC<CalendarViewToggleProps> = ({
  currentView,
  setView,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="grid grid-cols-3 gap-1">
        <Button
          size="sm"
          variant={currentView === "month" ? "default" : "outline"}
          className="h-7 px-2 text-xs font-medium"
          onClick={() => setView("month")}
        >
          Month
        </Button>
        <Button
          size="sm"
          variant={currentView === "week" ? "default" : "outline"}
          className="h-7 px-2 text-xs font-medium"
          onClick={() => setView("week")}
        >
          Week
        </Button>
        <Button
          size="sm"
          variant={currentView === "day" ? "default" : "outline"}
          className="h-7 px-2 text-xs font-medium"
          onClick={() => setView("day")}
        >
          Day
        </Button>
      </div>
    </div>
  );
};

export default CalendarViewToggle;
