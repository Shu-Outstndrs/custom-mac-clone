import { supabase } from "./supabase";

export const getAllData = async () => {
  const allData = await supabase.from("productData").select("*");
  return allData.data;
};

export const searchData = async (Identifier: string) => {
  const searchedData = await supabase
    .from("productData")
    .select()
    .eq("identifier", Identifier);
  return searchedData.data![0];
};
a;
