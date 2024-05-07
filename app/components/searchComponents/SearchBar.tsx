"use client";
import { useState } from "react";
import MakeInput from "../searchComponents/MakeInput";
import { useGetCars } from "../../utils/useGetCars";
import ModelInput from "../searchComponents/ModelInput";
import Fuelinput from "../searchComponents/Fuelinput";

const SearchBar: React.FC<any> = () => {
  //по умолчанию костомный хук useGetCars получает ВСЕ авто
  //при передаче данных из стейтов useGetCars меняется
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [fuel, setFuel] = useState("");
  const [modelList, setModelList] = useState([]);

  useGetCars(make, model, fuel);

  console.log(make, model, fuel);

  return (
    <div className="flex flex-wrap font-sans justify-left w-full max-sm:justify-center">
      <MakeInput setMake={setMake} setModelList={setModelList} />

      <ModelInput setModel={setModel} data={modelList} />
      <Fuelinput setFuel={setFuel} />
    </div>
  );
};

export default SearchBar;
