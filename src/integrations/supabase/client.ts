// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = "https://ndqxfrmoqbqmoljtgwaf.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5kcXhmcm1vcWJxbW9sanRnd2FmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk3ODM5MTAsImV4cCI6MjA0NTM1OTkxMH0.y6NwXnXIvtedBVLVhGAIwfzISnkwCC6VQwXKRO7K7zw";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);