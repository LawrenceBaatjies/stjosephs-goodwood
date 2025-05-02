
import React from "react";
import { useNewsletterContext } from "./NewsletterContext";
import NewsletterAdminForm from "./NewsletterAdminForm";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Lock, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const NewsletterAdmin = () => {
  const {
    isAdminMode,
    isAuthenticated,
    formData,
    handleChange,
    handleFileChange,
    handleSubmit,
    resetForm,
    selectedNewsletter,
    uploadMethod,
    setUploadMethod,
    showLoginModal,
    setShowLoginModal,
    handleLogin,
    authError,
    isUploading
  } = useNewsletterContext();

  if (!isAdminMode) return null;
  
  if (!isAuthenticated) {
    return (
      <div className="mb-8 bg-white p-6 rounded-lg shadow-md text-center">
        <Lock size={40} className="mx-auto text-gray-400 mb-3" />
        <h3 className="text-xl font-semibold mb-2">Admin Access Required</h3>
        <p className="text-gray-600 mb-4">
          You need to log in as an admin to manage newsletters.
        </p>
        <Button onClick={() => setShowLoginModal(true)}>
          Admin Login
        </Button>
        
        <AdminLoginDialog 
          open={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
          error={authError}
        />
      </div>
    );
  }

  return (
    <NewsletterAdminForm
      formData={formData}
      handleChange={handleChange}
      handleFileChange={handleFileChange}
      handleSubmit={handleSubmit}
      resetForm={resetForm}
      selectedNewsletter={selectedNewsletter}
      uploadMethod={uploadMethod}
      setUploadMethod={setUploadMethod}
      isUploading={isUploading}
    />
  );
};

interface AdminLoginDialogProps {
  open: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<void>;
  error: string | null;
}

const AdminLoginDialog = ({ open, onClose, onLogin, error }: AdminLoginDialogProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    await onLogin(email, password);
    setIsLoggingIn(false);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Admin Login</DialogTitle>
          <DialogDescription>
            Please enter your admin credentials to manage newsletters.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit}>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
          </div>
          
          <DialogFooter className="mt-6">
            <Button type="button" variant="outline" onClick={onClose} disabled={isLoggingIn}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoggingIn}>
              {isLoggingIn ? "Logging in..." : "Login"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewsletterAdmin;
