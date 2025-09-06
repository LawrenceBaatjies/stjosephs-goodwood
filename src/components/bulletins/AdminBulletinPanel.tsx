import React, { useState } from 'react';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { AlertCircle, Upload, Plus } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';
import { useBulletins } from '@/hooks/useBulletins';

const AdminBulletinPanel = () => {
  const { user, login, logout, isAuthenticated, loading: authLoading } = useAdminAuth();
  const { toast } = useToast();
  const { uploadBulletin } = useBulletins();
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showUploadDialog, setShowUploadDialog] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  
  // Upload form state
  const [uploadForm, setUploadForm] = useState({
    title: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    
    const success = await login(loginForm.email, loginForm.password);
    if (success) {
      setShowLoginDialog(false);
      setLoginForm({ email: '', password: '' });
    } else {
      setLoginError('Invalid email or password');
    }
    
    setLoginLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setSelectedFile(file);
    } else {
      toast({
        variant: "destructive",
        title: "Invalid file type",
        description: "Please select a PDF file."
      });
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile) {
      toast({
        variant: "destructive",
        title: "No file selected",
        description: "Please select a PDF file to upload."
      });
      return;
    }

    setUploading(true);
    
    try {
      await uploadBulletin(
        selectedFile,
        uploadForm.title,
        uploadForm.description,
        uploadForm.date
      );
      
      // Reset form on success
      setUploadForm({
        title: '',
        description: '',
        date: new Date().toISOString().split('T')[0]
      });
      setSelectedFile(null);
      setShowUploadDialog(false);
      
      // Trigger page refresh to show new bulletin
      setTimeout(() => window.location.reload(), 1000);
    } catch (error) {
      // Error handling is done in the hook
    } finally {
      setUploading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="rounded-full bg-amber-100 p-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="font-medium text-amber-800">Admin Access Required</h3>
                <p className="text-sm text-amber-700">Login as admin to manage bulletins</p>
              </div>
            </div>
            <Button 
              onClick={() => setShowLoginDialog(true)}
              variant="outline"
              className="border-amber-300 text-amber-700 hover:bg-amber-100"
            >
              Admin Login
            </Button>
          </div>
        </div>

        {/* Login Dialog */}
        <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Admin Login</DialogTitle>
              <DialogDescription>
                Please enter your admin credentials to manage bulletins.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleLogin} className="space-y-4 py-4">
              {loginError && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{loginError}</AlertDescription>
                </Alert>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  value={loginForm.email}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="admin@parish.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  id="password" 
                  type="password" 
                  value={loginForm.password}
                  onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                  required
                />
              </div>
              <DialogFooter className="sm:justify-end">
                <Button type="button" variant="outline" onClick={() => setShowLoginDialog(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={loginLoading || authLoading}>
                  {loginLoading ? "Logging in..." : "Login"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </>
    );
  }

  return (
    <>
      <Card className="mb-6">
        <CardHeader className="bg-green-50">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-green-800">Admin Panel</CardTitle>
              <CardDescription className="text-green-600">
                Logged in as {user?.email}
              </CardDescription>
            </div>
            <div className="space-x-2">
              <Button 
                onClick={() => setShowUploadDialog(true)}
                className="bg-[#d4a760] hover:bg-[#c09550]"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Bulletin
              </Button>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Upload Dialog */}
      <Dialog open={showUploadDialog} onOpenChange={setShowUploadDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Upload New Bulletin</DialogTitle>
            <DialogDescription>
              Add a new PDF bulletin to the parish bulletins collection.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleUpload} className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="title">Bulletin Title</Label>
              <Input 
                id="title" 
                value={uploadForm.title}
                onChange={(e) => setUploadForm(prev => ({ ...prev, title: e.target.value }))}
                placeholder="Sunday Bulletin - Week of..."
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea 
                id="description" 
                value={uploadForm.description}
                onChange={(e) => setUploadForm(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Brief description of this bulletin..."
                rows={3}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input 
                id="date" 
                type="date"
                value={uploadForm.date}
                onChange={(e) => setUploadForm(prev => ({ ...prev, date: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="file">PDF File</Label>
              <div className="flex items-center space-x-2">
                <Input 
                  id="file" 
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  required
                />
                <Upload className="h-4 w-4 text-gray-400" />
              </div>
              {selectedFile && (
                <p className="text-sm text-green-600">Selected: {selectedFile.name}</p>
              )}
            </div>
            
            <DialogFooter className="sm:justify-end">
              <Button type="button" variant="outline" onClick={() => setShowUploadDialog(false)}>
                Cancel
              </Button>
              <Button type="submit" disabled={uploading || !selectedFile}>
                {uploading ? "Uploading..." : "Upload Bulletin"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AdminBulletinPanel;