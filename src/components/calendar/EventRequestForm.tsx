
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import EventDatePicker from "./EventDatePicker";
import EventContactForm from "./EventContactForm";

interface EventRequestFormProps {
  onSubmit: (eventDetails: {
    title: string;
    date: Date;
    time: string;
    description: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
  }) => Promise<void>;
  onCancel: () => void;
  loading: boolean;
}

const EventRequestForm = ({ onSubmit, onCancel, loading }: EventRequestFormProps) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState('');
  const [description, setDescription] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (date) {
      await onSubmit({
        title,
        date,
        time,
        description,
        contactName,
        contactEmail,
        contactPhone,
      });
      
      // Reset form after submission
      setTitle('');
      setDate(undefined);
      setTime('');
      setDescription('');
      setContactName('');
      setContactEmail('');
      setContactPhone('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 py-4">
      <div className="space-y-2">
        <Label htmlFor="title">Event Title*</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g., Parish Council Meeting"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EventDatePicker 
          date={date} 
          onDateChange={setDate}
          required
        />

        <div className="space-y-2">
          <Label htmlFor="time">Event Time*</Label>
          <Input
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="e.g., 7:00 PM"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Event Description*</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Please provide details about the event"
          className="min-h-[100px]"
          required
        />
      </div>

      <EventContactForm 
        contactName={contactName}
        contactEmail={contactEmail}
        contactPhone={contactPhone}
        onContactNameChange={setContactName}
        onContactEmailChange={setContactEmail}
        onContactPhoneChange={setContactPhone}
        required
      />

      <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={onCancel}
          disabled={loading}
        >
          Cancel
        </Button>
        <Button type="submit" disabled={loading || !date}>
          {loading ? "Submitting..." : "Submit Request"}
        </Button>
      </div>
    </form>
  );
};

export default EventRequestForm;
