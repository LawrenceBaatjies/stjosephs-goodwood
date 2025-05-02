
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface NewEvent {
  title: string;
  description: string;
  category: string;
}

interface AddEventFormProps {
  newEvent: NewEvent;
  onEventChange: (event: NewEvent) => void;
  onAddEvent: () => Promise<void>;
  loading: boolean;
}

const AddEventForm = ({ 
  newEvent, 
  onEventChange, 
  onAddEvent,
  loading
}: AddEventFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddEvent();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    onEventChange({ ...newEvent, [name]: value });
  };

  const handleCategoryChange = (value: string) => {
    onEventChange({ ...newEvent, category: value });
  };

  const categories = [
    "Liturgy",
    "Meeting",
    "Social",
    "Youth",
    "Education",
    "Service",
    "Other"
  ];

  return (
    <form onSubmit={handleSubmit} className="mt-8 p-4 border border-gray-200 rounded-md space-y-4">
      <h3 className="font-medium text-lg mb-2">Add New Event</h3>
      
      <div className="space-y-2">
        <Label htmlFor="title">Event Title</Label>
        <Input
          id="title"
          name="title"
          value={newEvent.title}
          onChange={handleChange}
          required
          placeholder="Enter event title"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          name="description"
          value={newEvent.description}
          onChange={handleChange}
          placeholder="Event description (optional)"
          rows={3}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Select
          value={newEvent.category}
          onValueChange={handleCategoryChange}
        >
          <SelectTrigger id="category">
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-church-navy hover:bg-opacity-90"
        disabled={!newEvent.title || loading}
      >
        {loading ? "Adding..." : "Add Event"}
      </Button>
    </form>
  );
};

export default AddEventForm;
