import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

export interface Bulletin {
  id: string;
  title: string;
  description: string | null;
  date: string;
  file_url: string;
  file_name: string;
  created_at: string;
}

export const useBulletins = () => {
  const [bulletins, setBulletins] = useState<Bulletin[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchBulletins = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('bulletins')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setBulletins(data || []);
    } catch (error) {
      console.error('Error fetching bulletins:', error);
      toast({
        variant: "destructive",
        title: "Failed to load bulletins",
        description: "Please try refreshing the page."
      });
    } finally {
      setLoading(false);
    }
  };

  const uploadBulletin = async (
    file: File, 
    title: string, 
    description: string, 
    date: string
  ) => {
    try {
      // Upload file to storage
      const fileName = `${Date.now()}-${file.name}`;
      const { data: storageData, error: storageError } = await supabase.storage
        .from('bulletins')
        .upload(fileName, file);

      if (storageError) throw storageError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('bulletins')
        .getPublicUrl(fileName);

      // Save bulletin metadata to database
      const { data, error } = await supabase
        .from('bulletins')
        .insert({
          title,
          description: description || null,
          date,
          file_url: publicUrl,
          file_name: fileName
        })
        .select()
        .single();

      if (error) throw error;

      setBulletins(prev => [data, ...prev]);
      
      toast({
        title: "Bulletin uploaded successfully",
        description: `${title} has been uploaded and is now available.`
      });

      return data;
    } catch (error) {
      console.error('Error uploading bulletin:', error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        description: "Failed to upload bulletin. Please try again."
      });
      throw error;
    }
  };

  const deleteBulletin = async (bulletinId: string, fileName: string) => {
    try {
      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from('bulletins')
        .remove([fileName]);

      if (storageError) {
        console.error('Storage deletion error:', storageError);
        // Continue with database deletion even if storage fails
      }

      // Delete from database
      const { error } = await supabase
        .from('bulletins')
        .delete()
        .eq('id', bulletinId);

      if (error) throw error;

      setBulletins(prev => prev.filter(b => b.id !== bulletinId));
      
      toast({
        title: "Bulletin deleted",
        description: "The bulletin has been removed successfully."
      });
    } catch (error) {
      console.error('Error deleting bulletin:', error);
      toast({
        variant: "destructive",
        title: "Delete failed",
        description: "Failed to delete bulletin. Please try again."
      });
    }
  };

  useEffect(() => {
    fetchBulletins();
  }, []);

  return {
    bulletins,
    loading,
    uploadBulletin,
    deleteBulletin,
    refetch: fetchBulletins
  };
};