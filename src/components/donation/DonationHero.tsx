
import React from "react";

const DonationHero = () => {
  return (
    <div className="relative bg-church-navy text-white py-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070&auto=format&fit=crop')", 
          opacity: "0.3" 
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Donation</h1>
          <p className="text-xl font-light">
            Support the mission and work of St Joseph's Parish
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationHero;
