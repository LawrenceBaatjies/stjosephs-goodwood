
import { useState, useEffect } from "react";
import { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export const useCalendarAuth = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // Auth state - using a simplified user object for admin users
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  // Initialize default admin user if none exists
  const initializeAdminUser = async () => {
    try {
      const { data: existingAdmins, error: queryError } = await supabase
        .from("admin_users")
        .select("*")
        .limit(1);

      if (queryError) {
        console.error("Error checking for admin users:", queryError);
        return;
      }

      // If no admin users exist, create a default one
      if (!existingAdmins || existingAdmins.length === 0) {
        const { error: insertError } = await supabase
          .from("admin_users")
          .insert([
            {
              email: "admin@parish.com",
              password_hash: "admin123" // In production, this should be properly hashed
            }
          ]);

        if (insertError) {
          console.error("Error creating default admin user:", insertError);
        } else {
          console.log("Default admin user created: admin@parish.com / admin123");
        }
      }
    } catch (error) {
      console.error("Error initializing admin user:", error);
    }
  };

  // Admin login using admin_users table
  const handleAdminLogin = async (email: string, password: string) => {
    setLoading(true);
    setAuthError(null);
    
    try {
      // First, try to find the admin user
      const { data: adminUsers, error: queryError } = await supabase
        .from("admin_users")
        .select("*")
        .eq("email", email);

      if (queryError) {
        console.error("Error querying admin users:", queryError);
        setAuthError("Login failed. Please try again.");
        return;
      }

      if (!adminUsers || adminUsers.length === 0) {
        setAuthError("Invalid email or password.");
        return;
      }

      const adminUser = adminUsers[0];
      
      // Simple password check (in production, compare hashed passwords)
      if (password === adminUser.password_hash) {
        // Create a simple user object
        const userObj = {
          id: adminUser.id,
          email: adminUser.email
        };
        
        setUser(userObj);
        setShowLoginModal(false);
        
        // Store in localStorage for persistence
        localStorage.setItem('calendar_admin_user', JSON.stringify(userObj));
        
        toast({
          title: "Login successful",
          description: "You now have admin access to the calendar.",
        });
      } else {
        setAuthError("Invalid email or password.");
      }
    } catch (error: any) {
      console.error("Error in handleAdminLogin:", error);
      setAuthError("Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Admin logout
  const handleLogout = async () => {
    setLoading(true);
    
    try {
      setUser(null);
      setSession(null);
      localStorage.removeItem('calendar_admin_user');
      
      toast({
        title: "Logged out successfully",
      });
    } catch (error) {
      console.error("Error signing out:", error);
    } finally {
      setLoading(false);
    }
  };

  // Initialize on mount
  useEffect(() => {
    // Initialize default admin user
    initializeAdminUser();
    
    // Check for existing admin session
    const storedUser = localStorage.getItem('calendar_admin_user');
    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser);
        setUser(userObj);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem('calendar_admin_user');
      }
    }
  }, []);

  return {
    user,
    session,
    loading,
    authError,
    showLoginModal,
    setShowLoginModal,
    handleAdminLogin,
    handleLogout,
    setLoading,
  };
};
