
import React from "react";

const SpecialCelebrations = () => {
  return (
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
  );
};

export default SpecialCelebrations;
