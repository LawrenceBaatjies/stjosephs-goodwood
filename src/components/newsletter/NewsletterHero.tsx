
import React from "react";

const NewsletterHero = () => {
  return (
    <div className="relative bg-church-navy text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?q=80&w=2671&auto=format&fit=crop')", 
          opacity: "0.4" 
        }}
      />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Parish Newsletters
          </h1>
          <p className="text-xl mb-8 font-light">
            Stay connected with our parish community through our regular newsletters
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterHero;
