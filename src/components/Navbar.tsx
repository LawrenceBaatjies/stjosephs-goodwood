
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
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

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="h-12 w-12 mr-3">
            <img 
              src="https://images.unsplash.com/photo-1581337204873-1ce21489257a?q=80&w=1974&auto=format&fit=crop" 
              alt="St Joseph's Logo" 
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div>
            <span className="text-2xl font-bold text-[#d4a760]">St Joseph's</span>
            <span className="ml-2 text-sm text-gray-500 hidden sm:block">Catholic Church Goodwood</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              {/* About Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] transition-colors">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <Link to="/about" className="block p-3 hover:bg-gray-100 rounded-md">
                        <div className="text-lg font-medium">About Us</div>
                        <p className="text-sm text-gray-500">Learn about our parish and mission</p>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about#history" className="block p-3 hover:bg-gray-100 rounded-md">
                        <div className="text-lg font-medium">History & Heritage</div>
                        <p className="text-sm text-gray-500">Discover our parish's rich history</p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Mass Times */}
              <NavigationMenuItem>
                <Link to="/mass-times" className="text-gray-800 hover:text-[#d4a760] transition-colors flex items-center h-10 px-4">
                  Mass Times
                </Link>
              </NavigationMenuItem>

              {/* Seasons Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] transition-colors">
                  Seasons
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li><Link to="/seasons/ordinary-time" className="block p-3 hover:bg-gray-100 rounded-md">Ordinary Time</Link></li>
                    <li><Link to="/seasons/advent" className="block p-3 hover:bg-gray-100 rounded-md">Advent</Link></li>
                    <li><Link to="/seasons/christmastide" className="block p-3 hover:bg-gray-100 rounded-md">Christmastide</Link></li>
                    <li><Link to="/seasons/lent" className="block p-3 hover:bg-gray-100 rounded-md">Lent</Link></li>
                    <li><Link to="/seasons/triduum" className="block p-3 hover:bg-gray-100 rounded-md">Triduum</Link></li>
                    <li><Link to="/seasons/eastertide" className="block p-3 hover:bg-gray-100 rounded-md">Eastertide</Link></li>
                    <li><Link to="/seasons/catholic-prayers" className="block p-3 hover:bg-gray-100 rounded-md">Catholic Prayers</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Sacraments Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] transition-colors">
                  Sacraments
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li><Link to="/sacraments/baptism" className="block p-3 hover:bg-gray-100 rounded-md">Baptism</Link></li>
                    <li><Link to="/sacraments/confirmation" className="block p-3 hover:bg-gray-100 rounded-md">Confirmation</Link></li>
                    <li><Link to="/sacraments/marriage" className="block p-3 hover:bg-gray-100 rounded-md">Marriage</Link></li>
                    <li><Link to="/sacraments/rcia" className="block p-3 hover:bg-gray-100 rounded-md">RCIA</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Gallery */}
              <NavigationMenuItem>
                <Link to="/gallery" className="text-gray-800 hover:text-[#d4a760] transition-colors flex items-center h-10 px-4">
                  Gallery
                </Link>
              </NavigationMenuItem>
              
              {/* Notices */}
              <NavigationMenuItem>
                <Link to="/notices" className="text-gray-800 hover:text-[#d4a760] transition-colors flex items-center h-10 px-4">
                  Notices
                </Link>
              </NavigationMenuItem>

              {/* Contact Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] transition-colors">
                  Contact
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li><Link to="/contact" className="block p-3 hover:bg-gray-100 rounded-md">Contact Us</Link></li>
                    <li><Link to="/faq" className="block p-3 hover:bg-gray-100 rounded-md">FAQ</Link></li>
                    <li><Link to="/registration" className="block p-3 hover:bg-gray-100 rounded-md">Registration Form</Link></li>
                    <li><Link to="/donation" className="block p-3 hover:bg-gray-100 rounded-md">Make a Donation</Link></li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Calendar Icon */}
              <NavigationMenuItem>
                <Link to="/calendar" className="text-gray-800 hover:text-[#d4a760] transition-colors">
                  <Calendar size={20} />
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
            <nav className="flex flex-col space-y-4">
              <Link
                to="/about"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/mass-times"
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors"
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
                className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors"
                onClick={toggleMenu}
              >
                Notices
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
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
