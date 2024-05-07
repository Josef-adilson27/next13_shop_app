"use client";
import { createContext, useContext, useState } from "react";
import { useGetCars } from "../utils/useGetCars";

const AppContext = createContext({
  cars:[],
  setCars:(e:any)=>{}
});

export function AppWrapper({ children }: { children: React.ReactNode }) {

  const [cars,setCars] = useState([]);
  
  return (
    <AppContext.Provider value={{cars,setCars}}>
      {children}
    </AppContext.Provider>
  );
}

export function UseAppContext() {
  return useContext(AppContext);
}
