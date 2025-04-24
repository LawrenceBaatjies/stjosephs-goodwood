
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./navbar/Logo";
import EdgePopup from "./navbar/EdgePopup";
import MobileMenu from "./navbar/MobileMenu";
import DesktopNav from "./navbar/DesktopNav";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupHidden, setPopupHidden] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // EDGE popup logic
  useEffect(() => {
    const popupCycle = () => {
      if (!popupHidden) {
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
          setPopupHidden(true);
          setTimeout(() => {
            setPopupHidden(false);
          }, 30000); // Hide for 30 seconds
        }, 5000); // Show for 5 seconds
      }
    };

    // Initial cycle
    popupCycle();

    // Set up recurring cycle
    const cycleInterval = setInterval(() => {
      if (!popupHidden) {
        popupCycle();
      }
    }, 35000); // Total cycle time (5s show + 30s hide)

    return () => clearInterval(cycleInterval);
  }, [popupHidden]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-2 px-4 md:px-6">
        <Logo />
        
        <DesktopNav setShowPopup={setShowPopup} />

        {/* Current Time - Desktop */}
        <div className="hidden md:block text-gray-600 font-medium">
          {currentTime}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <div className="mr-4 text-gray-600 font-medium">
            {currentTime}
          </div>
          <button
            onClick={toggleMenu}
            className="text-gray-800 hover:text-[#d4a760]"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <MobileMenu 
        isMenuOpen={isMenuOpen} 
        toggleMenu={toggleMenu}
        setShowPopup={setShowPopup}
      />
      
      <EdgePopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </header>
  );
};

export default Navbar;
