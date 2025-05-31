
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { createClient } from '@supabase/supabase-js';

// Replace with your own Supabase URL and Anon Key
const supabaseUrl = 'https://vnaodoyejchqhczbsbbc.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY; // Make sure this environment variable is set
const supabase = createClient(supabaseUrl, supabaseKey);
async function loginUser(email, password) {
    // Sign in the user
    const { user, session, error } = await supabase.auth.signIn({
        email,
        password,
    });
    if (error) {
        console.error('Error logging in:', error);
        return;
    }
    console.log('User logged in:', user);
    // Store user login information in the database
    const { data, error: dbError } = await supabase
        .from('users')  // Ensure 'users' is the correct table name
        .insert([
            { email: email, last_login: new Date() }  // Adjust fields as necessary
        ])
        .select(); // Add .select() if you want to retrieve the inserted data
    if (dbError) {
        console.error('Error storing login info:', dbError);
    } else {
        console.log('Login info stored:', data);
    }
}
interface AdminLoginModalProps {
  open: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<void>;
  loading: boolean;
  error: string | null;
}

const AdminLoginModal = ({
  open,
  onClose,
  onLogin,
  loading,
  error
}: AdminLoginModalProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onLogin(email, password);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Admin Login</DialogTitle>
          <DialogDescription>
            Please enter your credentials to access the calendar management features.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
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
            />
          </div>

          <DialogFooter className="pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AdminLoginModal;
