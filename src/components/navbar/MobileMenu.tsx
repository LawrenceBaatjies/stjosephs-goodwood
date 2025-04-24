
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Home, Clock } from "lucide-react";

interface MobileMenuProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  setShowPopup: (show: boolean) => void;
}

const MobileMenu = ({ isMenuOpen, toggleMenu }: MobileMenuProps) => {
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
            <p className="font-medium text-gray-800 mb-1">About</p>
            <ul className="pl-4 space-y-2">
              <li><Link to="/about" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>About Us</Link></li>
              <li><Link to="/about/safeguarding" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Safeguarding Policy</Link></li>
            </ul>
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
          
          <div className="border-t border-gray-200 pt-2">
            <p className="font-medium text-gray-800 mb-1">Notices</p>
            <ul className="pl-4 space-y-2">
              <li><Link to="/notices" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Parish Notices</Link></li>
              <li><Link to="/newsletters" className="text-gray-700 hover:text-[#d4a760]" onClick={toggleMenu}>Newsletters</Link></li>
            </ul>
          </div>

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
  );
};

export default MobileMenu;
