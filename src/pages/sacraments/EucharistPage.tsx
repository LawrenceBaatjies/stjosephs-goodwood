
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const EucharistPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1563841136281-0093256? q=80&w=1974&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Holy Eucharist</h1>
              <p className="text-xl font-light">
                The source and summit of the Christian life
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg mx-auto">
                <h2 className="text-church-red text-3xl mb-6 font-bold">What is the Eucharist?</h2>
                
                <p>The Eucharist is the source and summit of the Christian life. The term "Eucharist" originates from the Greek word eucharistia, meaning thanksgiving.</p>
                
                <p>In the celebration of the Eucharist, bread and wine become the Body and Blood of Jesus Christ through the power of the Holy Spirit and the instrumentality of the priest.</p>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">First Holy Communion</h3>
                
                <p>First Holy Communion is when a person first receives the Sacrament of the Holy Eucharist, the Body and Blood of Jesus Christ. For children, this typically happens around the age of seven or eight, when they've reached the age of reason and can understand the difference between ordinary bread and wine and the sacred Eucharist.</p>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Requirements</h3>
                
                <ul className="list-disc pl-6 mb-6">
                  <li>Children must have been baptized</li>
                  <li>Children must have reached the age of reason (typically around 7-8 years old)</li>
                  <li>Children must have completed our parish's preparation program</li>
                  <li>Children should understand the basic teachings about the Eucharist at an age-appropriate level</li>
                </ul>
                
                <h3 className="text-2xl mt-8 mb-4 text-[#d4a760]">Preparation</h3>
                
                <p>Our parish offers First Communion preparation classes as part of our Faith Formation program. Please contact the parish office to enroll your child in these classes.</p>
                
                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-4 text-church-red">Schedule</h3>
                  <p className="mb-2"><strong>First Communion Classes:</strong> Sundays at 9:30 AM during the school year</p>
                  <p className="mb-2"><strong>First Communion Celebrations:</strong> Usually in May</p>
                  <p className="mb-4"><strong>Contact:</strong> Parish Office at (+27)  21 591 2229</p>
                  <p className="italic">Please register your child at least 6 months before their anticipated First Communion date.</p>
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

export default EucharistPage;
