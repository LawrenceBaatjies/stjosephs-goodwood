
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Newsletter } from "@/components/newsletter/types";
import { useToastNotification } from "./useToastNotification";

export const useNewsletterDatabase = () => {
  const [newsletters, setNewsletters] = useState<Newsletter[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { success, error } = useToastNotification();

  useEffect(() => {
    loadNewsletters();
  }, []);

  const loadNewsletters = async () => {
    try {
      setIsLoading(true);
      const { data, error: fetchError } = await supabase
        .from("newsletters")
        .select("*")
        .order("date", { ascending: false });

      if (fetchError) {
        console.error("Error loading newsletters:", fetchError);
        error({
          title: "Failed to load newsletters",
          description: "Please try again later."
        });
        return;
      }

      if (data) {
        const formattedNewsletters: Newsletter[] = data.map(item => ({
          id: item.id,
          title: item.title,
          date: item.date,
          fileUrl: item.file_path,
          description: item.description || "",
          thumbnailUrl: item.thumbnail_path || undefined
        }));
        setNewsletters(formattedNewsletters);
      }
    } catch (err) {
      console.error("Error in loadNewsletters:", err);
      error({
        title: "Something went wrong",
        description: "Failed to retrieve newsletters."
      });
    } finally {
      setIsLoading(false);
    }
  };

  const uploadNewsletter = async (formData: {
    title: string;
    date: string;
    fileUrl: string;
    description: string;
    thumbnailUrl?: string;
  }) => {
    try {
      const { data, error: insertError } = await supabase
        .from("newsletters")
        .insert({
          title: formData.title,
          date: formData.date,
          file_path: formData.fileUrl,
          description: formData.description,
          thumbnail_path: formData.thumbnailUrl || null,
        })
        .select();

      if (insertError) {
        console.error("Error uploading newsletter:", insertError);
        error({
          title: "Failed to upload newsletter",
          description: insertError.message
        });
        return null;
      }

      success({
        title: "Newsletter uploaded",
        description: `"${formData.title}" has been successfully uploaded.`
      });

      await loadNewsletters();
      return data?.[0] || null;
    } catch (err) {
      console.error("Error in uploadNewsletter:", err);
      error({
        title: "Something went wrong",
        description: "Failed to upload newsletter."
      });
      return null;
    }
  };

  const updateNewsletter = async (id: string, updates: {
    title?: string;
    date?: string;
    fileUrl?: string;
    description?: string;
    thumbnailUrl?: string;
  }) => {
    try {
      const { error: updateError } = await supabase
        .from("newsletters")
        .update({
          title: updates.title,
          date: updates.date,
          file_path: updates.fileUrl,
          description: updates.description,
          thumbnail_path: updates.thumbnailUrl || null,
        })
        .eq("id", id);

      if (updateError) {
        console.error("Error updating newsletter:", updateError);
        error({
          title: "Failed to update newsletter",
          description: updateError.message
        });
        return false;
      }

      success({
        title: "Newsletter updated",
        description: `The newsletter has been successfully updated.`
      });

      await loadNewsletters();
      return true;
    } catch (err) {
      console.error("Error in updateNewsletter:", err);
      error({
        title: "Something went wrong",
        description: "Failed to update newsletter."
      });
      return false;
    }
  };

  const deleteNewsletter = async (id: string) => {
    try {
      const { error: deleteError } = await supabase
        .from("newsletters")
        .delete()
        .eq("id", id);

      if (deleteError) {
        console.error("Error deleting newsletter:", deleteError);
        error({
          title: "Failed to delete newsletter",
          description: deleteError.message
        });
        return false;
      }

      success({
        title: "Newsletter deleted",
        description: "The newsletter has been successfully deleted."
      });

      await loadNewsletters();
      return true;
    } catch (err) {
      console.error("Error in deleteNewsletter:", err);
      error({
        title: "Something went wrong",
        description: "Failed to delete newsletter."
      });
      return false;
    }
  };

  return {
    newsletters,
    isLoading,
    loadNewsletters,
    uploadNewsletter,
    updateNewsletter,
    deleteNewsletter
  };
};
