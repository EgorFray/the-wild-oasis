import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://buuxjvhzyqcjqyupkere.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1dXhqdmh6eXFjanF5dXBrZXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE4OTM2NDUsImV4cCI6MjA3NzQ2OTY0NX0.VLYjp8h_svtD7IiJlETlvXZNY7IQEB8_0EEnYn1NODM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
