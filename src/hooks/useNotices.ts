
import { useState, useEffect } from "react";
import { Notice, NoticeFormData } from "@/types/notices";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useNotices = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAddNoticeModal, setShowAddNoticeModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [formData, setFormData] = useState<NoticeFormData>({
    title: "",
    date: "",
    time: "",
    description: "",
    location: ""
  });
  const { toast } = useToast();

  // Check user authentication status
  useEffect(() => {
    const checkUserAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setIsAdmin(!!data.session);
      setLoading(false);
    };

    // Set up auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAdmin(!!session);
    });

    checkUserAuth();
    fetchNotices();

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  // Set form data when editing a notice
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

  const handleLogin = async (email: string, password: string) => {
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
      resetForm();
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

  const resetForm = () => {
    setFormData({
      title: "",
      date: "",
      time: "",
      description: "",
      location: ""
    });
    setShowAddNoticeModal(false);
    setEditingNotice(null);
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

  const handleEditNotice = (notice: Notice) => {
    setEditingNotice(notice);
    setShowAddNoticeModal(true);
  };

  const handleAddNewNotice = () => {
    resetForm();
    setShowAddNoticeModal(true);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
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

  return {
    notices,
    isAdmin,
    loading,
    showLoginModal,
    setShowLoginModal,
    showAddNoticeModal,
    setShowAddNoticeModal,
    editingNotice,
    setEditingNotice,
    authError,
    formData,
    handleLogin,
    handleLogout,
    handleFormChange,
    handleSubmitNotice,
    handleDeleteNotice,
    handleEditNotice,
    handleAddNewNotice,
    formatDate,
    addToCalendar,
    resetForm
  };
};
