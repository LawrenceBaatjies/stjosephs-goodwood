-- Add RLS policies for newsletters table
CREATE POLICY "Newsletters are viewable by everyone" ON public.newsletters
FOR SELECT USING (true);

CREATE POLICY "Anyone can insert newsletters" ON public.newsletters  
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update newsletters" ON public.newsletters
FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete newsletters" ON public.newsletters
FOR DELETE USING (true);

-- Add RLS policies for users table  
CREATE POLICY "Users are viewable by everyone" ON public.users
FOR SELECT USING (true);

CREATE POLICY "Anyone can insert users" ON public.users
FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can update users" ON public.users  
FOR UPDATE USING (true);

CREATE POLICY "Anyone can delete users" ON public.users
FOR DELETE USING (true);