
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AnointingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1585435421671-0c16737a3323?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Anointing of the Sick</h1>
              <p className="text-xl font-light">
                A sacrament of healing and comfort
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <h2 className="text-church-red text-3xl mb-6 font-bold">Understanding the Sacrament</h2>
                
                <p>The Anointing of the Sick is a powerful sacrament of healing that provides spiritual and sometimes physical strength during illness, especially near the time of death. This sacrament is administered to bring spiritual and even physical strength during an illness, especially near the time of death.</p>
                
                <p>The Catechism of the Catholic Church states: "The Anointing of the Sick 'is not a sacrament for those only who are at the point of death. Hence, as soon as anyone of the faithful begins to be in danger of death from sickness or old age, the fitting time for him to receive this sacrament has certainly already arrived.'"</p>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Who Can Receive the Sacrament?</h3>
                
                <p>The sacrament is for all who are seriously ill, facing surgery, weakened by advanced age, or close to death. It is appropriate to receive the Anointing of the Sick at the beginning of a serious illness and can be repeated if the illness worsens or if another serious sickness occurs.</p>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Effects of the Sacrament</h3>
                
                <ul className="list-disc pl-6 mb-6">
                  <li>Uniting the sick person to the passion of Christ, for their own good and that of the whole Church</li>
                  <li>Strengthening, peace, and courage to endure the sufferings of illness or old age</li>
                  <li>Forgiveness of sins, if the sick person was not able to obtain it through the sacrament of Penance</li>
                  <li>Restoration of health, if it is conducive to the salvation of their soul</li>
                  <li>Preparation for passing over to eternal life</li>
                </ul>
                
                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-church-red">Requesting the Sacrament</h3>
                  <p className="mb-4">To arrange for the Anointing of the Sick, please contact the parish office. In emergencies, please call the emergency line.</p>
                  <p><strong>Parish Office:</strong> (555) 123-4567</p>
                  <p><strong>Emergency Line:</strong> (555) 987-6543</p>
                  <p className="mt-4 italic">Please don't wait until the last moment to request this sacrament. It is best when the person can participate in the sacrament with awareness and prayer.</p>
                </div>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Community Celebration</h3>
                
                <p>Our parish offers a communal celebration of the Anointing of the Sick several times throughout the year, typically during special Masses. These celebrations are announced in the parish bulletin and at Mass.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AnointingPage;
