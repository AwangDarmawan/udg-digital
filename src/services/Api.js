import { supabase } from "../lib/supabase";
export async function GetPesan() {
  const { data, error } = await supabase
    .from("wedding")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}