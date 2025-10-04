
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { AdminUser } from "@/components/newsletter/types/context";

export const useNewsletterAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const { toast } = useToast();

  // Check authentication status on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const adminData = localStorage.getItem('newsletter_admin');
        if (adminData) {
          const admin = JSON.parse(adminData);
          setAdminUser(admin);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error checking auth:', error);
        localStorage.removeItem('newsletter_admin');
      }
    };
    
    checkAuth();
  }, []);

  const createDefaultAdminUser = async () => {
    try {
      // Check if any admin users exist
      const { data: existingAdmins, error: checkError } = await supabase
        .from('admin_users')
        .select('id')
        .limit(1);

      if (checkError) {
        console.error('Error checking existing admins:', checkError);
        return;
      }

      // If no admin users exist, create default one
      if (!existingAdmins || existingAdmins.length === 0) {
        const { error: insertError } = await supabase
          .from('admin_users')
          .insert({
            email: 'admin@parish.com',
            password_hash: 'temp_hash' // In production, this should be properly hashed
          });

        if (insertError) {
          console.error('Error creating default admin:', insertError);
        } else {
          console.log('Default admin user created: admin@parish.com / admin123');
        }
      }
    } catch (error) {
      console.error('Exception creating default admin:', error);
    }
  };

  const handleLogin = async (email: string, password: string) => {
    try {
      setAuthError(null);
      
      // Call edge function to verify login with bcrypt
      const { data, error } = await supabase.functions.invoke('verify-admin-login', {
        body: { email, password }
      });

      if (error) {
        console.error('Function invocation error:', error);
        setAuthError('Login failed. Please try again.');
        return;
      }

      if (!data?.success) {
        setAuthError(data?.error || 'Invalid email or password.');
        return;
      }

      const user: AdminUser = {
        id: data.user.id,
        email: data.user.email
      };
      
      setAdminUser(user);
      setIsAuthenticated(true);
      setShowLoginModal(false);
      
      // Store in localStorage for persistence
      localStorage.setItem('newsletter_admin', JSON.stringify(user));
      
      toast({
        title: "Login Successful",
        description: "You are now logged in as an admin.",
      });
    } catch (err: any) {
      console.error('Login error:', err);
      setAuthError(err.message || 'Failed to login');
    }
  };

  const handleLogout = async () => {
    try {
      setAdminUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('newsletter_admin');
      
      toast({
        title: "Logged Out",
        description: "You have been logged out successfully.",
      });
    } catch (err) {
      console.error('Error signing out:', err);
    }
  };

  return {
    isAuthenticated,
    authError,
    showLoginModal,
    setShowLoginModal,
    adminUser,
    handleLogin,
    handleLogout
  };
};
