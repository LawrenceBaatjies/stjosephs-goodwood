
import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CalendarIcon, X } from "lucide-react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import CalendarViewToggle from "./CalendarViewToggle";
import { useCalendarDates } from "@/hooks/useCalendarDates";
import { useCalendarState } from "@/hooks/useCalendarState";
import { format } from "date-fns";

const CalendarHeader: React.FC = () => {
  const {
    selectedDate,
    setSelectedDate,
    rangeStartDate,
    rangeEndDate,
    formatMonthYear,
    formatDateRange,
    getNextDate,
    getPrevDate,
    goToToday,
  } = useCalendarDates();

  const { currentView, setCurrentView } = useCalendarState();

  const formattedDate =
    currentView === "month"
      ? formatMonthYear(selectedDate)
      : formatDateRange(rangeStartDate, rangeEndDate);

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
      <div className="flex items-center space-x-2">
        <h2 className="text-xl font-semibold">{formattedDate}</h2>

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" size="icon" className="h-8 w-8">
              <CalendarIcon className="h-4 w-4" />
              <span className="sr-only">Pick a date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <CalendarComponent
              mode="single"
              selected={selectedDate}
              onSelect={(date) => date && setSelectedDate(date)}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex justify-between md:justify-end md:gap-4 items-center">
        <div className="flex items-center space-x-1">
          <Button
            variant="outline"
            size="icon"
            onClick={getPrevDate}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={goToToday}
            className="h-8 px-3 text-xs font-medium"
          >
            Today
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={getNextDate}
            className="h-8 w-8"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </Button>
        </div>

        <div className="ml-2">
          <CalendarViewToggle
            currentView={currentView}
            setView={setCurrentView}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarHeader;
