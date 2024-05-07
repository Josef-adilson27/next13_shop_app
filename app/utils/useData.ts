

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
  


