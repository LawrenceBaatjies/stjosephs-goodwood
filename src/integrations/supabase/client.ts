// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://vnaodoyejchqhczbsbbc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuYW9kb3llamNocWhjemJzYmJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MjUyMTAsImV4cCI6MjA2MTEwMTIxMH0.G2RgIKioqT9T6d1jjdbtrzE-DqMztYsPuVB4sxW9FL8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);