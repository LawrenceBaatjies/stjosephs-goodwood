
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <div className="h-10 w-10 md:h-12 md:w-12 mr-2 overflow-hidden rounded-full">
        <img 
          src="/saint-joseph-logo.png" 
          alt="St Joseph's Logo" 
          className="h-full w-full object-cover"
          width={210}
          height={210}
        />
      </div>
      <div>
        <span className="text-xl md:text-2xl font-bold text-[#d4a760]">St Joseph's</span>
        <span className="ml-1 text-xs md:text-sm text-gray-500 hidden sm:block">Catholic Church Goodwood</span>
      </div>
    </Link>
  );
};

export default Logo;
