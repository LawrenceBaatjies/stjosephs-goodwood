
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const FaithFormationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1555696265-b30e0115cd5c?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Faith Formation Ministry</h1>
              <p className="text-xl font-light">
                Growing in knowledge and understanding of our Catholic faith
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">Lifelong Faith Journey</h2>
              
              <p>The Faith Formation Ministry aims to provide ongoing formation in the Catholic faith at all stages of life. We believe that understanding our faith is essential for a deeper relationship with God and living out our calling as disciples of Christ.</p>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Key Programs</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>First Holy Communion:</strong> Preparing children to receive the Sacrament of the Eucharist</li>
                <li><strong>Confirmation preparation:</strong> Guiding young people as they prepare to receive the gifts of the Holy Spirit</li>
                <li><strong>Adult faith formation:</strong> Ongoing opportunities for adults to deepen their understanding of Catholic teaching</li>
                <li><strong>Bible study:</strong> Regular gatherings to explore Scripture and its application to daily life</li>
                <li><strong>RCIA (Rite of Christian Initiation for Adults):</strong> Accompanying those who are exploring the Catholic faith</li>
                <li><strong>Catholic Inquiry:</strong> Sessions for those with questions about Catholicism</li>
                <li><strong>Various faith courses:</strong> Specialized programs on different aspects of Catholic faith and tradition</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Our Philosophy</h3>
              
              <p>Faith Formation is not just about acquiring knowledge but about transformation. Our approach combines catechesis with opportunities for prayer, reflection, and community building to foster a living relationship with Christ and His Church.</p>
              
              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Monthly Courses</h3>
              
              <p>Throughout the year, we offer various faith courses that explore different aspects of Catholic teaching and spirituality. These courses are open to all parishioners and provide a wonderful opportunity to deepen your faith alongside others in our community.</p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-church-navy mb-3">Get Involved</h4>
                <p className="mb-4">We are always looking for catechists and volunteers to support our Faith Formation programs. If you have a passion for sharing the Catholic faith, please consider joining our team.</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Our Faith Formation Coordinator
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

export default FaithFormationPage;
