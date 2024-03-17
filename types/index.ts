import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title:string,
    style?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType:'button'|'submit'
}

export interface SeacrhManufactureProp  {
    manufacture:string,
    setManufacture:( manufacture:string)=>void
}

export interface CarTypes {
city_mpg:number
class:string
combination_mpg:number
cylinders:number
displacement:number
drive:string
fuel_type:string
highway_mpg:number
make:string
model:string
transmission:string
year:number
img:string
}


