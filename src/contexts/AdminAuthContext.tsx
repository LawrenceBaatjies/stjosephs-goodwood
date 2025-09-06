import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface AdminUser {
  id: string;
  email: string;
}

interface AdminAuthContextType {
  user: AdminUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Initialize admin user if none exists
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

      if (!existingAdmins || existingAdmins.length === 0) {
        const { error: insertError } = await supabase
          .from("admin_users")
          .insert([
            {
              email: "admin@parish.com",
              password_hash: "admin123"
            }
          ]);

        if (insertError) {
          console.error("Error creating default admin user:", insertError);
        }
      }
    } catch (error) {
      console.error("Error initializing admin user:", error);
    }
  };

  const login = async (email: string, password: string): Promise<boolean> => {
    setLoading(true);
    
    try {
      const { data: adminUsers, error: queryError } = await supabase
        .from("admin_users")
        .select("*")
        .eq("email", email);

      if (queryError) {
        console.error("Error querying admin users:", queryError);
        toast({
          variant: "destructive",
          title: "Login failed",
          description: "Please try again."
        });
        return false;
      }

      if (!adminUsers || adminUsers.length === 0) {
        toast({
          variant: "destructive",
          title: "Invalid credentials",
          description: "Email or password is incorrect."
        });
        return false;
      }

      const adminUser = adminUsers[0];
      
      if (password === adminUser.password_hash) {
        const userObj: AdminUser = {
          id: adminUser.id,
          email: adminUser.email
        };
        
        setUser(userObj);
        localStorage.setItem('admin_user', JSON.stringify(userObj));
        
        toast({
          title: "Login successful",
          description: "You now have admin access."
        });
        return true;
      } else {
        toast({
          variant: "destructive",
          title: "Invalid credentials",
          description: "Email or password is incorrect."
        });
        return false;
      }
    } catch (error) {
      console.error("Error in admin login:", error);
      toast({
        variant: "destructive",
        title: "Login failed",
        description: "An error occurred. Please try again."
      });
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('admin_user');
    toast({
      title: "Logged out",
      description: "You have been logged out successfully."
    });
  };

  useEffect(() => {
    initializeAdminUser();
    
    // Check for existing session
    const storedUser = localStorage.getItem('admin_user');
    if (storedUser) {
      try {
        const userObj = JSON.parse(storedUser);
        setUser(userObj);
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem('admin_user');
      }
    }
  }, []);

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};