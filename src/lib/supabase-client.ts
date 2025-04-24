
import { createClient } from '@supabase/supabase-js';

// Get Supabase URL and key from environment variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if the required environment variables are set
if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Missing Supabase environment variables. Please make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
  );
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  supabaseUrl || '',
  supabaseKey || ''
);
