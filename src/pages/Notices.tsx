
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar as CalendarIcon, Edit, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

type Notice = {
  id: string;
  title: string;
  date: string;
  time: string | null;
  description: string | null;
  location: string | null;
};

const Notices = () => {
  const [currentView, setCurrentView] = useState<"upcoming" | "all">("upcoming");
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [showAddNoticeModal, setShowAddNoticeModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const { toast } = useToast();
  
  // Form state for adding/editing notices
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    time: "",
    description: "",
    location: ""
  });
  
  useEffect(() => {
    checkUserAuth();
    fetchNotices();
  }, []);
  
  useEffect(() => {
    if (editingNotice) {
      setFormData({
        title: editingNotice.title,
        date: editingNotice.date,
        time: editingNotice.time || "",
        description: editingNotice.description || "",
        location: editingNotice.location || ""
      });
    } else {
      setFormData({
        title: "",
        date: "",
        time: "",
        description: "",
        location: ""
      });
    }
  }, [editingNotice]);
  
  const checkUserAuth = async () => {
    const { data } = await supabase.auth.getSession();
    if (data.session) {
      setIsAdmin(true);
    }
    
    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAdmin(!!session);
    });
    
    setLoading(false);
    
    return () => {
      authListener.subscription.unsubscribe();
    };
  };
  
  const fetchNotices = async () => {
    try {
      const { data, error } = await supabase
        .from("parish_notices")
        .select("*")
        .order("date", { ascending: true });
        
      if (error) {
        console.error("Error fetching notices:", error);
        return;
      }
      
      if (data) {
        setNotices(data as Notice[]);
      }
    } catch (error) {
      console.error("Exception fetching notices:", error);
    }
  };
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) {
        setAuthError(error.message);
        return;
      }
      
      setShowLoginModal(false);
      toast({
        title: "Login Successful",
        description: "You are now logged in as an admin.",
      });
    } catch (error: any) {
      setAuthError(error.message);
    }
  };
  
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
  };
  
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmitNotice = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.date) {
      toast({
        variant: "destructive",
        title: "Missing Fields",
        description: "Title and date are required.",
      });
      return;
    }
    
    try {
      if (editingNotice) {
        // Update existing notice
        const { error } = await supabase
          .from("parish_notices")
          .update({
            title: formData.title,
            date: formData.date,
            time: formData.time || null,
            description: formData.description || null,
            location: formData.location || null,
            updated_at: new Date().toISOString()
          })
          .eq("id", editingNotice.id);
          
        if (error) {
          console.error("Error updating notice:", error);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to update notice. Please try again.",
          });
          return;
        }
        
        toast({
          title: "Notice Updated",
          description: "The notice has been updated successfully.",
        });
      } else {
        // Create new notice
        const { error } = await supabase
          .from("parish_notices")
          .insert({
            title: formData.title,
            date: formData.date,
            time: formData.time || null,
            description: formData.description || null,
            location: formData.location || null,
            created_by: (await supabase.auth.getUser()).data.user?.id
          });
          
        if (error) {
          console.error("Error creating notice:", error);
          toast({
            variant: "destructive",
            title: "Error",
            description: "Failed to create notice. Please try again.",
          });
          return;
        }
        
        toast({
          title: "Notice Created",
          description: "The notice has been created successfully.",
        });
      }
      
      // Reset form and refresh notices
      setFormData({
        title: "",
        date: "",
        time: "",
        description: "",
        location: ""
      });
      setShowAddNoticeModal(false);
      setEditingNotice(null);
      fetchNotices();
    } catch (error) {
      console.error("Exception in submit notice:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };
  
  const handleDeleteNotice = async (id: string) => {
    if (!confirm("Are you sure you want to delete this notice?")) {
      return;
    }
    
    try {
      const { error } = await supabase
        .from("parish_notices")
        .delete()
        .eq("id", id);
        
      if (error) {
        console.error("Error deleting notice:", error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to delete notice. Please try again.",
        });
        return;
      }
      
      toast({
        title: "Notice Deleted",
        description: "The notice has been deleted successfully.",
      });
      
      fetchNotices();
    } catch (error) {
      console.error("Exception deleting notice:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
      });
    }
  };
  
  // Get today's date for filtering
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  const filteredNotices = currentView === "upcoming"
    ? notices.filter(notice => new Date(notice.date) >= today).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    : notices.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const addToCalendar = (notice: Notice) => {
    const startDate = notice.time ? `${notice.date}T${notice.time}:00` : `${notice.date}T00:00:00`;
    const endDate = new Date(new Date(startDate).getTime() + 60*60*1000).toISOString().replace(/.\d+Z$/g, "Z");
    
    const title = encodeURIComponent(notice.title);
    const details = encodeURIComponent(notice.description || "");
    const location = encodeURIComponent(notice.location || "");
    
    // Create Google Calendar URL
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate.replace(/-|:|\.\d+/g, "")}/${endDate.replace(/-|:|\.\d+/g, "")}&details=${details}&location=${location}&sf=true&output=xml`;
    
    window.open(googleUrl, '_blank');
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
            {/* Admin Controls */}
            <div className="flex justify-between items-center mb-8">
              {/* View Toggle */}
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
              
              {/* Admin Actions */}
              <div>
                {isAdmin ? (
                  <div className="flex items-center gap-3">
                    <Button 
                      onClick={() => {
                        setEditingNotice(null);
                        setShowAddNoticeModal(true);
                      }}
                      className="bg-[#d4a760] hover:bg-[#c4973b]"
                    >
                      Add Notice
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button 
                    variant="outline" 
                    onClick={() => setShowLoginModal(true)}
                  >
                    Admin Login
                  </Button>
                )}
              </div>
            </div>

            {/* Notices Table Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredNotices.map((notice) => (
                <Card key={notice.id} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-[#d4a760] flex justify-between items-start">
                      {notice.title}
                      {isAdmin && (
                        <div className="flex gap-2 text-gray-500">
                          <button 
                            onClick={() => {
                              setEditingNotice(notice);
                              setShowAddNoticeModal(true);
                            }}
                            className="hover:text-[#d4a760]"
                          >
                            <Edit size={16} />
                          </button>
                          <button 
                            onClick={() => handleDeleteNotice(notice.id)}
                            className="hover:text-red-500"
                          >
                            <Trash size={16} />
                          </button>
                        </div>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {formatDate(notice.date)}
                      {notice.time && ` at ${notice.time.replace(":", ".")}`}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <p className="text-gray-700 mb-4">{notice.description}</p>
                    {notice.location && (
                      <div className="flex items-center text-gray-600 mb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{notice.location}</span>
                      </div>
                    )}
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
      
      {/* Admin Login Modal */}
      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Admin Login</DialogTitle>
            <DialogDescription>
              Please enter your admin credentials to manage parish notices.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4 py-4">
            {authError && (
              <div className="bg-red-50 text-red-500 p-3 rounded text-sm">
                {authError}
              </div>
            )}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <Input 
                id="email" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium">Password</label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <DialogFooter className="sm:justify-end">
              <Button type="button" variant="outline" onClick={() => setShowLoginModal(false)}>
                Cancel
              </Button>
              <Button type="submit">Login</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      
      {/* Add/Edit Notice Modal */}
      <Dialog open={showAddNoticeModal} onOpenChange={setShowAddNoticeModal}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editingNotice ? 'Edit Notice' : 'Add New Notice'}</DialogTitle>
            <DialogDescription>
              {editingNotice 
                ? 'Update the notice details below.' 
                : 'Fill in the details to create a new parish notice.'}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmitNotice} className="space-y-4 py-4">
            <div className="space-y-2">
              <label htmlFor="title" className="text-sm font-medium">Title</label>
              <Input 
                id="title" 
                name="title"
                value={formData.title}
                onChange={handleFormChange}
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium">Date</label>
                <Input 
                  id="date" 
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="time" className="text-sm font-medium">Time (optional)</label>
                <Input 
                  id="time" 
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleFormChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="location" className="text-sm font-medium">Location (optional)</label>
              <Input 
                id="location" 
                name="location"
                value={formData.location}
                onChange={handleFormChange}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium">Description (optional)</label>
              <Textarea 
                id="description" 
                name="description"
                value={formData.description}
                onChange={handleFormChange}
                rows={4}
              />
            </div>
            <DialogFooter className="sm:justify-end">
              <Button 
                type="button" 
                variant="outline" 
                onClick={() => {
                  setShowAddNoticeModal(false);
                  setEditingNotice(null);
                }}
              >
                Cancel
              </Button>
              <Button type="submit">
                {editingNotice ? 'Update Notice' : 'Add Notice'}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Notices;
