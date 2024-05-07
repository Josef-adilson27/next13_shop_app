"use client";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="mt-[100px] w-full h-auto font-bold">
      <div className="flex flex-col items-center">
   
        <h1 className="text-3xl m-4 max-sm:text-xl">
          Найди и выбери авто быстро и легко.
        </h1>
        <h1 className="text-2xl m-4 max-sm:text-[15px]">
          А так же сервис все иномарок от японии до США.{" "}
        </h1>
     
      </div>

      <div className="w-full flex justify-around flex-wrap mt-6">
        <Image
         
          src={"/tayota.png"}
          width={400}
          height={200}
          alt="car-img"
        />

        <Image
         
          src={"/vesta3.png"}
          width={400}
          height={200}
          alt="car-img"
        />
        <Image
          
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
