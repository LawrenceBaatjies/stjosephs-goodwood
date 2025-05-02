
import React from "react";

const NoticesHero = () => {
  return (
    <div className="relative bg-church-navy text-white py-60">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1569845177077-2a37322a60c7?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
          opacity: "0.4" 
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish Notices</h1>
          <p className="text-xl font-light">
            Stay informed about upcoming events and announcements
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticesHero;
