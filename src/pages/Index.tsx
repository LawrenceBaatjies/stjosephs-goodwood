
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";
import MassTimes from "@/components/MassTimes";
import FeaturedEvents from "@/components/FeaturedEvents";
import ParishGroups from "@/components/ParishGroups";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Welcome />
        <MassTimes />
        <FeaturedEvents />
        <ParishGroups />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
