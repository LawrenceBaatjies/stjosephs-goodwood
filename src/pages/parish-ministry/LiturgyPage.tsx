
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const LiturgyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1606216794074-735e91fa7f53?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Liturgy Ministry</h1>
              <p className="text-xl font-light">
                Fostering full, conscious, and active participation in our worship
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
                <p className="text-lg font-medium mb-4">Pat Lindgren</p>
                
                <h4 className="text-lg font-bold text-church-navy mb-2">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-church-red mr-2" />
                    <span>+27 82 678 9012</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-church-red mr-2" />
                    <span>liturgy@stjosephsgoodwood.org</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">The Heart of Parish Life</h2>
              
              <p>Our Liturgy Ministry focuses on enhancing our communal worship experiences, particularly the Holy Mass. We strive to create reverent and prayerful liturgical celebrations that draw the whole community into deeper relationship with Christ and with one another.</p>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Liturgical Ministries</h3>
              
              <p>We coordinate the following liturgical ministries that support our parish worship:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Altar Servers:</strong> Assisting the priest during Mass</li>
                <li><strong>Extraordinary Ministers of Holy Communion:</strong> Assisting with the distribution of Holy Communion</li>
                <li><strong>Lectors:</strong> Proclaiming the Word of God</li>
                <li><strong>Music Ministry:</strong> Enhancing worship through sacred music</li>
                <li><strong>Ushers/Greeters:</strong> Welcoming the faithful and assisting with the order of the liturgy</li>
                <li><strong>Sacristans:</strong> Preparing the altar and sacred vessels for Mass</li>
                <li><strong>Environment:</strong> Creating appropriate décor for the liturgical seasons</li>
                <li><strong>Children's Liturgy of the Word:</strong> Presenting the Gospel to children at their level of understanding</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Liturgical Seasons and Special Celebrations</h3>
              
              <p>Our ministry coordinates the liturgical aspects of:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Ordinary Time</li>
                <li>Advent and Christmas</li>
                <li>Lent, Triduum, and Easter</li>
                <li>First Communions</li>
                <li>Confirmations</li>
                <li>Parish feast day celebrations</li>
                <li>Special liturgies throughout the year</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Liturgical Formation</h3>
              
              <p>We provide ongoing formation for those involved in liturgical ministries as well as education for the parish community about the liturgy and its significance. Our goal is to help everyone understand and more fully participate in our communal worship.</p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-church-navy mb-3">Get Involved</h4>
                <p className="mb-4">Our Liturgy Ministry welcomes those who feel called to serve in our parish worship. Whether you have a gift for public speaking, music, hospitality, or behind-the-scenes preparation, there is a place for you to contribute to our liturgical celebrations.</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Our Liturgy Coordinator
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

export default LiturgyPage;
