"use client";
import React, { useState } from "react";
import { SearchBar } from "../components";
import { CarCard } from "@/app/components";
import { CarTypes } from "@/types";

const Render: React.FC = () => {
  const [data, setData] = useState<CarTypes[]>([]);


  return (
    <div>
      <SearchBar setData={setData} />
      <div className="w-full">
        {!!data.length ? (
          <div className="flex flex-wrap justify-around">
            {data?.map((item: any) => (
              <CarCard key={item.id} car={item} />
            ))}
          </div>
        ) : (
          <h1 className="text-center text-2xl mt-[100px]">
            "Ой... Мы не нашли такой машины у нас"
          </h1>
        )}
      </div>
    </div>
  );
};

export default Render;
