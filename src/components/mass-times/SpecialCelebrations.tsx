import React from "react";
import SectionContainer from "@/components/ui/section-container";
import SectionHeader from "@/components/ui/section-header";

const SpecialCelebrations = () => {
  return (
    <SectionContainer background="white">
      <SectionHeader>Holy Days & Special Celebrations</SectionHeader>
      
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
          <li>Easter Sunday: Mass - 10:30 AM</li>
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
    </SectionContainer>
  );
};

export default SpecialCelebrations;
