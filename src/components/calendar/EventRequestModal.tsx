
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EventRequestForm from './EventRequestForm';

interface EventRequestModalProps {
  open: boolean;
  onClose: () => void;
  onSubmitRequest: (eventDetails: {
    title: string;
    date: Date;
    time: string;
    description: string;
    contactName: string;
    contactEmail: string;
    contactPhone: string;
  }) => Promise<void>;
  loading: boolean;
}

const EventRequestModal = ({
  open,
  onClose,
  onSubmitRequest,
  loading
}: EventRequestModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Request a Calendar Event</DialogTitle>
          <DialogDescription>
            Please provide the details of the event you would like to add to the parish calendar.
            An administrator will review your request.
          </DialogDescription>
        </DialogHeader>

        <EventRequestForm 
          onSubmit={onSubmitRequest}
          onCancel={onClose}
          loading={loading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EventRequestModal;
