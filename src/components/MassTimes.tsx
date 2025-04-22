
import React from "react";
import { Calendar, Clock } from "lucide-react";

const MassTimes = () => {
  return (
    <section className="py-16 bg-church-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">Mass Times</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us in celebrating the Holy Eucharist and other sacraments throughout the week
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Weekend Masses */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Calendar className="text-church-red h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Weekend Masses</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Saturday Vigil</span>
                <span className="text-gray-600">6:00 PM</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="font-medium">Sunday</span>
                <span className="text-gray-600">10:00 AM</span>
              </li>
            </ul>
          </div>

          {/* Weekday Masses */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Clock className="text-church-red h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Weekday Masses</h3>
            </div>
            <ul className="space-y-2">
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Tuesday</span>
                <span className="text-gray-600">9:30 AM</span>
              </li>
              <li className="flex justify-between items-center border-b py-2">
                <span className="font-medium">Wednesday</span>
                <span className="text-gray-600">9:30 AM</span>
              </li>
              <li className="flex justify-between items-center border-b py-2">
                <span className="font-medium">Thursday</span>
                <span className="text-gray-600">9:30 AM</span>
              </li>
              <li className="flex justify-between items-center pt-2">
                <span className="font-medium">Friday</span>
                <span className="text-gray-600">9:30 AM</span>
              </li>
            </ul>
          </div>

          {/* Confession & Special Services */}
          <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:-translate-y-1">
            <div className="flex items-center mb-4">
              <Calendar className="text-church-red h-6 w-6 mr-2" />
              <h3 className="text-xl font-semibold">Confession</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between items-center border-b pb-2">
                <span className="font-medium">Saturday</span>
                <span className="text-gray-600">5:15 PM - 5:45 PM</span>
              </li>
              <li className="flex justify-between items-center pt-1">
                <span className="font-medium">By Appointment</span>
                <span className="text-gray-600">Please contact Parish Office</span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t">
              <p className="text-sm text-gray-600">
                For Holy Days of Obligation and special liturgical celebrations,
                please check our bulletin or contact the parish office.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassTimes;
