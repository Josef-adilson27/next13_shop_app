"use client";
import Link from "next/link";
import { BaseButton } from "../styledComps/BaseButton";
import { useState } from "react";
import  MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {

  const [list] = useState(  [
    {title:'Где мы',url:'/sdf'},
    {title:'Подписка',url:'/'},
    {title:'Связаться с нами',url:'/'}
  ])

  const [mobileNavbarToggle, setMobileNavbarToggle] = useState(false);

  const BurgerMenu = (
    <div className="ml-[10px]">
      <div
        onClick={() => setMobileNavbarToggle(!mobileNavbarToggle)}
        className="hidden max-md:block   rounded "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
    </div>
  );

  return (
    <header className="w-full flex justify-center absolute z-10">
      <nav className=" relative w-[99.5%] h-[100px] max-md:h-[60px]  bg-blue-900  flex items-center  rounded-br-[30px] max-md:rounded-br-[20px]  rounded-bl-[30px] max-md:rounded-bl-[20px] justify-between ">
        {BurgerMenu}
        <MobileNavbar list={list} toggle={mobileNavbarToggle}/>
        <div className="flex items-center">
          <div className="flex justify-around items-center max-md:hidden text-white text-xl max-md:text-[16px]  w-[400px]">
          {
            list.map((item:any)=>(
              <Link href={item.url}>
              <h1 className="m-2">{item.title}</h1>
              </Link>
            ))
          }       

          </div>
          <button className="w-[100px] h-[30px] mx-2 rounded-[30px] bg-blue-700 ">
            Sign up
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
