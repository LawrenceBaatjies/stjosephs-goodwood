
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="h-18 w-18 md:h-16 md:w-16 mr-3 overflow-hidden rounded-full">
        <img 
          src="/lovable-uploads/logo-image.png"
          alt="St Joseph's Logo" 
          className="h-full max-w-full object-cover"
          width={210}
          height={210}
        />
      </div>
      <div>
        <span className="text-xl md:text-2xl font-bold text-[#d4a760]">St. Joseph's</span>
        <span className="ml-1 text-xs md:text-sm text-gray-500 hidden sm:block">Catholic Church - Goodwood</span>
      </div>
    </Link>
  );
};

export default Logo;
