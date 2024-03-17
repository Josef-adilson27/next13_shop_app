'use client'

import Link from "next/link";
import Image from "next/image";
import { CustomButton } from ".";

const Navbar: React.FC = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="w-full flex items-center justify-between">
        <Link href="/">
          <Image
          src='/AutoClubLogo.jpg'
          alt={"logo"}
          width={200}
          height={200}   
          />
        </Link>

        <CustomButton
         title="Sign in"
         style="w-[100px] h-[40px] bg-[rgb(54,_50,_212)] rounded-[30px] text-[aliceblue] m-[5px]"
         handleClick={()=>{}}
         btnType="button"
        />

      </nav>
    </header>
  );
};

export default Navbar;
