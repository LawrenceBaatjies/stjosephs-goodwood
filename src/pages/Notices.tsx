
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Notice = {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
};

const notices: Notice[] = [
  {
    id: 1,
    title: "Parish Council Meeting",
    date: "2025-05-10",
    time: "19:00",
    description: "Monthly parish council meeting to discuss upcoming events and initiatives.",
    location: "Parish Hall"
  },
  {
    id: 2,
    title: "First Communion Preparation",
    date: "2025-05-15",
    time: "16:30",
    description: "Preparation session for children receiving First Holy Communion.",
    location: "Church Meeting Room"
  },
  {
    id: 3,
    title: "Choir Practice",
    date: "2025-05-16",
    time: "18:30",
    description: "Weekly choir practice for the Sunday Mass.",
    location: "Church"
  },
  {
    id: 4,
    title: "Food Drive",
    date: "2025-05-20",
    time: "09:00",
    description: "Annual food drive for the local food bank. Please bring non-perishable items.",
    location: "Parish Hall"
  },
  {
    id: 5,
    title: "Bible Study",
    date: "2025-05-22",
    time: "19:00",
    description: "Weekly Bible study group focusing on the Gospel of John.",
    location: "Parish Library"
  },
  {
    id: 6,
    title: "Youth Group Meeting",
    date: "2025-05-23",
    time: "18:00",
    description: "Regular meeting of the parish youth group with games and discussion.",
    location: "Youth Room"
  },
  {
    id: 7,
    title: "Baptism Preparation Class",
    date: "2025-05-24",
    time: "10:00",
    description: "Preparation class for parents seeking baptism for their children.",
    location: "Church Meeting Room"
  },
  {
    id: 8,
    title: "Parish Picnic",
    date: "2025-05-30",
    time: "12:00",
    description: "Annual parish picnic with food, games, and fellowship.",
    location: "Parish Grounds"
  },
  {
    id: 9,
    title: "Rosary Group",
    date: "2025-06-01",
    time: "17:30",
    description: "Weekly gathering to pray the Rosary before evening Mass.",
    location: "Church"
  },
  {
    id: 10,
    title: "Marriage Preparation Weekend",
    date: "2025-06-06",
    time: "09:00",
    description: "Weekend workshop for couples preparing for marriage.",
    location: "Parish Hall"
  },
  {
    id: 11,
    title: "Senior Citizens Lunch",
    date: "2025-06-10",
    time: "12:30",
    description: "Monthly lunch gathering for senior parishioners.",
    location: "Parish Hall"
  },
  {
    id: 12,
    title: "Parish Fundraiser",
    date: "2025-06-15",
    time: "11:00",
    description: "Fundraising event to support parish building maintenance.",
    location: "Parish Grounds"
  },
  {
    id: 13,
    title: "First Reconciliation",
    date: "2025-06-20",
    time: "16:00",
    description: "First Reconciliation service for children preparing for First Communion.",
    location: "Church"
  },
  {
    id: 14,
    title: "Parish Council Elections",
    date: "2025-06-22",
    time: "12:00",
    description: "Annual elections for parish council positions.",
    location: "Parish Hall"
  },
  {
    id: 15,
    title: "Confirmation Retreat",
    date: "2025-06-27",
    time: "09:00",
    description: "Day-long retreat for Confirmation candidates.",
    location: "Church and Parish Hall"
  },
];

const Notices = () => {
  const [currentView, setCurrentView] = React.useState<"upcoming" | "all">("upcoming");
  
  // Get today's date for filtering
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const filteredNotices = currentView === "upcoming"
    ? notices.filter(notice => new Date(notice.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : notices.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const addToCalendar = (notice: Notice) => {
    const startDate = `${notice.date}T${notice.time}:00`;
    const endDate = new Date(new Date(`${notice.date}T${notice.time}`).getTime() + 60*60*1000).toISOString().replace(/.\d+Z$/g, "Z");
    
    const title = encodeURIComponent(notice.title);
    const details = encodeURIComponent(notice.description);
    const location = encodeURIComponent(notice.location);
    
    // Create Google Calendar URL
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate.replace(/-|:|\.\d+/g, "")}/${endDate.replace(/-|:|\.\d+/g, "")}&details=${details}&location=${location}&sf=true&output=xml`;
    
    window.open(googleUrl, '_blank');
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1569845177077-2a37322a60c7?q=80&w=2024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish Notices</h1>
              <p className="text-xl font-light">
                Stay informed about upcoming events and announcements
              </p>
            </div>
          </div>
        </div>

        {/* Notices Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* View Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setCurrentView("upcoming")}
                  className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
                    currentView === "upcoming"
                      ? "bg-[#d4a760] text-white border-[#d4a760]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  Upcoming
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentView("all")}
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg ${
                    currentView === "all"
                      ? "bg-[#d4a760] text-white border-[#d4a760]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  All Notices
                </button>
              </div>
            </div>

            {/* Notices Table Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotices.map((notice) => (
                <Card key={notice.id} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-[#d4a760]">{notice.title}</CardTitle>
                    <CardDescription>
                      {formatDate(notice.date)} at {notice.time.replace(":", ".")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">{notice.description}</p>
                    <div className="flex items-center text-gray-600 mb-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{notice.location}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 pt-4">
                    <Button 
                      variant="outline"
                      onClick={() => addToCalendar(notice)}
                      className="w-full flex items-center justify-center"
                    >
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredNotices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No notices found for the selected view.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Notices;
