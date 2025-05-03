
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RegistrationHero from "@/components/registration/RegistrationHero";
import RegistrationForm from "@/components/registration/RegistrationForm";
import { useRegistrationForm } from "@/hooks/useRegistrationForm";

const Registration = () => {
  const { form, isSubmitting, onSubmit } = useRegistrationForm();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <RegistrationHero />

        {/* Registration Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <RegistrationForm
                form={form}
                onSubmit={onSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Registration;
