
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ReconciliationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1501631259223-89d4e246ed23?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Reconciliation</h1>
              <p className="text-xl font-light">
                The Sacrament of Healing and Forgiveness
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <h2 className="text-church-red text-3xl mb-6 font-bold">The Sacrament of Reconciliation</h2>
                
                <p>The Sacrament of Reconciliation (also known as Confession or Penance) is a sacrament of healing that celebrates God's forgiving love. Through this sacrament, we encounter Christ in His mercy and experience His healing touch.</p>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">The Gift of Forgiveness</h3>
                
                <p>In the Sacrament of Reconciliation, we acknowledge our sins before God and the Church. Through the priest's absolution, we receive forgiveness and are reconciled with God and the Church. The sacrament helps us grow in self-awareness and gives us the grace to overcome sin in our lives.</p>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Confession Times</h3>
                
                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h4 className="font-semibold mb-2">Regular Schedule:</h4>
                  <ul className="list-disc pl-6 mb-4">
                    <li>Saturdays: 3:30 PM - 4:30 PM</li>
                    <li>Thursdays: 5:00 PM - 6:00 PM</li>
                  </ul>
                  <p>Or by appointment - please contact the parish office</p>
                </div>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">How to Make a Good Confession</h3>
                
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                  <li><strong>Examination of Conscience:</strong> Before confession, take time to reflect on your sins.</li>
                  <li><strong>Contrition:</strong> Have true sorrow for your sins and a firm resolution to avoid sin in the future.</li>
                  <li><strong>Confession:</strong> Honestly confess your sins to the priest.</li>
                  <li><strong>Penance:</strong> Perform the penance given by the priest.</li>
                  <li><strong>Absolution:</strong> Receive God's forgiveness through the words of absolution.</li>
                </ol>
                
                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-church-red">First Reconciliation</h3>
                  <p>Children typically receive their First Reconciliation before their First Communion. For more information about preparation for First Reconciliation, please contact our Faith Formation Office.</p>
                  <p className="mt-4"><strong>Contact:</strong> Parish Office at (+27)  21 591 2229</p>
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

export default ReconciliationPage;
