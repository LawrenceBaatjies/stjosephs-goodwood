
import React from "react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

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

const FeaturedEvents = () => {
  const events = [
    {
      title: "Parish Feast Day Celebration",
      date: "March 19, 2023",
      time: "10:00 AM",
      location: "St Joseph's Church",
      description:
        "Join us for our annual Parish Feast Day celebration honoring St Joseph with a special Mass followed by community lunch.",
      image: "https://images.unsplash.com/photo-1603085617972-2f4201209422?q=80&w=2048&auto=format&fit=crop"
    },
    {
      title: "Alpha Course: Explore Faith",
      date: "Every Thursday",
      time: "7:00 PM - 9:00 PM",
      location: "Parish Hall",
      description:
        "A series of sessions exploring the Christian faith in a friendly, open and informal environment.",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Easter Triduum Services",
      date: "April 6-9, 2023",
      time: "Various Times",
      location: "St Joseph's Church",
      description:
        "Holy Thursday, Good Friday, Easter Vigil and Easter Sunday services. The most sacred time in our liturgical calendar.",
      image: "https://images.unsplash.com/photo-1519567770579-c2fc5aa633c6?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-church-gold bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-navy mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us for these special occasions as we gather as a community in faith and fellowship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
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
