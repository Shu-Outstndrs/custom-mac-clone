import { Database } from "../../../schema";
import { getAllData } from "../../../utils/supabaseFunc";
import { HomeApp } from "./HomeApp";

export const getData = async () => {
  const data: Database["public"]["Tables"]["productData"]["Row"][] | null =
    await getAllData();
  if (data) {
    return data;
  }
};

export const GetData = async () => {
  const allData = await getData();

  return <HomeApp allData={allData} />;
};
