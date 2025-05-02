
import React from "react";

interface NoticesViewToggleProps {
  currentView: "upcoming" | "all";
  setCurrentView: (view: "upcoming" | "all") => void;
}

const NoticesViewToggle = ({ currentView, setCurrentView }: NoticesViewToggleProps) => {
  return (
    <div className="inline-flex rounded-md shadow-sm" role="group">
      <button
        type="button"
        onClick={() => setCurrentView("upcoming")}
        className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
          currentView === "upcoming"
            ? "bg-[#d4a760] text-white border-[#d4a760]"
            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
        }`}
      >
        Upcoming
      </button>
      <button
        type="button"
        onClick={() => setCurrentView("all")}
        className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg ${
          currentView === "all"
            ? "bg-[#d4a760] text-white border-[#d4a760]"
            : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
        }`}
      >
        All Notices
      </button>
    </div>
  );
};

export default NoticesViewToggle;
