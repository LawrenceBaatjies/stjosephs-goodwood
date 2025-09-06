-- Add RLS policies for admin_users table
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;

-- Allow reading admin users (for login verification)
CREATE POLICY "Allow reading admin users" ON public.admin_users
FOR SELECT USING (true);

-- Allow inserting admin users (for future admin creation)
CREATE POLICY "Allow inserting admin users" ON public.admin_users
FOR INSERT WITH CHECK (true);