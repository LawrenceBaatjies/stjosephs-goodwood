
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import MassTimes from "@/components/MassTimes";
import FeaturedEvents from "@/components/FeaturedEvents";
import ParishGroups from "@/components/ParishGroups";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Welcome />
        <MassTimes />
        <FeaturedEvents />
        <ParishGroups />
        
        {/* Floating EDGE Button with Image */}
        <Link
          to="/edge"
          className="fixed bottom-6 right-6 z-50"
          aria-label="EDGE Youth Ministry"
        >
          <img 
            src="/edge-youth-logo.png" 
            alt="EDGE Youth" 
            className="h-14 w-14 rounded-full shadow-lg transition-transform hover:-translate-y-1"
          />
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
