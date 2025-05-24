
import React from "react";

const MassTimesHero = () => {
  return (
    <div className="relative bg-church-navy text-white py-60">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5j5GzgTaD_aUlSGshblaxxnoL1Tn4srjVxg&ss')", 
          opacity: "0.3" 
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mass Times & Liturgy</h1>
          <p className="text-xl font-light">
            Join us in prayer and celebration of the Eucharist
          </p>
        </div>
      </div>
    </div>
  );
};

export default MassTimesHero;
