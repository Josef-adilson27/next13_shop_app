"use client";
import { Fragment } from "react";
import { CarTypes } from "@/types";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

const closrIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="25"
    height="30"
    viewBox="0 0 50 50"
  >
    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
  </svg>
);

type CarDetailsProps = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarTypes;
};
const CarDetails: React.FC<CarDetailsProps> = ({ isOpen, closeModal, car }) => {
    
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModal} className="z-10">
          <Transition.Child
            as={Fragment}
            enter="easy-out duration-200"
            enterFrom="opacity-100"
            leave="easy-in duration-200"
            leaveTo="opacity-0"
          >
            <div className="bg-[rgba(2,_3,_8,_0.6)] flex items-center justify-center w-full h-full  fixed inset-0 ">
              <div className="flex flex-col w-[400px] h-auto bg-slate-200 rounded-[10px] [box-shadow:-16px_17px_9px_-14px_rgba(0,0,0,1)]">
                <div className="w-fll  flex justify-end p-1">
                  <button onClick={closeModal}>{closrIcon}</button>
                </div>

                <div className="flex justify-center ">
                  <Image src={car.img} width={300} height={300} alt="" />
                </div>

               

                <div className="w-full p-2">

                  <div className="flex w-full items-center justify-center p-1 ">     
                      <h2 className="px-2 text-2xl">{car.make.split('')[0].toUpperCase() + car.make.slice(1)}</h2>
                      <h2 className="px-2 text-2xl">{car.model.split('')[0].toUpperCase() + car.model.slice(1)}</h2> 
                  </div>

                  <div className="flex justify-between p-1">
                    <p>City Mpg</p>
                    {car.city_mpg}
                  </div>

                  <div className="flex justify-between p-1">
                    <p>Class</p>
                    {car.class}
                  </div>

                  <div className="flex justify-between p-1">
                    <p>Combination Mpg</p>
                    {car.combination_mpg}
                  </div>

                  <div className="flex justify-between p-1">
                    <p>Cylindres</p>
                    {car.cylinders}
                  </div>

                  <div className="flex justify-between p-1">
                    <p>Displacement</p>
                    {car.displacement}
                  </div>

                  <div className="flex justify-between p-1">
                    <p>Drive</p>
                    {car.drive}
                  </div>

                  <div className="flex justify-between p-1">
                    <p>Fuel type</p>
                    {car.fuel_type}
                  </div>

                  <div className="flex justify-between p-1">
                    <p>Highway Mpg</p>
                    {car.highway_mpg}
                  </div>

                  <div className="flex justify-between px-1">
                    <p>Transmition</p>
                    {car.transmission}
                  </div>

                  <div className="flex justify-between px-1">
                    <p>Year</p>
                    {car.year}
                  </div>
                </div>

              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
