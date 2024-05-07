'use client'
import { useEffect, useState } from "react";

import { UseAppContext } from "../context/Store";

export function useGetCars(make: string | undefined, model: string | undefined, fuel: string | undefined) {

const [Data,setData] = useState([])

const {setCars} = UseAppContext()
 

let URL = 'http://localhost:3000/api/fetch'

if(make==='All'){
  model = ''
  fuel = ''
  URL = `http://localhost:3000/api/fetch`
}

if(make!=='All'&&model!=='All'){
  URL = `http://localhost:3000/api/fetch?make=${make}&model=${model}`
}

if(make!=='All'&&model=='All'){
  URL = `http://localhost:3000/api/fetch?make=${make}`
}

if(make!=='All'&&model!=='All'&&fuel!=='All'){
  URL = `http://localhost:3000/api/fetch?make=${make}&model=${model}&fuel=${fuel}`
}

if(make!=='All'&&model!=='All'&&fuel=='All'){
  URL = `http://localhost:3000/api/fetch?make=${make}&model=${model}`
}

if(make!=='All'&&model=='All'&&fuel!=='All'){
  URL = `http://localhost:3000/api/fetch?make=${make}&fuel=${fuel}`
}




///ложим даныые в контекст и оправляем в searchbar
 setCars(Data);
  useEffect(()=>{
   fetch(URL)
  .then(res1=>res1.json())
  .then(res=>setData(res))
},[make,model,fuel])
  return  Data
}

