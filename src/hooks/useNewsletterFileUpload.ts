
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToastNotification } from "./useToastNotification";

export const useNewsletterFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const { success, error } = useToastNotification();

  const uploadFile = async (file: File, folder: string = "newsletters") => {
    if (!file) return null;
    
    try {
      setIsUploading(true);
      
      // Create a unique file name
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
      const filePath = `${folder}/${fileName}`;
      
      // Upload to Supabase Storage
      const { data, error: uploadError } = await supabase.storage
        .from(folder)
        .upload(filePath, file);

      if (uploadError) {
        console.error("Error uploading file:", uploadError);
        error({
          title: "File upload failed",
          description: uploadError.message
        });
        return null;
      }
      
      // Get public URL for the uploaded file
      const { data: publicURLData } = supabase.storage
        .from(folder)
        .getPublicUrl(data.path);
        
      success({
        title: "File uploaded",
        description: `${file.name} has been uploaded successfully.`
      });
      
      return publicURLData.publicUrl;
    } catch (err) {
      console.error("Error in uploadFile:", err);
      error({
        title: "Something went wrong",
        description: "Failed to upload file."
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };

  return {
    uploadFile,
    isUploading
  };
};
