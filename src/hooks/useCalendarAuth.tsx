import { useState } from "react";
import { useAdminAuth, AdminUser } from "@/contexts/AdminAuthContext";

export type { AdminUser } from "@/contexts/AdminAuthContext";

export const useCalendarAuth = () => {
  const { user, loading: authLoading, login } = useAdminAuth();
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Admin login handler
  const handleAdminLogin = async (email: string, password: string) => {
    setLoading(true);
    setAuthError(null);
    
    const success = await login(email, password);
    if (success) {
      setShowLoginModal(false);
      setAuthError(null);
    } else {
      setAuthError("Invalid email or password.");
    }
    
    setLoading(false);
  };

  // Admin logout handler  
  const handleLogout = () => {
    const { logout } = useAdminAuth();
    logout();
  };

  return {
    user,
    loading: loading || authLoading,
    authError,
    showLoginModal,
    setShowLoginModal,
    handleAdminLogin,
    handleLogout,
    setLoading,
  };
};