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

/*
====================================
CREATE SEMUA DATA DI USER
====================================
*/

export async function CreatePesan(payload) {
  const { data, error } = await supabase
    .from("wedding")
    .insert([payload])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}


/*
====================================
HAPUS PESAN DI ADMIN
====================================

*/
export async function DeleteData(id) {
  const { error } = await supabase
    .from("wedding")
    .delete()
    .eq("id", id);

  if (error) throw error;

  return true;
}


/*
====================================
DELETE SEMUA DATA DI ADMIN
====================================
*/
export async function DeleteAllData() {
  const { error } = await supabase
    .from("wedding")
    .delete()
    .neq("id", 0);

  if (error) throw error;
}