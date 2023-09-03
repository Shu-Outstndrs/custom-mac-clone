"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Gallery } from "./Gallery";
import { List } from "./List";
import { getAllData } from "../../../utils/supabaseFunc";
import { Database } from "../../../schema";

export const HomeApp = ({
  allData,
}: {
  allData: Database["public"]["Tables"]["productData"]["Row"][] | undefined;
}) => {
  const [isList, setIsList] = useState<boolean>(false);

  const handleClick = () => {
    setIsList(!isList);
  };

  return (
    <>
      <button onClick={handleClick}>change</button>
      <ul className="mx-auto w-[48rem]">
        {allData!.map((data) => {
          return isList ? (
            <li key={data.id} className="mb-2">
              <List data={data} />
            </li>
          ) : (
            <p key={data.id}>多分ギャラリー</p>
          );
        })}
      </ul>
    </>
  );
};
