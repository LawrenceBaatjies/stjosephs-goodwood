import React from "react";
import { Info } from "lucide-react";

const ConfessionSection = () => {
  return (
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
  );
};

export default ConfessionSection;
