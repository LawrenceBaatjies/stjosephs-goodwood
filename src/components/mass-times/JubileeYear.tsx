
import React from "react";
import SectionContainer from "@/components/ui/section-container";
import SectionHeader from "@/components/ui/section-header";

const JubileeYear = () => {
  return (
    <SectionContainer background="gray">
      <SectionHeader>Jubilee Year 2024</SectionHeader>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            The Archdiocese of Cape Town celebrates its 175th anniversary in 2024. This Jubilee Year 
            is a time of grace and renewal, calling us to remember our past with gratitude, live the 
            present with enthusiasm, and look forward to the future with confidence.
          </p>
          
          <p className="text-lg leading-relaxed mt-4">
            Throughout this special year, our parish will join in the celebrations with special 
            masses, events, and activities that commemorate this significant milestone in our 
            local Church's history.
          </p>
          
          <p className="text-lg leading-relaxed mt-4">
            We invite all parishioners to participate in these celebrations and to pray for the 
            continued growth and spiritual renewal of our Archdiocese.
          </p>
        </div>
        
        <div className="rounded-lg overflow-hidden shadow-xl">
          <img 
            src="https://adct.org.za/wp-content/uploads/2020/02/Cathedral-of-St-Mary-of-the-Flight-into-Egypt-Cape-Town.jpg" 
            alt="St Mary's Cathedral - Cape Town"
            className="w-full h-auto object-cover"
          />
          <div className="bg-white p-4">
            <p className="text-sm text-gray-600 italic">
              St. Mary's Cathedral, the Mother Church of the Archdiocese of Cape Town
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default JubileeYear;
