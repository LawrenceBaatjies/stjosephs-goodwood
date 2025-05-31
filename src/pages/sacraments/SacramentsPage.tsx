
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SacramentsOverview from "@/pages/sacraments/SacramentsOverview";

const SacramentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1603385004916-e6b8406309d4?q=80&w=1974&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">The Sacraments</h1>
              <p className="text-xl font-light">
                Sacred signs instituted by Christ to give grace
              </p>
            </div>
          </div>
        </div>

        <SacramentsOverview />
      </main>
      <Footer />
    </div>
  );
};

export default SacramentsPage;
