"use client";
import { useContext } from "react";
import { CustomButton } from ".";
import Image from "next/image";


const click = () => {
  alert("da");
};




const Hero: React.FC = () => {
  return (
    <div className="mt-[80px] w-full h-auto font-bold">
      <div className="flex flex-col items-center">
   
     
      
        <h1 className="text-3xl m-4 max-sm:text-xl">
          Найди и выбери авто быстро и легко.
        </h1>
        <h1 className="text-2xl m-4 max-sm:text-[15px]">
          А так же сервис все иномарок от японии до США.{" "}
        </h1>
        {/* <CustomButton
          title="Buy car"
          style="w-[200px] h-[40px] bg-[rgb(54,_54,_212)] rounded-[30px] text-[aliceblue] m-[5px] text-[19px] font-semibold"
          handleClick={click}
          btnType="button"
        /> */}
      </div>

      <div className="w-full flex justify-around flex-wrap mt-6">
        <Image
          className="relative"
          src={"/tayota.png"}
          width={400}
          height={200}
          alt="car-img"
        />

        <Image
          className="relative"
          src={"/vesta3.png"}
          width={400}
          height={200}
          alt="car-img"
        />
        <Image
          className="relative"
          src={"/gmc.png"}
          width={400}
          height={200}
          alt="car-img"
        />
      </div>
    </div>
  );
};

export default Hero;
