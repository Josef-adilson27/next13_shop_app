

export async function fetchFilteredCars(carMake:string,carModel:string,fuel:string) {
  const response = await fetch(`http://localhost:3000/api/fetch?make=${carMake}&model=${carModel}&fuel=${fuel}`,
  {cache:'no-store'}
);
  const resuslt = await response.json();
  return resuslt;
}



export async function fetchCars() {

  let response = await fetch('http://localhost:3000/api/fetch',
   {cache:'no-store'}
   );
   const resuslt = await response.json();
   return resuslt;

}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Базовая цена аренды за сутки в долларах
  const mileageFactor = 0.1; // Дополнительная ставка за пройденную милю
  const ageFactor = 0.05; // Дополнительная ставка за год возраста автомобиля

  // Рассчет дополнительной ставки в зависимости от пробега и возраста
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Рассчет общей стоимости аренды за сутки
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

