
import React from "react";

const NewsletterHero = () => {
  return (
    <div className="relative bg-church-navy text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center py-30"
        style={{ 
          backgroundImage: "url('https://images-platform.99static.com//9H0jVKkEVk5d0szfDJ-9_6W5u5s=/109x122:1098x1113/fit-in/500x500/99designs-contests-attachments/107/107682/attachment_107682413')", 
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
