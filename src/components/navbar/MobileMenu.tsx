
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Home, Clock } from "lucide-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setShowPopup: (show: boolean) => void;
}

const MobileMenu = ({ isMenuOpen, toggleMenu, setShowPopup }: MobileMenuProps) => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  if (!isMenuOpen) return null;

  return (
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
            <button
              onClick={() => toggleSection('about')}
              className="w-full flex items-center justify-between font-medium text-gray-800 mb-1 py-2"
            >
              <span>About</span>
              <span className="transform transition-transform duration-200">
                {openSections.includes('about') ? '−' : '+'}
              </span>
            </button>
            {openSections.includes('about') && (
              <ul className="pl-4 space-y-2">
                <li><Link to="/about" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>About Us</Link></li>
                <li><Link to="/about/safeguarding" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Safeguarding Policy</Link></li>
              </ul>
            )}
          </div>
          
          <Link
            to="/mass-times"
            className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors border-t border-gray-200 pt-2 flex items-center"
            onClick={toggleMenu}
          >
            <Clock size={18} className="mr-2" />
            <span>Mass Times</span>
          </Link>
          
          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => toggleSection('seasons')}
              className="w-full flex items-center justify-between font-medium text-gray-800 mb-1 py-2"
            >
              <span>Seasons</span>
              <span className="transform transition-transform duration-200">
                {openSections.includes('seasons') ? '−' : '+'}
              </span>
            </button>
            {openSections.includes('seasons') && (
              <ul className="pl-4 space-y-2">
                <li><Link to="/seasons/ordinary-time" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Ordinary Time</Link></li>
                <li><Link to="/seasons/advent" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Advent</Link></li>
                <li><Link to="/seasons/christmastide" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Christmastide</Link></li>
                <li><Link to="/seasons/lent" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Lent</Link></li>
                <li><Link to="/seasons/triduum" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Triduum</Link></li>
                <li><Link to="/seasons/eastertide" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Eastertide</Link></li>
                <li><Link to="/seasons/catholic-prayers" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Catholic Prayers</Link></li>
              </ul>
            )}
          </div>

          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => toggleSection('sacraments')}
              className="w-full flex items-center justify-between font-medium text-gray-800 mb-1 py-2"
            >
              <span>Sacraments</span>
              <span className="transform transition-transform duration-200">
                {openSections.includes('sacraments') ? '−' : '+'}
              </span>
            </button>
            {openSections.includes('sacraments') && (
              <ul className="pl-4 space-y-2">
                <li><Link to="/sacraments/baptism" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Baptism</Link></li>
                <li><Link to="/sacraments/confirmation" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Confirmation</Link></li>
                <li><Link to="/sacraments/marriage" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Marriage</Link></li>
                <li><Link to="/sacraments/rcia" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>RCIA</Link></li>
              </ul>
            )}
          </div>

          <Link
            to="/gallery"
            className="text-gray-800 hover:text-[#d4a760] py-2 transition-colors border-t border-gray-200 pt-2"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          
          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => toggleSection('notices')}
              className="w-full flex items-center justify-between font-medium text-gray-800 mb-1 py-2"
            >
              <span>Notices</span>
              <span className="transform transition-transform duration-200">
                {openSections.includes('notices') ? '−' : '+'}
              </span>
            </button>
            {openSections.includes('notices') && (
              <ul className="pl-4 space-y-2">
                <li><Link to="/notices" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Parish Notices</Link></li>
                <li><Link to="/newsletters" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Newsletters</Link></li>
              </ul>
            )}
          </div>

          <div className="border-t border-gray-200 pt-2">
            <button
              onClick={() => toggleSection('contact')}
              className="w-full flex items-center justify-between font-medium text-gray-800 mb-1 py-2"
            >
              <span>Contact</span>
              <span className="transform transition-transform duration-200">
                {openSections.includes('contact') ? '−' : '+'}
              </span>
            </button>
            {openSections.includes('contact') && (
              <ul className="pl-4 space-y-2">
                <li><Link to="/contact" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Contact Us</Link></li>
                <li><Link to="/faq" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>FAQ</Link></li>
                <li><Link to="/registration" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Registration Form</Link></li>
                <li><Link to="/donation" className="block py-2 text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Make a Donation</Link></li>
              </ul>
            )}
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
  );
};

export default MobileMenu;
