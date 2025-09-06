
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AdminBulletinPanel from "@/components/bulletins/AdminBulletinPanel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Download, Calendar, Loader2, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { useBulletins } from "@/hooks/useBulletins";
import { useAdminAuth } from "@/contexts/AdminAuthContext";


const BulletinsPage = () => {
  const [filterType, setFilterType] = React.useState<"all" | "recent">("recent");
  const { toast } = useToast();
  const { bulletins, loading, deleteBulletin } = useBulletins();
  const { isAuthenticated } = useAdminAuth();

  const addToCalendar = (bulletin: { id: string; title: string; description: string | null; date: string }) => {
    // Create calendar event data
    const eventTitle = bulletin.title;
    const eventDetails = bulletin.description || '';
    const eventDate = format(new Date(bulletin.date), "yyyyMMdd");
    
    // Create .ics file content
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//St. Joseph's Parish//Bulletin Event//EN
BEGIN:VEVENT
UID:${bulletin.id}-${Date.now()}@parish.com
DTSTAMP:${format(new Date(), "yyyyMMdd'T'HHmmss'Z'")}
DTSTART:${eventDate}T090000Z
SUMMARY:${eventTitle}
DESCRIPTION:${eventDetails}
END:VEVENT
END:VCALENDAR`;

    // Create and download .ics file
    const blob = new Blob([icsContent], { type: 'text/calendar' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${eventTitle.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast({
      title: "Calendar event created",
      description: `${eventTitle} has been added to your calendar.`
    });
  };

  const filteredBulletins = filterType === "recent" 
    ? bulletins.filter((bulletin) => new Date(bulletin.date) >= new Date(Date.now() - 30 * 24 * 60 * 60 * 1000))
    : bulletins;

  const sortedBulletins = [...filteredBulletins].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleDelete = async (bulletinId: string, fileName: string) => {
    if (confirm('Are you sure you want to delete this bulletin?')) {
      await deleteBulletin(bulletinId, fileName);
    }
  };

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
            <AdminBulletinPanel />
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
            {loading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-10 w-10 animate-spin text-[#d4a760]" />
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBulletins.map((bulletin) => (
                  <Card key={bulletin.id} className="overflow-hidden">
                    <CardHeader className="bg-gray-50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="rounded-full bg-[#d4a760] bg-opacity-10 p-2">
                            <FileText className="h-5 w-5 text-[#d4a760]" />
                          </div>
                          <div>
                            <CardTitle className="text-lg text-[#d4a760]">{bulletin.title}</CardTitle>
                            <CardDescription className="pt-1">
                              {format(new Date(bulletin.date), "MMMM d, yyyy")}
                            </CardDescription>
                          </div>
                        </div>
                        {isAuthenticated && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDelete(bulletin.id, bulletin.file_name)}
                            className="text-red-600 hover:text-red-800 hover:bg-red-50"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="text-gray-600">{bulletin.description || 'No description available'}</p>
                    </CardContent>
                    <CardFooter className="bg-gray-50 flex justify-between pt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="text-gray-700 flex items-center"
                        onClick={() => addToCalendar(bulletin)}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        Add to Calendar
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-[#d4a760] hover:bg-[#c09550] flex items-center"
                        onClick={() => window.open(bulletin.file_url, '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

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
