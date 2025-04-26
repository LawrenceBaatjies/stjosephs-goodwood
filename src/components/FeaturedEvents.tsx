
import React, { useState, useEffect } from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface AdctEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  imageUrl: string;
}

const EventCard = ({ title, date, time, location, description, image }: {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-church-navy">{title}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-church-red" />
            <span>{date}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 text-church-red" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-church-red" />
            <span>{location}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          to="#"
          className="text-church-red font-medium hover:underline inline-flex items-center"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Function to fetch events from ADCT (proxy required for production)
const fetchAdctEvents = async (): Promise<AdctEvent[]> => {
  // In a production environment, this would require a proper backend proxy
  // Since we can't directly fetch from external websites due to CORS restrictions,
  // we're using a fallback with sample data structured like the real data would be
  
  console.log("Attempting to fetch ADCT events");
  
  // In a real implementation, this would be:
  // const response = await fetch('https://your-proxy-url.com/adct-events');
  // return await response.json();
  
  // For now, return sample data that mimics what we'd get from ADCT
  return [
    {
      title: "Archdiocese Annual Chrism Mass",
      date: "April 4, 2025",
      time: "10:00 AM",
      location: "St Mary's Cathedral, Cape Town",
      description: "Annual Chrism Mass with Archbishop Stephen Brislin where holy oils are blessed for the year.",
      imageUrl: "https://images.unsplash.com/photo-1603085617972-2f4201209422?q=80&w=2048&auto=format&fit=crop"
    },
    {
      title: "Catholic Schools Week",
      date: "May 10-17, 2025",
      time: "Various Times",
      location: "All Catholic Schools, Cape Town",
      description: "A celebration of Catholic education in the Archdiocese with special events planned at schools.",
      imageUrl: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Youth Ministry Conference",
      date: "June 5-7, 2025",
      time: "9:00 AM - 4:00 PM",
      location: "St Joseph's College, Rondebosch",
      description: "Annual gathering for youth ministers and confirmation catechists from across the Archdiocese.",
      imageUrl: "https://images.unsplash.com/photo-1519567770579-c2fc5aa633c6?q=80&w=2070&auto=format&fit=crop"
    }
  ];
};

const FeaturedEvents = () => {
  const { data: events = [], isLoading, error } = useQuery({
    queryKey: ['adctEvents'],
    queryFn: fetchAdctEvents
  });

  if (isLoading) {
    return (
      <section className="py-16 bg-church-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600">Loading events from the Archdiocese...</p>
          </div>
          <div className="flex justify-center">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-md bg-slate-200 h-10 w-24"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.error("Error fetching ADCT events:", error);
    return (
      <section className="py-16 bg-church-gold bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600">Unable to load events. Please check again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-church-gold bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these special occasions from across the Archdiocese of Cape Town as we gather as a community in faith and fellowship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard 
              key={index} 
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              description={event.description}
              image={event.imageUrl}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/events"
            className="inline-block px-6 py-3 bg-church-navy text-white rounded-md hover:bg-opacity-90 transition-colors"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEvents;
