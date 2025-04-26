
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl font-light">
                We'd love to hear from you
              </p>
            </div>
          </div>
        </div>

        {/* Contact Information & Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                  <h2 className="text-3xl font-bold text-church-navy mb-8">Parish Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex">
                      <MapPin className="h-6 w-6 text-church-red shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Church Location</h3>
                        <p className="text-gray-700">21 Albert Street</p>
                        <p className="text-gray-700">Goodwood, SA 5034</p>
                        <p className="text-gray-700">Australia</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <MapPin className="h-6 w-6 text-church-red shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Parish Office</h3>
                        <p className="text-gray-700">21 Albert Street</p>
                        <p className="text-gray-700">Goodwood, SA 5034</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Clock className="h-6 w-6 text-church-red shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
                        <p className="text-gray-700">Tuesday - Friday: 9:00 AM - 3:00 PM</p>
                        <p className="text-gray-700">Saturday - Monday: Closed</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Phone className="h-6 w-6 text-church-red shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Phone</h3>
                        <p className="text-gray-700">(08) 8272 1988</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <Mail className="h-6 w-6 text-church-red shrink-0 mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Email</h3>
                        <p className="text-gray-700 break-words">stjosephgoodwood@</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map */}
                  <div className="mt-10">
                    <h3 className="text-xl font-semibold mb-4">Find Us</h3>
                    <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.5633409546093!2d138.5744!3d-34.9511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf2816610cfd%3A0x5033654628eb87d0!2s21%20Albert%20St%2C%20Goodwood%20SA%205034%2C%20Australia!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        title="St Joseph's Catholic Church Goodwood Map"
                      ></iframe>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div>
                  <h2 className="text-3xl font-bold text-church-navy mb-8">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name*
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-church-red focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-church-red focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-church-red focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-church-red focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject*
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-church-red focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message*
                      </label>
                      <textarea
                        id="message"
                        rows={6}
                        className="w-full rounded-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-church-red focus:border-transparent"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full bg-church-red text-white font-medium py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                    
                    <p className="text-sm text-gray-600">
                      * Required fields. We'll get back to you as soon as possible.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-navy mb-8 text-center">Additional Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Arranging a Baptism</h3>
                  <p className="text-gray-700 mb-4">
                    For information about arranging a baptism, please contact the parish office. Baptism preparation
                    sessions are held monthly for parents and godparents.
                  </p>
                  <p className="text-gray-700">
                    Baptisms are typically celebrated during Sunday Mass or at 12:00 PM on Sundays by arrangement.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Planning a Wedding</h3>
                  <p className="text-gray-700 mb-4">
                    If you are planning to get married at St Joseph's Church, please contact the parish office at
                    least six months in advance to begin the marriage preparation process.
                  </p>
                  <p className="text-gray-700">
                    Our priest will guide you through the necessary steps for both the sacramental and practical 
                    aspects of your wedding celebration.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Bulletin Submissions</h3>
                  <p className="text-gray-700">
                    To submit an item for the parish bulletin, please email your request to the parish office by
                    Tuesday at 12:00 PM for inclusion in the following Sunday's bulletin.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-church-navy mb-4">Parish Hall Bookings</h3>
                  <p className="text-gray-700">
                    The parish hall is available for parish events and private functions. For information about
                    availability, fees, and booking procedures, please contact the parish office.
                  </p>
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

export default Contact;
