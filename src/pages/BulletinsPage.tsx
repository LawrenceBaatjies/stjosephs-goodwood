
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

type Bulletin = {
  id: number;
  title: string;
  date: Date;
  description: string;
  fileUrl: string;
};

const bulletins: Bulletin[] = [
  {
    id: 1,
    title: "Pope Leo XIV Inauguration Mass",
    date: new Date("2025-05-18"),
    description: "Weekly bulletin with Mass times, announcements, and special Easter celebrations.",
    fileUrl: "#",
  },
  {
    id: 2,
    title: "Parish Monthly Newsletter - April",
    date: new Date("2025-04-01"),
    description: "Monthly newsletter with parish news, upcoming events, and spiritual reflections.",
    fileUrl: "#",
  },
  {
    id: 3,
    title: "Holy Week Schedule",
    date: new Date("2025-04-13"),
    description: "Detailed schedule for all Holy Week services and celebrations.",
    fileUrl: "#",
  },
  {
    id: 4,
    title: "Sunday Bulletin - Divine Mercy Sunday",
    date: new Date("2025-04-27"),
    description: "Weekly bulletin with Mass times, announcements, and information about Divine Mercy Sunday.",
    fileUrl: "#",
  },
  {
    id: 5,
    title: "First Communion Program",
    date: new Date("2025-05-04"),
    description: "Information about First Communion celebrations and schedule of preparation classes.",
    fileUrl: "#",
  },
  {
    id: 6,
    title: "Parish Fundraiser Details",
    date: new Date("2025-05-10"),
    description: "Information about the upcoming parish fundraiser including volunteer opportunities.",
    fileUrl: "#",
  },
  {
    id: 7,
    title: "Sunday Bulletin - Pentecost",
    date: new Date("2025-05-18"),
    description: "Weekly bulletin with Mass times, announcements, and Pentecost celebration details.",
    fileUrl: "#",
  },
  {
    id: 8,
    title: "Parish Monthly Newsletter - May",
    date: new Date("2025-05-01"),
    description: "Monthly newsletter with parish news, upcoming events, and spiritual reflections.",
    fileUrl: "#",
  },
];

const BulletinsPage = () => {
  const [filterType, setFilterType] = React.useState<"all" | "recent">("recent");

  const filteredBulletins = filterType === "recent" 
    ? bulletins.filter((bulletin) => bulletin.date >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
    : bulletins;

  const sortedBulletins = [...filteredBulletins].sort((a, b) => 
    b.date.getTime() - a.date.getTime()
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-church-navy text-white py-60">
          <div 
            className="absolute inset-0 bg-center bg-center"
            style={{ 
              backgroundImage: "url('https://i0.wp.com/www.stmm.org.au/wp-content/uploads/2024/07/Parish-Bulletins-image.jpg?fit=987%2C594&ssl=1')", 
              opacity: "0.4" 
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Parish Bulletins</h1>
              <p className="text-xl font-light">
                Weekly bulletins and newsletters from our parish community
              </p>
            </div>
          </div>
        </div>

        {/* Bulletins Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            {/* Filter Toggle */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  type="button"
                  onClick={() => setFilterType("recent")}
                  className={`px-4 py-2 text-sm font-medium border rounded-l-lg ${
                    filterType === "recent"
                      ? "bg-[#d4a760] text-white border-[#d4a760]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  Recent Bulletins
                </button>
                <button
                  type="button"
                  onClick={() => setFilterType("all")}
                  className={`px-4 py-2 text-sm font-medium border-t border-b border-r rounded-r-lg ${
                    filterType === "all"
                      ? "bg-[#d4a760] text-white border-[#d4a760]"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  All Bulletins
                </button>
              </div>
            </div>

            {/* Bulletins Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedBulletins.map((bulletin) => (
                <Card key={bulletin.id} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <div className="flex items-center space-x-3">
                      <div className="rounded-full bg-[#d4a760] bg-opacity-10 p-2">
                        <FileText className="h-5 w-5 text-[#d4a760]" />
                      </div>
                      <CardTitle className="text-lg text-[#d4a760]">{bulletin.title}</CardTitle>
                    </div>
                    <CardDescription className="pt-2">
                      {format(bulletin.date, "MMMM d, yyyy")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-600">{bulletin.description}</p>
                  </CardContent>
                  <CardFooter className="bg-gray-50 flex justify-between pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-gray-700 flex items-center"
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Add to Calendar
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-[#d4a760] hover:bg-[#c09550] flex items-center"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {sortedBulletins.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No bulletins available for the selected filter.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BulletinsPage;
