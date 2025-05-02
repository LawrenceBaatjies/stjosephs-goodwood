
import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { NoticeFormData } from "@/types/notices";

interface NoticeFormDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  formData: NoticeFormData;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  isEditing: boolean;
}

const NoticeFormDialog = ({
  open,
  onClose,
  onSubmit,
  formData,
  onChange,
  isEditing
}: NoticeFormDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{isEditing ? 'Edit Notice' : 'Add New Notice'}</DialogTitle>
          <DialogDescription>
            {isEditing 
              ? 'Update the notice details below.' 
              : 'Fill in the details to create a new parish notice.'}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">Title</Label>
            <Input 
              id="title" 
              name="title"
              value={formData.title}
              onChange={onChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="text-sm font-medium">Date</Label>
              <Input 
                id="date" 
                name="date"
                type="date"
                value={formData.date}
                onChange={onChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="text-sm font-medium">Time (optional)</Label>
              <Input 
                id="time" 
                name="time"
                type="time"
                value={formData.time}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium">Location (optional)</Label>
            <Input 
              id="location" 
              name="location"
              value={formData.location}
              onChange={onChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">Description (optional)</Label>
            <Textarea 
              id="description" 
              name="description"
              value={formData.description}
              onChange={onChange}
              rows={4}
            />
          </div>
          <DialogFooter className="sm:justify-end">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {isEditing ? 'Update Notice' : 'Add Notice'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NoticeFormDialog;
