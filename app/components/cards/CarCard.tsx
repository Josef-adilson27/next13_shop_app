"use client";
import { CarTypes } from "@/types";
type CarProps = { car: CarTypes };
import { calculateCarRent } from "@/app/utils";
import Image from "next/image";

import { useState } from "react";
import { CarDetails } from "..";

const CarCard = ({ car }: CarProps) => {
  const carRent = calculateCarRent(car.city_mpg, car.year);
  const [isOpen, setIsOpen] = useState(false);

  return (
    // card main image
    <div className="flex flex-col items-center w-[400px]  m-1 bg-slate-300 ">
      <div className="w-[120px] ">
        <div className="flex items-end m-1">
          <h1 className="text-2xl ">$</h1>
          <h1 className="bg-orange-600 ml-1 text-xl w-[30px] h-[30px] rounded-[200px] flex justify-center items-center">
            {carRent}
          </h1>
          <h1 className="ml-1">per day</h1>
        </div>
      </div>

      <div className="flex">
        <h2 className="px-2 text-xl">
          {car.make.split("")[0].toUpperCase() + car.make.slice(1)}
        </h2>
        <h2 className="px-2 text-xl">
          {car.model.split("")[0].toUpperCase() + car.model.slice(1)}
        </h2>
      </div>

      <div className="w-full h-[200px] flex items-center justify-center">
        <Image
          width={300}
          height={0}
          src={car.img}
          alt="product image"
          className=""
        />
      </div>

      {/* cart logos div */}
      <div className="w-full h-[80px] flex justify-around  ">
        <div className="w-[80px]  flex flex-col items-center justify-around  pt-1">
          <Image
            width={40}
            height={30}
            src="/transmission.png"
            alt=""
            className=""
          />
          <p>{car.transmission === "a" ? "Automatic" : "Manual"}</p>
        </div>

        <div className="w-[80px] flex flex-col justify-around  items-center pt-1">
          <Image width={40} height={30} src="/gear.png" alt="" className="" />
          <p>{car.drive.toUpperCase()}</p>
        </div>

        <div className="w-[80px] flex flex-col justify-around items-center pt-1">
          <Image width={40} height={30} src="/fuel.png" alt="" className="" />
          <p>{car.city_mpg} MPG</p>
        </div>
      </div>

      {/* rent button  */}
      <div className="w-full flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="w-[130px] my-2 h-[30px] rounded-[30px] bg-blue-700 "
        >
          Подробнее
        </button>
      </div>


      {/* при нажати кнопки 'Подробнее' в CarDetails передается объект car (т.е данные о конкретной машине) */}
      {/* modal window */}
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
