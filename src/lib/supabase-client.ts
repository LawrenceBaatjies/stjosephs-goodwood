
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if the required environment variables are set
if (!supabaseUrl || !supabaseKey) {
  console.error(
    'Missing Supabase environment variables. Please make sure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set in your environment variables.'
  );
  throw new Error('Supabase configuration is missing. Please check your environment variables.');
}

// Create a single supabase client for interacting with your database
export const supabase = createClient(supabaseUrl, supabaseKey);

// Export a function to check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return !!supabaseUrl && !!supabaseKey && 
         supabaseUrl !== 'https://placeholder-url.supabase.co' && 
         supabaseKey !== 'placeholder-key';
};
