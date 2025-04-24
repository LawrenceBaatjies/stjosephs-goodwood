
import React from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface EdgePopupProps {
  showPopup: boolean;
  setShowPopup: (show: boolean) => void;
}

const EdgePopup = ({ showPopup, setShowPopup }: EdgePopupProps) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-church-navy">EDGE Youth Ministry</h3>
          <button onClick={() => setShowPopup(false)} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <div className="mb-4">
          <img 
            src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?q=80&w=1000&auto=format&fit=crop" 
            alt="EDGE Youth Ministry" 
            className="w-full h-40 object-cover rounded-md"
          />
        </div>
        <p className="text-gray-700 mb-4">
          Join our EDGE Youth Ministry program for teens! Click below to learn more and register.
        </p>
        <div className="flex justify-end">
          <Link 
            to="/edge"
            className="px-4 py-2 bg-church-red text-white rounded hover:bg-opacity-90"
            onClick={() => setShowPopup(false)}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EdgePopup;
