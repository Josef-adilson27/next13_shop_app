"use client";
import React, { useState } from "react";
import { SearchBar } from "../components";
import { CarCard } from "@/app/components";
import { CarTypes } from "@/types";
import { useGetCars } from "../utils/useGetCars";
import { UseAppContext } from "../context/Store";
const Render: React.FC = () => {
  
  const {cars} = UseAppContext()

  return (
    <div>
      <SearchBar />
      <div className="w-full">
        {
          <div className="flex flex-wrap justify-around">
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
