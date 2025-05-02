
import React from "react";
import NoticeCard from "./NoticeCard";
import { Notice } from "@/types/notices";

interface NoticesGridProps {
  notices: Notice[];
  isAdmin: boolean;
  onEditNotice: (notice: Notice) => void;
  onDeleteNotice: (id: string) => void;
  formatDate: (dateString: string) => string;
  addToCalendar: (notice: Notice) => void;
}

const NoticesGrid = ({
  notices,
  isAdmin,
  onEditNotice,
  onDeleteNotice,
  formatDate,
  addToCalendar
}: NoticesGridProps) => {
  if (notices.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No notices found for the selected view.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {notices.map((notice) => (
        <NoticeCard
          key={notice.id}
          notice={notice}
          isAdmin={isAdmin}
          onEdit={onEditNotice}
          onDelete={onDeleteNotice}
          formatDate={formatDate}
          addToCalendar={addToCalendar}
        />
      ))}
    </div>
  );
};

export default NoticesGrid;
