import React from "react";
import { Link } from "react-router-dom";
import { Calendar, Home } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface DesktopNavProps {
  setShowPopup: (show: boolean) => void;
}

const DesktopNav = ({ setShowPopup }: DesktopNavProps) => {
  return (
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
              <ul className="grid w-[220px] gap-1 p-2 bg-white">
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
  );
};

export default DesktopNav;
