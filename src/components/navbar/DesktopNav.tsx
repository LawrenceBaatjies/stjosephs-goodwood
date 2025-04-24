
import React from "react";
import { Link } from "react-router-dom";
import { Home, Calendar, Clock } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const DesktopNav = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link to="/" className="text-gray-800 hover:text-[#d4a760]">
        <Home size={24} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent">About</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[200px]">
              <div className="p-2">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">About Us</Link>
                <Link to="/about/safeguarding" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Safeguarding Policy</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link to="/mass-times" className="text-gray-800 hover:text-[#d4a760]">
        <Clock size={24} />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent">Seasons</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[200px]">
              <div className="p-2">
                <Link to="/seasons/ordinary-time" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Ordinary Time</Link>
                <Link to="/seasons/advent" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Advent</Link>
                <Link to="/seasons/christmastide" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Christmastide</Link>
                <Link to="/seasons/lent" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Lent</Link>
                <Link to="/seasons/triduum" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Triduum</Link>
                <Link to="/seasons/eastertide" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Eastertide</Link>
                <Link to="/seasons/catholic-prayers" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Catholic Prayers</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent">Sacraments</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[200px]">
              <div className="p-2">
                <Link to="/sacraments/baptism" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Baptism</Link>
                <Link to="/sacraments/confirmation" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Confirmation</Link>
                <Link to="/sacraments/marriage" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Marriage</Link>
                <Link to="/sacraments/rcia" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">RCIA</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link to="/gallery" className="text-gray-800 hover:text-[#d4a760] text-base">
        Gallery
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent">Notices</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[200px]">
              <div className="p-2">
                <Link to="/notices" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Parish Notices</Link>
                <Link to="/newsletters" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Newsletters</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent">Contact</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[200px]">
              <div className="p-2">
                <Link to="/contact" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Contact Us</Link>
                <Link to="/faq" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">FAQ</Link>
                <Link to="/registration" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Registration Form</Link>
                <Link to="/donation" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Make a Donation</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Link to="/calendar" className="text-gray-800 hover:text-[#d4a760]">
        <Calendar size={24} />
      </Link>
    </nav>
  );
};

export default DesktopNav;
