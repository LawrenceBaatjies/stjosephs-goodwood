
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-church-navy text-white">
      {/* Church Image Background with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('lovable-uploads/hero2-image.jpg')", 
          opacity: "0.4", 
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-5 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            
            Welcome to St Joseph's Catholic Church
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            "Come to me, all of you who are weary and loaded down with burdens, and I will give you rest." Matthew 11:28
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/mass-times"
              className="px-6 py-3 bg-church-red hover:bg-opacity-90 transition-colors rounded-md font-medium text-white"
            >
              Mass Times
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white text-church-navy hover:bg-gray-100 transition-colors rounded-md font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
