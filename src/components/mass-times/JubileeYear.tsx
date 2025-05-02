
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ArchdioceseEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  url?: string;
}

const JubileeYear = () => {
  const [events, setEvents] = useState<ArchdioceseEvent[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // In a real-world scenario, this would connect to a real API
    // For this demo, we'll simulate fetching data
    const mockEvents = [
      {
        id: "1",
        title: "Jubilee Year Opening Mass",
        date: "December 24, 2024",
        location: "St Mary's Cathedral",
        url: "https://adct.org.za/events/jubilee-year-opening"
      },
      {
        id: "2",
        title: "Pilgrimage to Holy Door Sites",
        date: "January 15, 2025",
        location: "Various Churches",
        url: "https://adct.org.za/events/jubilee-pilgrimage"
      },
      {
        id: "3",
        title: "Jubilee for Young People",
        date: "March 8, 2025",
        location: "St Mary's Cathedral",
        url: "https://adct.org.za/events/jubilee-youth"
      },
      {
        id: "4",
        title: "Jubilee for Families",
        date: "April 12, 2025",
        location: "Good Shepherd Parish",
        url: "https://adct.org.za/events/jubilee-families"
      },
      {
        id: "5",
        title: "Jubilee Evangelization Rally",
        date: "May 24, 2025",
        location: "Cape Town Stadium",
        url: "https://adct.org.za/events/jubilee-evangelization"
      }
    ];
    
    // Simulate API fetch delay
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 500);
    
  }, []);

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#d4a760] mb-8">Jubilee Year 2025</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">The Year of Hope</h3>
            <p className="text-gray-600 mb-6">
              Pope Francis has declared 2025 as an "Ordinary Jubilee Year" with the theme "Pilgrims of Hope." This Jubilee will be the Church's 27th holy year, marking 25 years since the Great Jubilee of 2000 that ushered in the third millennium of Christianity.
            </p>
            <p className="text-gray-600 mb-6">
              The Jubilee Year will begin with the opening of the Holy Door at St. Peter's Basilica on December 24, 2024, and conclude on January 6, 2026. During this special year, Catholics are encouraged to make pilgrimages, participate in special liturgies, and receive the special indulgences granted during the Jubilee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button className="bg-[#d4a760] hover:bg-[#c4973b]">
                <a href="https://www.iubilaeummundi.va/en/" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Official Jubilee Website
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline">
                <a href="https://adct.org.za/jubilee-2025" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  Archdiocese Information
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Upcoming Archdiocesan Events</h3>
              
              {loading ? (
                <div className="flex justify-center items-center h-48">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#d4a760]"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  {events.map(event => (
                    <div key={event.id} className="border-b border-gray-100 pb-4">
                      <h4 className="font-semibold text-[#d4a760]">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.date} | {event.location}</p>
                      {event.url && (
                        <a 
                          href={event.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline flex items-center mt-1"
                        >
                          More Information
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      )}
                    </div>
                  ))}
                  
                  <div className="text-center mt-6">
                    <Button variant="outline" size="sm">
                      <a 
                        href="https://adct.org.za/events" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        View All Events
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default JubileeYear;
