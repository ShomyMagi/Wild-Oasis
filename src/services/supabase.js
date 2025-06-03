import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mjbfegqecgzjnpcscujt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qYmZlZ3FlY2d6am5wY3NjdWp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyMTIyNjgsImV4cCI6MjA2Mjc4ODI2OH0.lX1oqQ1ACzPxY7GkeLz90BsduW__N2_bzBvF1mNlw90";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
