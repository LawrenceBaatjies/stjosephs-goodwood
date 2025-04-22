import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Info } from "lucide-react";

const MassTimesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1561342160-fa6469a1835c?q=80&w=2070&auto=format&fit=crop')", 
              opacity: "0.3" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mass Times & Liturgy</h1>
              <p className="text-xl font-light">
                Join us in prayer and celebration of the Eucharist
              </p>
            </div>
          </div>
        </div>

        {/* Regular Mass Schedule */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-navy mb-8">Regular Mass Schedule</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Weekend Masses */}
                <div className="bg-church-gray p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-church-red h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Weekend Masses</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center border-b pb-3">
                      <div>
                        <span className="font-medium block">Saturday Vigil</span>
                        <span className="text-sm text-gray-600">English</span>
                      </div>
                      <span className="text-gray-800 font-medium">6:00 PM</span>
                    </li>
                    <li className="flex justify-between items-center pt-1">
                      <div>
                        <span className="font-medium block">Sunday</span>
                        <span className="text-sm text-gray-600">English</span>
                      </div>
                      <span className="text-gray-800 font-medium">10:00 AM</span>
                    </li>
                  </ul>
                </div>

                {/* Weekday Masses */}
                <div className="bg-church-gray p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <Clock className="text-church-red h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Weekday Masses</h3>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Tuesday</span>
                      <span className="text-gray-800 font-medium">9:30 AM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Wednesday</span>
                      <span className="text-gray-800 font-medium">9:30 AM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Thursday</span>
                      <span className="text-gray-800 font-medium">9:30 AM</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="font-medium">Friday</span>
                      <span className="text-gray-800 font-medium">9:30 AM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Confession & Other Sacraments */}
        <section className="py-16 bg-church-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-navy mb-8">Confession & Other Sacraments</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Confession */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Info className="text-church-red h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Confession</h3>
                  </div>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium">Saturday</div>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-gray-600">Before Vigil Mass</span>
                        <span className="text-gray-800">5:15 PM - 5:45 PM</span>
                      </div>
                    </li>
                    <li>
                      <div className="font-medium">By Appointment</div>
                      <div className="text-gray-600 mt-1">
                        Please contact the parish office to schedule
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Other Sacraments */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <Info className="text-church-red h-6 w-6 mr-2" />
                    <h3 className="text-xl font-semibold">Other Sacraments</h3>
                  </div>
                  <ul className="space-y-4">
                    <li>
                      <div className="font-medium">Baptism</div>
                      <div className="text-gray-600 mt-1">
                        By appointment. Please contact the parish office at least one month in advance.
                      </div>
                    </li>
                    <li>
                      <div className="font-medium">Marriage</div>
                      <div className="text-gray-600 mt-1">
                        Please contact the parish office at least six months in advance for preparation.
                      </div>
                    </li>
                    <li>
                      <div className="font-medium">Anointing of the Sick</div>
                      <div className="text-gray-600 mt-1">
                        Please call the parish office to arrange a visit.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Holy Days & Special Masses */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-church-navy mb-8">Holy Days & Special Celebrations</h2>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  In addition to our regular Mass schedule, we celebrate special liturgies throughout the 
                  liturgical year. Times for these celebrations are announced in the weekly bulletin, on our 
                  parish website, and at Sunday Masses.
                </p>
                
                <h3 className="font-semibold text-xl mt-6">Holy Days of Obligation</h3>
                <p>
                  Mass times for Holy Days of Obligation typically include a Vigil Mass on the evening before 
                  and at least one Mass on the day itself. Please check the bulletin for specific times.
                </p>
                
                <h3 className="font-semibold text-xl mt-6">Easter Triduum</h3>
                <ul>
                  <li>Holy Thursday: Mass of the Lord's Supper - 7:00 PM</li>
                  <li>Good Friday: Celebration of the Lord's Passion - 3:00 PM</li>
                  <li>Holy Saturday: Easter Vigil - 7:30 PM</li>
                  <li>Easter Sunday: Mass - 10:00 AM</li>
                </ul>
                
                <h3 className="font-semibold text-xl mt-6">Christmas</h3>
                <ul>
                  <li>Christmas Eve: Vigil Mass - 7:00 PM</li>
                  <li>Christmas Day: Mass - 10:00 AM</li>
                </ul>
                
                <div className="bg-church-gold bg-opacity-10 p-6 rounded-lg mt-8">
                  <h3 className="font-semibold text-xl mb-2">Important Note</h3>
                  <p className="mb-0">
                    Mass times may change for special occasions. Please check our weekly bulletin 
                    or contact the parish office to confirm times for specific celebrations.
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

export default MassTimesPage;
