"use client";
import React from "react";
import { SearchBar } from "../components";
import { CarCard } from "@/app/components";

import { UseAppContext } from "../context/Store";
const Render: React.FC = () => {
  
  const {cars} = UseAppContext()

  return (
    <div>
      <SearchBar />
      <div className="w-full">
        {
          <div className="grid gap-[10px] grid-cols-[repeat(auto-fit,_minmax(300px,_200px))]  justify-center">
            {cars?.map((item: any) => (
              <CarCard key={item.id} car={item} />
            ))}
          </div>
         }
      </div>
    </div>
  );
};

export default Render;
