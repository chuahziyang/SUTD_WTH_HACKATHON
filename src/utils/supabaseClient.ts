import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qeegygnsawzsrhnhxcug.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlZWd5Z25zYXd6c3Jobmh4Y3VnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwMzk0MjUsImV4cCI6MjAwODYxNTQyNX0.T-EAiw8UhyRojxSsr6TklPGwpLQZ6YU7XRYdEETYuqY";

// const supabaseUrl = "https://ocdonsxwuswfgxhbcdfk.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9jZG9uc3h3dXN3Zmd4aGJjZGZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMwNDkxNTksImV4cCI6MjAwODYyNTE1OX0.W1XHu4bORMB2vC2jtnORyBFbRY_iHfnNu5zs-ZDidlY";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
