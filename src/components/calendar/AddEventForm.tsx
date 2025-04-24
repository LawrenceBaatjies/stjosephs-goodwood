
import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Event } from "@/types/calendar";

interface AddEventFormProps {
  newEvent: Partial<Event>;
  onEventChange: (event: Partial<Event>) => void;
  onAddEvent: () => void;
}

const AddEventForm = ({ newEvent, onEventChange, onAddEvent }: AddEventFormProps) => {
  return (
    <div className="mt-6 pt-6 border-t border-gray-200">
      <h3 className="text-xl font-semibold mb-4">Add New Event</h3>
      <div className="space-y-4">
        <div>
          <Label htmlFor="event-title">Event Title</Label>
          <Input
            id="event-title"
            value={newEvent.title}
            onChange={(e) => onEventChange({ ...newEvent, title: e.target.value })}
            placeholder="Enter event title"
          />
        </div>
        
        <div>
          <Label htmlFor="event-time">Time</Label>
          <Input
            id="event-time"
            value={newEvent.time}
            onChange={(e) => onEventChange({ ...newEvent, time: e.target.value })}
            placeholder="HH:MM"
          />
        </div>
        
        <div>
          <Label htmlFor="event-category">Category</Label>
          <Select 
            value={newEvent.category} 
            onValueChange={(value) => onEventChange({ ...newEvent, category: value })}
          >
            <SelectTrigger id="event-category">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Mass">Mass</SelectItem>
              <SelectItem value="Liturgy">Liturgy</SelectItem>
              <SelectItem value="Sacrament">Sacrament</SelectItem>
              <SelectItem value="Meeting">Meeting</SelectItem>
              <SelectItem value="Outreach">Outreach</SelectItem>
              <SelectItem value="Music">Music</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="event-description">Description (Optional)</Label>
          <Input
            id="event-description"
            value={newEvent.description}
            onChange={(e) => onEventChange({ ...newEvent, description: e.target.value })}
            placeholder="Enter event description"
          />
        </div>

        <Button 
          onClick={onAddEvent} 
          className="w-full"
          disabled={!newEvent.title || !newEvent.time}
        >
          <CalendarPlus className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>
    </div>
  );
};

export default AddEventForm;
