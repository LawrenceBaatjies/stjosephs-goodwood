
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MassTimesHero from "@/components/mass-times/MassTimesHero";
import RegularSchedule from "@/components/mass-times/RegularSchedule";
import ConfessionSection from "@/components/mass-times/ConfessionSection";
import SpecialCelebrations from "@/components/mass-times/SpecialCelebrations";
import JubileeYear from "@/components/mass-times/JubileeYear";

const MassTimesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MassTimesHero />
        <RegularSchedule />
        <ConfessionSection />
        <SpecialCelebrations />
        <JubileeYear />
      </main>
      <Footer />
    </div>
  );
};

export default MassTimesPage;
