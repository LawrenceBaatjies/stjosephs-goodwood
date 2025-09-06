-- Allow public access for bulletins uploads since we're using custom admin auth

-- Drop existing restrictive policies
DROP POLICY IF EXISTS "Authenticated users can upload bulletins" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update bulletins" ON storage.objects;  
DROP POLICY IF EXISTS "Authenticated users can delete bulletins" ON storage.objects;

-- Allow anyone to upload bulletins (controlled by admin UI)
CREATE POLICY "Anyone can upload bulletins" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'bulletins');

-- Allow anyone to update bulletins
CREATE POLICY "Anyone can update bulletins" ON storage.objects
  FOR UPDATE USING (bucket_id = 'bulletins');

-- Allow anyone to delete bulletins  
CREATE POLICY "Anyone can delete bulletins" ON storage.objects
  FOR DELETE USING (bucket_id = 'bulletins');