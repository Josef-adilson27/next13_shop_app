"use client";

import React, { useEffect, useState } from "react";

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

type CustomInputProps = {
  state: string;
  setState: (Item: string) => void;
  handleFetch: () => void;
  data: string[];
  placeholder:string
 
};

const CustomInput: React.FC<CustomInputProps> = ({
  setState,
  state,
  data,
  handleFetch,
  placeholder,

}) => {

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    handleFetch();
  }, [state]);

  const select = (Item: string) => {
    setState(Item);
    setToggle(false);
  };

  const listRender = () => {
    return data?.map((item) => (
      <p className="hover:bg-orange-700 text-xl" onClick={() => select(item)}>
        {item}
      </p>
    ));
  };

  return (
    <div className="mx-2">
      <div className="flex items-left  bg-orange-600 w-[330px] max-sm:w-[290px] rounded-[30px] ">
        <input
          className="outline-none bg-slate-200 w-[300px]  max-sm:w-[260px] h-[30px]"
          type="text"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}        
          placeholder={placeholder}
        />
        <button onClick={() => setToggle(!toggle)}>
          {toggle ? arrowUp : arrowDown}
        </button>
      </div>
      <div className=" bg-slate-200 w-[300px] mb-1">{toggle && listRender()}</div>
    </div>
  );
};

export default CustomInput;
