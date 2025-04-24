
import React from "react";
import { Link } from "react-router-dom";

const DesktopNav = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link to="/" className="text-gray-800 hover:text-[#d4a760] text-base">
        Home
      </Link>
      <Link to="/mass-times" className="text-gray-800 hover:text-[#d4a760] text-base">
        Mass Times
      </Link>
      <Link to="/notices" className="text-gray-800 hover:text-[#d4a760] text-base">
        Notices
      </Link>
      <Link to="/calendar" className="text-gray-800 hover:text-[#d4a760] text-base">
        Calendar
      </Link>
      <Link to="/about" className="text-gray-800 hover:text-[#d4a760] text-base">
        About
      </Link>
      <Link to="/contact" className="text-gray-800 hover:text-[#d4a760] text-base">
        Contact
      </Link>
    </nav>
  );
};

export default DesktopNav;
