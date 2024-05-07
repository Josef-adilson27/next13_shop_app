'use client'
import Link from "next/link";
import React from 'react';

type MobileNavbarType = {
  list:any
  toggle:boolean
}

const MobileNavbar: React.FC<MobileNavbarType> = ({list,toggle}) =>{
 
  return(
      <div className={`
       [transition:all_1s]
        transform ${toggle?'translate-x-[0px]':'translate-x-[-210px]'}  
        absolute top-[62px] flex flex-col justify-around rounded-tr-[10px] rounded-br-[10px] w-[15 0px] h-[200px] bg-blue-900 text-white`}>       
         {
          list.map((item:any)=>(
            <Link href={item.url}>
            <h1 className="m-2">{item.title}</h1>
            </Link>
          ))
        }            
      </div>
  )
}

export default MobileNavbar;
