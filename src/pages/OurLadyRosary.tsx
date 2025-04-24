
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OurLadyRosary = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://adct.org.za/wp-content/uploads/2018/08/Find-a-Parish-new-image.jpg')", 
              opacity: "0.4" 
            }}
          />
          
          <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Our Lady of the Rosary
              </h1>
              <p className="text-xl mb-8 font-light">
                Ruyterwacht - Sister Parish of St Joseph's Goodwood
              </p>
            </div>
          </div>
        </div>

        {/* Parish Info Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">About Our Lady of the Rosary</h2>
                  
                  <div className="prose max-w-none">
                    <p className="mb-4">
                      Our Lady of the Rosary Catholic Church in Ruyterwacht serves the Catholic community in the northern 
                      suburbs of Cape Town. As a sister parish to St Joseph's Goodwood, we maintain a close relationship 
                      and often collaborate on various ministries and events.
                    </p>
                    
                    <p className="mb-4">
                      The church was established to serve the growing Catholic community in Ruyterwacht and surrounding areas, 
                      providing a spiritual home for many families in this part of Cape Town. Over the years, it has become a 
                      vibrant center of worship, fellowship, and service.
                    </p>
                    
                    <p>
                      Our Lady of the Rosary Parish operates under the administration of the Catholic Archdiocese of Cape Town 
                      and shares many resources and programs with St Joseph's Goodwood as sister parishes.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3">Parish Details</h3>
                    
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Address:</strong> 10th Avenue, Ruyterwacht, Cape Town</li>
                      <li><strong>Mass Times:</strong> Sunday 8:00 AM (Please confirm current schedule)</li>
                      <li><strong>Parish Priest:</strong> Shared with St Joseph's Goodwood</li>
                    </ul>
                  </div>
                </div>
                
                <div className="lg:col-span-1">
                  <div className="bg-gray-100 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-church-navy mb-4">Contact Information</h3>
                    
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="font-medium w-24">Address:</span>
                        <span>10th Avenue, Ruyterwacht, Cape Town</span>
                      </li>
                      
                      <li className="flex items-start">
                        <span className="font-medium w-24">Telephone:</span>
                        <span>Contact through St Joseph's Parish Office</span>
                      </li>
                    </ul>
                    
                    <div className="mt-6">
                      <h4 className="font-semibold mb-2">Mass Schedule</h4>
                      <p>Sunday: 8:00 AM</p>
                      <p className="text-sm italic mt-2">
                        Please confirm current schedule with the parish office
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">Parish Gallery</h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img 
                      src="https://adct.org.za/wp-content/uploads/2018/08/Find-a-Parish-new-image.jpg" 
                      alt="Our Lady of the Rosary"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img 
                      src="https://adct.org.za/wp-content/uploads/2022/12/SYD_WebCarousel.jpg" 
                      alt="Parish Life"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100">
                    <img 
                      src="https://adct.org.za/wp-content/uploads/2022/09/Archbishop-Stephen-Brislin.jpg" 
                      alt="Parish Event"
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl md:text-3xl font-bold text-church-navy mb-6">Our Shared Ministries</h2>
                
                <div className="prose max-w-none">
                  <p className="mb-4">
                    As sister parishes, St Joseph's Goodwood and Our Lady of the Rosary collaborate on various ministries 
                    and activities throughout the year. This partnership allows us to strengthen our communities and serve 
                    the broader Cape Town area more effectively.
                  </p>
                  
                  <h3 className="text-xl font-semibold mt-6 mb-3">Collaborative Activities</h3>
                  
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Joint parish retreats and renewal programs</li>
                    <li>Shared sacramental preparation for Confirmation</li>
                    <li>Combined charitable outreach and social justice initiatives</li>
                    <li>Cross-parish prayer groups and bible studies</li>
                    <li>Seasonal celebrations and festivities</li>
                  </ul>
                  
                  <p>
                    We invite parishioners from both communities to participate in events at either parish and to support 
                    our shared mission of spreading the Gospel and serving those in need throughout the Cape Town area.
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

export default OurLadyRosary;
