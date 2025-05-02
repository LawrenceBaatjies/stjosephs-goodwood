
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const EvangelizationPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Evangelization Ministry</h1>
              <p className="text-xl font-light">
                Spreading the Good News of Jesus Christ through missionary discipleship
              </p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">Our Mission</h2>
              
              <p>The Evangelization Portfolio focuses on missionary discipleship, where every baptized person is called to spread the Good News of Jesus Christ. At St. Joseph's, we embrace this mission through various initiatives that help parishioners grow in faith and share it with others.</p>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Key Responsibilities</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Weekly message ministry:</strong> Circulating weekly reflection messages</li>
                <li><strong>Alpha program:</strong> An opportunity to explore the Christian faith in a friendly, open, and informal environment</li>
                <li><strong>Alpha for Youth:</strong> A version of Alpha tailored for young people</li>
                <li><strong>Home visitation program:</strong> Connecting with parishioners in their homes to support their faith journey</li>
                <li><strong>Setting up small faith-sharing communities:</strong> Creating spaces for parishioners to deepen their faith together</li>
                <li><strong>Catholic Engaged Encounter:</strong> Preparing engaged couples for marriage in the Catholic Church</li>
                <li><strong>Welcoming newcomers:</strong> Ensuring new members feel welcomed into our parish family</li>
                <li><strong>Baptism classes:</strong> Supporting parents preparing for their child's baptism</li>
                <li><strong>Men's ministry & Women's ministry:</strong> Specialized groups that provide fellowship and spiritual growth opportunities</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Our Approach</h3>
              
              <p>We believe that evangelization begins with personal encounter - with Christ and with one another. Our programs are designed to facilitate meaningful relationships that nurture faith and encourage sharing the Gospel message through word and deed.</p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-church-navy mb-3">Get Involved</h4>
                <p className="mb-4">We welcome parishioners with a passion for sharing their faith to join our Evangelization Ministry. Whether you're interested in leading small groups, helping with Alpha, or supporting our outreach efforts, there's a place for you to serve.</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Us to Join
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

export default EvangelizationPage;
