-- Create RLS policies for bulletins storage bucket

-- Allow public read access to bulletins
CREATE POLICY "Public Access" ON storage.objects
  FOR SELECT USING (bucket_id = 'bulletins');

-- Allow authenticated users to insert bulletins
CREATE POLICY "Authenticated users can upload bulletins" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'bulletins' AND auth.role() = 'authenticated');

-- Allow authenticated users to update bulletins  
CREATE POLICY "Authenticated users can update bulletins" ON storage.objects
  FOR UPDATE USING (bucket_id = 'bulletins' AND auth.role() = 'authenticated');

-- Allow authenticated users to delete bulletins
CREATE POLICY "Authenticated users can delete bulletins" ON storage.objects
  FOR DELETE USING (bucket_id = 'bulletins' AND auth.role() = 'authenticated');