
import React, { useEffect, useState } from "react";
import SectionContainer from "@/components/ui/section-container";
import SectionHeader from "@/components/ui/section-header";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

interface ArchdioceseEvent {
  id: string;
  title: string;
  date: string;
  location?: string;
  description?: string;
  url?: string;
}

const JubileeYear = () => {
  const [events, setEvents] = useState<ArchdioceseEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would fetch from the Archdiocese API
    // For now, we'll use mock data
    const mockEvents: ArchdioceseEvent[] = [
      {
        id: "1",
        title: "Jubilee Year 2025 Opening Mass",
        date: "2025-01-01",
        location: "St. Mary's Cathedral",
        description: "Solemn Mass to open the Jubilee Year 2025 celebrated by Archbishop Stephen Brislin.",
        url: "https://adct.org.za/events/"
      },
      {
        id: "2",
        title: "Jubilee Pilgrimage to the Holy Doors",
        date: "2025-02-15",
        location: "Various Churches in Cape Town",
        description: "Pilgrimage to designated Holy Door churches in the Archdiocese.",
        url: "https://adct.org.za/events/"
      },
      {
        id: "3",
        title: "Archdiocesan Youth Day",
        date: "2025-03-22",
        location: "St Joseph's Goodwood",
        description: "Special celebration for youth during the Jubilee Year with activities and worship.",
        url: "https://adct.org.za/events/"
      },
      {
        id: "4",
        title: "Conference on the History of the Archdiocese",
        date: "2025-04-10",
        location: "St. Mary's Cathedral Hall",
        description: "Historical conference detailing the 176 years of Catholic presence in Cape Town.",
        url: "https://adct.org.za/events/"
      }
    ];
    
    setTimeout(() => {
      setEvents(mockEvents);
      setIsLoading(false);
    }, 1000); // Simulate API fetch delay
  }, []);

  // Format date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <SectionContainer background="gray">
      <SectionHeader>Jubilee Year 2025</SectionHeader>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mb-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              The Catholic Church will celebrate the Jubilee Year 2025, proclaimed by Pope Francis with the theme 
              "Pilgrims of Hope." This Holy Year is a special time of grace and spiritual renewal for the faithful worldwide.
            </p>
            
            <p className="text-lg leading-relaxed mt-4">
              The Jubilee begins with the opening of the Holy Door at St. Peter's Basilica on Christmas Eve 2024 and will continue 
              throughout 2025, focusing on four pillars: pilgrimage to holy sites, reconciliation through the sacrament of Confession, 
              charity toward those in need, and a deepening of our faith.
            </p>
            
            <p className="text-lg leading-relaxed mt-4">
              Join us for special events throughout 2025 in our parish and across the Archdiocese of Cape Town 
              as we embark on this pilgrimage of hope together.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://www.vaticannews.va/content/dam/vaticannews/agenzie/images/afp/2022/02/17/15/1645143657372.jpg/_jcr_content/renditions/cq5dam.thumbnail.cropped.1500.844.jpeg" 
              alt="Jubilee Year 2025 - Pilgrims of Hope"
              className="w-full h-auto object-cover"
            />
            <div className="bg-white p-4">
              <p className="text-sm text-gray-600 italic">
                Pope Francis has announced "Pilgrims of Hope" as the theme for the Jubilee Year 2025
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-church-navy mb-6">Upcoming Archdiocesan Events</h3>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-pulse flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mb-4"></div>
                <div className="h-4 w-28 bg-gray-300 rounded"></div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map(event => (
                <Card key={event.id} className="overflow-hidden transition-transform duration-300 hover:-translate-y-1">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-church-navy">{event.title}</CardTitle>
                    <CardDescription className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(event.date)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    {event.location && (
                      <p className="text-sm text-gray-600 mb-3">
                        <span className="font-semibold">Location:</span> {event.location}
                      </p>
                    )}
                    <p className="text-gray-700">{event.description}</p>
                  </CardContent>
                  {event.url && (
                    <CardFooter className="bg-gray-50 pt-4">
                      <a href={event.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="flex items-center">
                          More Details
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </a>
                    </CardFooter>
                  )}
                </Card>
              ))}
            </div>
          )}
          
          <div className="flex justify-center mt-8">
            <a href="https://adct.org.za/events/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-church-red hover:bg-opacity-90">
                View All Archdiocese Events
              </Button>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default JubileeYear;
