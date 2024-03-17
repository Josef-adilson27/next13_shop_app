
import { fetchCars } from ".";
 
import { useEffect, useState } from "react";
const carList: string[] = [
  "audi",
  "dodge",
  "lada",
  "porshe",
  "toyota",
];

carList.push("All");
carList.sort();


//экспорт  массива бренда авто с заглавными буквами
export const manufactures = carList.map((item) => {
    return item
    .split("")
    .slice(0,1)
    .join(" ")
    .toUpperCase() 
    +item.split('')
    .slice(1)
    .join('')
});
  
export const CarsModels: any = {
  audi: ["a3", "a4", "a5", "a7", "a8"],
  toyota: ["land cruiser", "camry", "carolla"],
  porshe: ["carrera", "panamera", "cayenne", "maccan"],
  lada: ["priora", "vesta", "kalina"],
  dodge: ["challenger", "Durango", "RAM"],
};

//делаем заглавными все названия моделей авто
for (let key in CarsModels) {
    let man = CarsModels[key].map((item:any) => {
      return item.split("").slice(0, 1).join(" ").toUpperCase() + item.split('').slice(1).join('')
    });
    CarsModels[key] = man;
}
const useData = () =>{

const [List, setList]:any = useState([]);
  
const cars = async ()=>{ 
  await fetchCars()
  .then(res=>res.map((item:any)=>{
    setList((cur:any)=>[...cur,item.make])
  }))
}

useEffect(()=>{
cars()
},[])


  return{
    List
  }
     
}

export default useData;