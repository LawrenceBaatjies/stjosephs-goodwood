
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
// Removed isSupabaseConfigured import since it's not needed
import DonationHero from "@/components/donation/DonationHero";
import DonationForm from "@/components/donation/DonationForm";
import DonationSidebar from "@/components/donation/DonationSidebar";

const Donation = () => {
  const [configError, setConfigError] = useState<string | null>(null);
  
  useEffect(() => {
    // Supabase is configured through main client - no need to check
    // setConfigError can be removed if no longer needed
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <DonationHero />

        {/* Donation Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {configError && (
                <div className="mb-8">
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{configError}</AlertDescription>
                  </Alert>
                </div>
              )}

              {/* Why Your Support Matters section */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-12">
                <h2 className="text-2xl font-bold text-[#d4a760] mb-4">Why Your Support Matters</h2>
                <p className="text-gray-700 mb-4">
                  Your generous donations help us maintain our church building, support our parish ministries, 
                  and serve our community. By contributing to St Joseph's, you're helping to ensure that we 
                  can continue our mission of spreading the Gospel and serving those in need.
                </p>
                <p className="text-gray-700">
                  All donations to St Joseph's Parish are tax-deductible as allowed by law.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Donation Form */}
                <div className="lg:col-span-7">
                  <DonationForm configError={configError} />
                </div>

                {/* Donation Information */}
                <div className="lg:col-span-5">
                  <DonationSidebar />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Donation;
