
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
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
  );
};

export default Logo;
