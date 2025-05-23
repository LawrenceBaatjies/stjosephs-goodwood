
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const CommunityEngagementPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1593113598332-cd59a5080f22?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Community Engagement Ministry</h1>
              <p className="text-xl font-light">
                Reaching out with Christ's love to serve those in need
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
                <p className="text-lg font-medium mb-4">Pasty</p>
                
                <h4 className="text-lg font-bold text-church-navy mb-2">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-church-red mr-2" />
                    <span>+27 82 567 8901</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-church-red mr-2" />
                    <span>outreach@stjosephsgoodwood.org</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">Faith in Action</h2>
              
              <p>Our Community Engagement Ministry puts our faith into action through various outreach initiatives that serve those in need. We strive to be the hands and feet of Christ in our local community and beyond, reflecting Catholic social teaching through our service to others.</p>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Key Programs</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>St. Vincent de Paul Society:</strong> Providing direct assistance to those experiencing hardship</li>
                <li><strong>Justice & Peace:</strong> Advocating for social justice and the common good</li>
                <li><strong>Justice Act:</strong> Taking action on social justice issues</li>
                <li><strong>Social Justice:</strong> Promoting awareness and education on Catholic social teaching</li>
                <li><strong>Community outreach:</strong> Connecting with and serving the broader local community</li>
                <li><strong>Prison ministry:</strong> Supporting those who are incarcerated and their families</li>
                <li><strong>Food pantry:</strong> Providing food assistance to those in need</li>
                <li><strong>Refugee support:</strong> Helping refugees integrate into the community</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Special Projects</h3>
              
              <p>Throughout the year, we organize special outreach projects that respond to particular needs in our community and world. These include:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Holiday giving programs</li>
                <li>Back-to-school supply drives</li>
                <li>Disaster relief collections</li>
                <li>Hygiene kit assembly for homeless shelters</li>
                <li>Support for local Catholic schools</li>
              </ul>

              <p>These projects provide concrete ways for all parishioners to participate in our parish's mission of service.</p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-church-navy mb-3">Get Involved</h4>
                <p className="mb-4">Our Community Engagement Ministry welcomes volunteers with a variety of skills and interests. Whether you can offer regular service or participate in occasional projects, your contribution makes a difference in the lives of those we serve.</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Our Community Engagement Coordinator
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

export default CommunityEngagementPage;
