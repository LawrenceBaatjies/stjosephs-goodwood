
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const MarriageFamilyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Marriage & Family Ministry</h1>
              <p className="text-xl font-light">
                Supporting and strengthening Catholic marriages and family life
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
                <p className="text-lg font-medium mb-4">Mr. & Mrs. John and Sarah Thompson</p>
                
                <h4 className="text-lg font-bold text-church-navy mb-2">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-church-red mr-2" />
                    <span>+27 82 345 6789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-church-red mr-2" />
                    <span>marriage-family@stjosephsgoodwood.org</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">The Domestic Church</h2>
              
              <p>The Marriage and Family Ministry recognizes the family as the "domestic church" - the first place where children experience God's love and learn to practice their faith. We provide resources and support to help Catholic families thrive in their vocation.</p>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Key Initiatives</h3>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Marriage preparation:</strong> Preparing engaged couples for the Sacrament of Matrimony</li>
                <li><strong>Marriage enrichment:</strong> Opportunities for married couples to strengthen their relationship</li>
                <li><strong>Marriage counselling:</strong> Support for couples experiencing challenges</li>
                <li><strong>Parent education:</strong> Resources to help parents in their role as first educators of their children</li>
                <li><strong>Family fellowship events:</strong> Activities that bring families together for fun and community building</li>
                <li><strong>Marriage mentoring:</strong> Pairing experienced couples with newlyweds for guidance and support</li>
                <li><strong>Marriage and Family & Life Week:</strong> Annual celebration of the gifts of marriage and family life</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Support for All Families</h3>
              
              <p>We recognize that families come in different forms and face various challenges. Our ministry seeks to welcome and support all families, including:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li>Newly married couples</li>
                <li>Parents of young children</li>
                <li>Families with adolescents and teenagers</li>
                <li>Empty-nesters</li>
                <li>Single-parent families</li>
                <li>Blended families</li>
                <li>Families caring for elderly relatives</li>
              </ul>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-church-navy mb-3">Get Involved</h4>
                <p className="mb-4">Whether you're looking for support for your own family or would like to help strengthen other families in our parish, we welcome your participation in our Marriage and Family Ministry.</p>
                <Link to="/contact" className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors">
                  Contact Our Marriage & Family Coordinator
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

export default MarriageFamilyPage;
