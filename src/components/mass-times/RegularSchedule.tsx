
import React from "react";
import { Calendar, Clock } from "lucide-react";

const RegularSchedule = () => {
  return (
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
  );
};

export default RegularSchedule;
