
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const ParishCommunityPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1475137979732-539a09d473e2?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish & Community Building</h1>
              <p className="text-xl font-light">
                Creating a vibrant parish community where all can find belonging and purpose
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              {/* Portfolio Lead & Contact Information */}
              <div className="bg-gray-50 p-6 rounded-lg mb-8 border-l-4 border-church-red">
                <h3 className="text-xl font-bold text-church-navy mb-2">Parish Portfolio Lead</h3>
                <p className="text-lg font-medium mb-4">Mrs. Patricia Williams</p>
                
                <h4 className="text-lg font-bold text-church-navy mb-2">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-church-red mr-2" />
                    <span>+27 82 456 7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-church-red mr-2" />
                    <span>community@stjosephsgoodwood.org</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">Building Communion</h2>
              
              <p>Our Parish and Community Building Ministry works to strengthen connections among parishioners and create a sense of belonging for everyone. We believe that a vibrant parish community is essential for living out our Catholic faith and sharing it with others.</p>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Key Initiatives</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Parish Council:</strong> Providing leadership and direction for our parish community</li>
                <li><strong>Co-Responsibility:</strong> Encouraging all parishioners to take ownership of parish life and mission</li>
                <li><strong>Social events:</strong> Creating opportunities for fellowship and connection</li>
                <li><strong>Hospitality:</strong> Welcoming all who come through our doors</li>
                <li><strong>Communications:</strong> Keeping parishioners informed about parish activities and opportunities</li>
                <li><strong>Database maintenance:</strong> Ensuring accurate information for effective parish communication</li>
                <li><strong>Stewardship:</strong> Encouraging the sharing of time, talent, and treasure</li>
                <li><strong>Small Christian communities:</strong> Fostering deeper connections through small group gatherings</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Parish Social Events</h3>
              
              <p>Throughout the year, we organize various social events that bring our parish family together. These include:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Parish feast day celebrations</li>
                <li>Community dinners</li>
                <li>Holiday gatherings</li>
                <li>Cultural celebrations</li>
                <li>Family fun days</li>
                <li>Youth social events</li>
              </ul>

              <p>These events not only provide opportunities for fellowship but also help integrate new members into our parish family.</p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-church-navy mb-3">Get Involved</h4>
                <p className="mb-4">There are many ways to contribute to building our parish community! Whether you have a gift for hospitality, organization, communication, or simply a friendly smile, we invite you to join us in making St. Joseph's a warm and welcoming community.</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Our Parish Community Coordinator
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ParishCommunityPage;
