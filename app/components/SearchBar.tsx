"use client";
import { useEffect, useState } from "react";
import { fetchFilteredCars } from "../utils";
import { fetchCars } from "../utils";
import CustomInput from "./CustomInput";
import { manufactures } from "../constants/index";
import { CarsModels } from "../constants/index";

const SearchBar: React.FC<any> = ({ setData }) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [modelList, setModelList] = useState([]);

  //отправляем запросы на сервер, и ложим ответ в стейты
  const handleFetch = async () => {
    setData(
      await fetchFilteredCars(
        make.toLowerCase(),
        model.toLowerCase(),
        fuel.toLowerCase()
      )
    );
  };

  //получаем все авто для редера
  const foo = async () => {
    setData(await fetchCars());
  };

  useEffect(() => {
    //если не All то рендери выбранные (модели,авто)
    if (make !== "All") {
      for (let key in CarsModels) {
        if (make.toLowerCase() === key.toLowerCase()) {
          setModelList(CarsModels[key]);
        }
      }
    }else if(model==='All'){
      setModel('')    
    }
    else{
      //если All то выведи все
      foo();
    }
  },[make, model]);

  return (
    <div className="flex flex-wrap justify-left w-full max-sm:justify-center ">
      <CustomInput
        data={manufactures}
        state={make}
        setState={setMake}
        handleFetch={handleFetch}
        placeholder={"Brand"}
      />

      <CustomInput
        data={modelList}
        state={model}
        setState={setModel}
        handleFetch={handleFetch}
        placeholder={"Model"}
      />

      <CustomInput
        data={["All", "Gas", "Petrol"]}
        state={fuel}
        setState={setFuel}
        handleFetch={handleFetch}
        placeholder={"Type of fuel"}
      />
      
    </div>
  );
};

export default SearchBar;
