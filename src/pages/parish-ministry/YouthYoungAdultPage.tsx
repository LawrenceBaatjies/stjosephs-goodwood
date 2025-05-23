
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const YouthYoungAdultPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-24">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1526976668912-1a811878dd37?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Youth & Young Adult Ministry</h1>
              <p className="text-xl font-light">
                Empowering young people to live as disciples of Jesus Christ
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
                <p className="text-lg font-medium mb-4">Shaakira</p>
                
                <h4 className="text-lg font-bold text-church-navy mb-2">Contact</h4>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-church-red mr-2" />
                    <span>+27 82 789 0123</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-church-red mr-2" />
                    <span>youth@stjosephsgoodwood.org</span>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">Nurturing Young Faith</h2>
              
              <p>Our Youth and Young Adult Ministry aims to provide a space where young people can encounter Christ, grow in their relationship with Him, and find their place in the Church community. We recognize that young people are not just the future of the Church - they are an essential part of the Church today.</p>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Youth Ministry (Ages 12-17)</h3>
              
              <p>Our youth ministry offers a variety of programs and activities for middle and high school students:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>EDGE:</strong> Our middle school youth ministry program (grades 6-8)</li>
                <li><strong>Life Teen:</strong> Our high school youth ministry program (grades 9-12)</li>
                <li><strong>Alpha for Youth:</strong> A series exploring life and faith from a Christian perspective</li>
                <li><strong>Youth retreats:</strong> Opportunities for deeper spiritual growth and community building</li>
                <li><strong>Service projects:</strong> Putting faith into action through hands-on service</li>
                <li><strong>Social events:</strong> Fun activities that foster friendship and belonging</li>
                <li><strong>Youth liturgy participation:</strong> Encouraging young people to be active in parish worship</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Young Adult Ministry (Ages 18-35)</h3>
              
              <p>Our young adult ministry provides opportunities for young adults to connect with peers who share their faith:</p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bible studies:</strong> Exploring Scripture together</li>
                <li><strong>Social events:</strong> Building community through shared activities</li>
                <li><strong>Service opportunities:</strong> Living the Gospel through service to others</li>
                <li><strong>Faith discussions:</strong> Addressing questions and topics relevant to young adults</li>
                <li><strong>Prayer experiences:</strong> Growing spiritually through various forms of prayer</li>
                <li><strong>Mentoring:</strong> Connecting with older adults in the parish who can offer guidance</li>
              </ul>

              <h3 className="text-xl font-bold text-church-navy mt-8 mb-4">Leadership Development</h3>
              
              <p>We believe in empowering young people to take on leadership roles within the ministry and the broader church community. Through training, mentoring, and hands-on experience, we help young people discover and use their gifts in service to others.</p>

              <div className="bg-gray-50 p-6 rounded-lg mt-8">
                <h4 className="text-lg font-bold text-church-navy mb-3">Get Involved</h4>
                <p className="mb-4">We welcome young people to join our ministry activities and adults who have a heart for youth ministry to volunteer as mentors, chaperones, or activity leaders. Together, we can create a vibrant environment where young people can grow in faith.</p>
                <div className="flex flex-col md:flex-row gap-4">
                  <Link to="/contact" className="inline-block px-6 py-3 bg-church-red text-white rounded-md hover:bg-opacity-90 transition-colors text-center">
                    Contact Our Youth Ministry
                  </Link>
                  <Link to="/edge" className="inline-block px-6 py-3 border border-church-navy text-church-navy rounded-md hover:bg-church-navy hover:text-white transition-colors text-center">
                    EDGE Youth Program
                  </Link>
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

export default YouthYoungAdultPage;
