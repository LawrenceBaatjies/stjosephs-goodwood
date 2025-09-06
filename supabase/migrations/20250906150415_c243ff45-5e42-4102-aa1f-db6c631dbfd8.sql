-- Create bulletins table
CREATE TABLE public.bulletins (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date DATE NOT NULL,
  file_url TEXT NOT NULL,
  file_name TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.bulletins ENABLE ROW LEVEL SECURITY;

-- Create policies for bulletins (public read, admin write)
CREATE POLICY "Bulletins are viewable by everyone" 
ON public.bulletins 
FOR SELECT 
USING (true);

CREATE POLICY "Authenticated users can insert bulletins" 
ON public.bulletins 
FOR INSERT 
WITH CHECK (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update bulletins" 
ON public.bulletins 
FOR UPDATE 
USING (auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete bulletins" 
ON public.bulletins 
FOR DELETE 
USING (auth.uid() IS NOT NULL);

-- Create storage bucket for bulletins
INSERT INTO storage.buckets (id, name, public) VALUES ('bulletins', 'bulletins', true);

-- Create policies for bulletin file uploads
CREATE POLICY "Bulletin files are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'bulletins');

CREATE POLICY "Authenticated users can upload bulletin files" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'bulletins' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can update bulletin files" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'bulletins' AND auth.uid() IS NOT NULL);

CREATE POLICY "Authenticated users can delete bulletin files" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'bulletins' AND auth.uid() IS NOT NULL);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
NEW.updated_at = now();
RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_bulletins_updated_at
BEFORE UPDATE ON public.bulletins
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();