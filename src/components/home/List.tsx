/* eslint-disable @next/next/no-img-element */
import { Database } from "../../../schema";

export const List = ({
  data,
}: {
  data: Database["public"]["Tables"]["productData"]["Row"];
}) => {
  return (
    <div className="flex justify-between shadow-md rounded-lg p-4">
      <div className="flex flex-col">
        <div>
          <h1 className="text-2xl">{data.name}</h1>
          <p className="text-gray-600">{data.spec}</p>
        </div>
        <h2 className="mt-auto text-lg text-gray-600">¥{data.price}</h2>
      </div>
      <img src={data.img!} alt="製品画像" width={240} height={100} />
    </div>
  );
};
