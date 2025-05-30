
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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const DesktopNav = ({ setShowPopup }: { setShowPopup: (show: boolean) => void }) => {
  const [openMenu, setOpenMenu] = React.useState<string | null>(null);

  const handleMenuClick = (menuName: string) => {
    setOpenMenu(openMenu === menuName ? null : menuName);
  };

  return (
    <nav className="hidden md:flex items-center space-x-6">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/" className="text-gray-800 hover:text-[#d4a760]">
              <Home size={24} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent"
              onClick={() => handleMenuClick('about')}
            >
              About
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[200px]">
              <div className="p-2">
                <Link to="/about" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">About Us</Link>
                <Link to="/about/safeguarding" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Safeguarding Policy</Link>
                <Link to="/gallery" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Gallery</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/mass-times" className="text-gray-800 hover:text-[#d4a760]">
              <Clock size={20} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Mass Times</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent"
              onClick={() => handleMenuClick('parish-ministry')}
            >
              Parish Ministry
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[220px]">
              <div className="p-2">
                <Link to="/parish-ministry/evangelization" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Evangelization</Link>
                <Link to="/parish-ministry/faith-formation" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Faith Formation</Link>
                <Link to="/parish-ministry/marriage-family" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Marriage & Family</Link>
                <Link to="/parish-ministry/parish-community" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Parish & Community Building</Link>
                <Link to="/parish-ministry/community-engagement" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Community Engagement</Link>
                <Link to="/parish-ministry/liturgy" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Liturgy</Link>
                <Link to="/parish-ministry/youth-young-adult" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Youth & Young Adult</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent"
              onClick={() => handleMenuClick('seasons')}
            >
              Seasons
            </NavigationMenuTrigger>
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
                {/* <Link to="/sacraments/SacramentsOverview.tsx" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Sacrament Overview</Link> */}
                <Link to="/sacraments/baptism" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Baptism</Link>
                <Link to="/sacraments/eucharist" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Eucharist</Link>
                <Link to="/sacraments/confirmation" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Confirmation</Link>
                <Link to="/sacraments/reconciliation" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Reconciliation</Link>
                <Link to="/sacraments/marriage" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Marriage</Link>
                <Link to="/sacraments/anointing" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Anointing of the Sick</Link>
                <Link to="/sacraments/holy-orders" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Holy Orders</Link>
                <Link to="/sacraments/rcia" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">RCIA</Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-gray-800 hover:text-[#d4a760] text-base bg-transparent">Notices</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white min-w-[200px]">
              <div className="p-2">
                <Link to="/notices" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Parish Notices</Link>
                <Link to="/bulletins" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">Parish Bulletins</Link>
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

      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link to="/calendar" className="text-gray-800 hover:text-[#d4a760]">
              <Calendar size={20} />
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Calendar</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </nav>
  );
};

export default DesktopNav;
