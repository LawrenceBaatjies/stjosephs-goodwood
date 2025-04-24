
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calendar, Home, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="h-10 w-10 md:h-12 md:w-12 mr-2">
            <img 
              src="https://images.unsplash.com/photo-1581337204873-1ce21489257a?q=80&w=1974&auto=format&fit=crop" 
              alt="St Joseph's Logo" 
              className="h-full w-full object-cover rounded-full"
              width={210}
              height={210}
            />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-bold text-[#d4a760]">St Joseph's</span>
            <span className="ml-1 text-xs md:text-sm text-gray-500 hidden sm:block">Catholic Church Goodwood</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              {/* Home Icon */}
              <NavigationMenuItem>
                <Link to="/" className="flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 hover:text-[#d4a760] transition-colors">
                  <Home size={20} />
                </Link>
              </NavigationMenuItem>

              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-gray-800 hover:text-[#d4a760] transition-colors">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full">
                  <ul className="grid w-[220px] gap-1 p-2">
                    <li>
                      <Link to="/about" className="block p-2 hover:bg-gray-100 rounded-md text-base">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/about/safeguarding" className="block p-2 hover:bg-gray-100 rounded-md text-base">
                        Safeguarding Policy
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Mass Times */}
              <NavigationMenuItem>
                <Link to="/mass-times" className="text-base text-gray-800 hover:text-[#d4a760] transition-colors flex items-center h-10 px-4">
                  Mass Times
                </Link>
              </NavigationMenuItem>

              {/* Seasons Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-gray-800 hover:text-[#d4a760] transition-colors">
                  Seasons
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full">
                  <ul className="grid w-[220px] gap-1 p-2">
                    <li><Link to="/seasons/ordinary-time" className="block p-2 hover:bg-gray-100 rounded-md text-base">Ordinary Time</Link></li>
                    <li><Link to="/seasons/advent" className="block p-2 hover:bg-gray-100 rounded-md text-base">Advent</Link></li>
                    <li><Link to="/seasons/christmastide" className="block p-2 hover:bg-gray-100 rounded-md text-base">Christmastide</Link></li>
                    <li><Link to="/seasons/lent" className="block p-2 hover:bg-gray-100 rounded-md text-base">Lent</Link></li>
                    <li><Link to="/seasons/triduum" className="block p-2 hover:bg-gray-100 rounded-md text-base">Triduum</Link></li>
                    <li><Link to="/seasons/eastertide" className="block p-2 hover:bg-gray-100 rounded-md text-base">Eastertide</Link></li>
                    <li><Link to="/seasons/catholic-prayers" className="block p-2 hover:bg-gray-100 rounded-md text-base">Catholic Prayers</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Sacraments Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-gray-800 hover:text-[#d4a760] transition-colors">
                  Sacraments
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full">
                  <ul className="grid w-[220px] gap-1 p-2">
                    <li><Link to="/sacraments/baptism" className="block p-2 hover:bg-gray-100 rounded-md text-base">Baptism</Link></li>
                    <li><Link to="/sacraments/confirmation" className="block p-2 hover:bg-gray-100 rounded-md text-base">Confirmation</Link></li>
                    <li><Link to="/sacraments/marriage" className="block p-2 hover:bg-gray-100 rounded-md text-base">Marriage</Link></li>
                    <li><Link to="/sacraments/rcia" className="block p-2 hover:bg-gray-100 rounded-md text-base">RCIA</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Gallery */}
              <NavigationMenuItem>
                <Link to="/gallery" className="text-base text-gray-800 hover:text-[#d4a760] transition-colors flex items-center h-10 px-4">
                  Gallery
                </Link>
              </NavigationMenuItem>
              
              {/* Notices */}
              <NavigationMenuItem>
                <Link to="/notices" className="text-base text-gray-800 hover:text-[#d4a760] transition-colors flex items-center h-10 px-4">
                  Notices
                </Link>
              </NavigationMenuItem>

              {/* Newsletters */}
              <NavigationMenuItem>
                <Link to="/newsletters" className="text-base text-gray-800 hover:text-[#d4a760] transition-colors flex items-center h-10 px-4">
                  Newsletters
                </Link>
              </NavigationMenuItem>

              {/* Contact Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base text-gray-800 hover:text-[#d4a760] transition-colors">
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 top-full">
                  <ul className="grid w-[220px] gap-1 p-2">
                    <li><Link to="/contact" className="block p-2 hover:bg-gray-100 rounded-md text-base">Contact Us</Link></li>
                    <li><Link to="/faq" className="block p-2 hover:bg-gray-100 rounded-md text-base">FAQ</Link></li>
                    <li><Link to="/registration" className="block p-2 hover:bg-gray-100 rounded-md text-base">Registration Form</Link></li>
                    <li><Link to="/donation" className="block p-2 hover:bg-gray-100 rounded-md text-base">Make a Donation</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Calendar Icon */}
              <NavigationMenuItem>
                <Link to="/calendar" className="flex h-10 w-10 items-center justify-center rounded-md text-gray-800 hover:bg-gray-100 hover:text-[#d4a760] transition-colors">
                  <Calendar size={20} />
                </Link>
              </NavigationMenuItem>
              
              {/* EDGE Icon */}
              <NavigationMenuItem>
                <Link to="/edge" className="flex h-10 w-10 items-center justify-center rounded-md bg-church-red text-white hover:bg-opacity-90 transition-colors" onClick={() => setShowPopup(true)}>
                  <span className="font-bold text-xs">EDGE</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                className="flex items-center text-gray-800 hover:text-[#d4a760] py-2 transition-colors"
                onClick={toggleMenu}
              >
                <Home size={18} className="mr-2" />
                <span>Home</span>
              </Link>
              
              <div className="border-t border-gray-200 pt-2">
                <p className="font-medium text-gray-800 mb-1">About</p>
                <ul className="pl-4 space-y-2">
                  <li><Link to="/about" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>About Us</Link></li>
                  <li><Link to="/about/safeguarding" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Safeguarding Policy</Link></li>
                </ul>
              </div>
              
              <Link
                to="/mass-times"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors border-t border-gray-200 pt-2"
                onClick={toggleMenu}
              >
                Mass Times
              </Link>
              
              <div className="border-t border-gray-200 pt-2">
                <p className="font-medium text-gray-800 mb-1">Seasons</p>
                <ul className="pl-4 space-y-2">
                  <li><Link to="/seasons/ordinary-time" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Ordinary Time</Link></li>
                  <li><Link to="/seasons/advent" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Advent</Link></li>
                  <li><Link to="/seasons/christmastide" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Christmastide</Link></li>
                  <li><Link to="/seasons/lent" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Lent</Link></li>
                  <li><Link to="/seasons/triduum" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Triduum</Link></li>
                  <li><Link to="/seasons/eastertide" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Eastertide</Link></li>
                  <li><Link to="/seasons/catholic-prayers" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Catholic Prayers</Link></li>
                </ul>
              </div>
              
              <div className="border-t border-gray-200 pt-2">
                <p className="font-medium text-gray-800 mb-1">Sacraments</p>
                <ul className="pl-4 space-y-2">
                  <li><Link to="/sacraments/baptism" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Baptism</Link></li>
                  <li><Link to="/sacraments/confirmation" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Confirmation</Link></li>
                  <li><Link to="/sacraments/marriage" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Marriage</Link></li>
                  <li><Link to="/sacraments/rcia" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>RCIA</Link></li>
                </ul>
              </div>

              <Link
                to="/gallery"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors border-t border-gray-200 pt-2"
                onClick={toggleMenu}
              >
                Gallery
              </Link>
              
              <Link
                to="/notices"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors border-t border-gray-200 pt-2"
                onClick={toggleMenu}
              >
                Notices
              </Link>
              
              <Link
                to="/newsletters"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors border-t border-gray-200 pt-2"
                onClick={toggleMenu}
              >
                Newsletters
              </Link>

              <div className="border-t border-gray-200 pt-2">
                <p className="font-medium text-gray-800 mb-1">Contact</p>
                <ul className="pl-4 space-y-2">
                  <li><Link to="/contact" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Contact Us</Link></li>
                  <li><Link to="/faq" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>FAQ</Link></li>
                  <li><Link to="/registration" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Registration Form</Link></li>
                  <li><Link to="/donation" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Make a Donation</Link></li>
                </ul>
              </div>
              
              <Link
                to="/calendar"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors flex items-center border-t border-gray-200 pt-2"
                onClick={toggleMenu}
              >
                <Calendar size={18} className="mr-2" />
                <span>Calendar</span>
              </Link>
              
              <Link
                to="/edge"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors flex items-center border-t border-gray-200 pt-2"
                onClick={() => {
                  setShowPopup(true);
                  toggleMenu();
                }}
              >
                <span className="font-bold bg-church-red text-white px-2 py-1 rounded mr-2">EDGE</span>
                <span>Youth Ministry</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
      
      {/* EDGE Popup */}
      {showPopup && (
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
      )}
    </header>
  );
};

export default Navbar;
