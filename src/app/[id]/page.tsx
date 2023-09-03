import { getData } from "@/components/home/getData";
import { Database } from "../../../schema";
import { error } from "console";
import { searchData } from "../../../utils/supabaseFunc";

export default async function Product({ params }: { params: { id: string } }) {
  const searchedData = await searchData(params.id);

  if (searchedData) {
    return (
      <main className="h-screen">
        <div>
          {params.id} {searchedData.name}
        </div>
      </main>
    );
  } else {
    return <>エラー:404Not Found</>;
  }
}
