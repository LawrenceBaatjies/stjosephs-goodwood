
import React from "react";
import { CalendarIcon, Edit, Trash } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Notice } from "@/types/notices";

interface NoticeCardProps {
  notice: Notice;
  isAdmin: boolean;
  onEdit: (notice: Notice) => void;
  onDelete: (id: string) => void;
  formatDate: (dateString: string) => string;
  addToCalendar: (notice: Notice) => void;
}

const NoticeCard = ({ 
  notice, 
  isAdmin, 
  onEdit, 
  onDelete,
  formatDate,
  addToCalendar
}: NoticeCardProps) => {
  return (
    <Card key={notice.id} className="overflow-hidden">
      <CardHeader className="bg-gray-50">
        <CardTitle className="text-[#d4a760] flex justify-between items-start">
          {notice.title}
          {isAdmin && (
            <div className="flex gap-2 text-gray-500">
              <button 
                onClick={() => onEdit(notice)}
                className="hover:text-[#d4a760]"
              >
                <Edit size={16} />
              </button>
              <button 
                onClick={() => onDelete(notice.id)}
                className="hover:text-red-500"
              >
                <Trash size={16} />
              </button>
            </div>
          )}
        </CardTitle>
        <CardDescription>
          {formatDate(notice.date)}
          {notice.time && ` at ${notice.time.replace(":", ".")}`}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-gray-700 mb-4">{notice.description}</p>
        {notice.location && (
          <div className="flex items-center text-gray-600 mb-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>{notice.location}</span>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-gray-50 pt-4">
        <Button 
          variant="outline"
          onClick={() => addToCalendar(notice)}
          className="w-full flex items-center justify-center"
        >
          <CalendarIcon className="h-4 w-4 mr-2" />
          Add to Calendar
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NoticeCard;
