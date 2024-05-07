"use client";

import React, { useEffect, useState,Dispatch  } from "react";
import { CarsModels } from "../../constants";
const arrowUp = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className="w-6 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4.5 15.75 7.5-7.5 7.5 7.5"
    />
  </svg>
);

const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    className="w-6 h-4"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

type MakeInputProps = {
  setModelList:Dispatch<[]>
  setMake:Dispatch<any>
};


const MakeInput: React.FC<MakeInputProps> = ({setModelList,setMake}) => {
  const TextHandle = (item:any)=>{
    setModelList([])
    setModelList(item.models)
    setMake(item.make)
  }

  const [state, setState] = useState('');
  const [toggle, setToggle] = useState(false);
 
  const listRender = () => {

 return(
  <div className="absolute max-xl:static bg-slate-200 my-1 h-auto  w-[270px] ">
    {
      CarsModels.map((item:any)=>(
        <p
        key={item.make}
        className="cursor-pointer px-1  text-xl"
        onClick={
          ()=>{
            TextHandle(item)
            setToggle(false)
            setState(item.make)
          }}
        >{item.make}</p>
      ))
    }   
  </div>
 )
};

  return (
    <div className="mx-2">
      <div className="flex items-left  bg-orange-600 w-[300px] my-1  rounded-[30px] ">
        <input
          className="outline-none pl-1 bg-slate-200 w-[270px]   h-[30px]"
          type="text"
          placeholder="Марка"
          value={state}
          onChange={(e) => {
          setState(e.target.value);
          }}               
        />
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? arrowUp : arrowDown}
        </button>
      </div>
      <div  >{toggle && listRender()}</div>
    </div>
  );
};

export default MakeInput;
