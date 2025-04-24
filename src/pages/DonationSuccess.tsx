
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const DonationSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <div className="max-w-lg w-full text-center">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <Check className="text-green-600 w-8 h-8" />
          </div>
          <h1 className="text-3xl font-bold text-[#d4a760] mb-4">Thank You for Your Donation!</h1>
          <p className="text-gray-700 mb-6">
            Your generous contribution will help support our parish mission and make a 
            difference in our community. A receipt has been sent to your email.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full">Return to Home</Button>
            </Link>
            <Link to="/donation">
              <Button variant="outline" className="w-full">Make Another Donation</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DonationSuccess;
