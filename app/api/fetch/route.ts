import data from "./data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const fuel = searchParams.get("fuel");

  //если make model fuel введены то отфильтруй их
  //также и с другими ниже..

  if (make && model && fuel) {
    return Response.json(
      data.filter((item) => {
        return (
          item.make.includes(make.toLowerCase()) &&
          item.model.includes(model.toLowerCase()) &&
          item.fuel_type.includes(fuel.toLowerCase())
        );
      })
    );
  } 
  else if (make && model) {
    return Response.json(
      data.filter((item) => {
        return (
        item.make.includes(make.toLowerCase()) && 
        item.model.includes(model.toLowerCase())
        )     
      })
    );
  } 
  else if (make && fuel) {
    return Response.json(
      data.filter((item) => {
        return (    
        item.make.includes(make.toLowerCase()) && 
        item.fuel_type.includes(fuel.toLowerCase())
        )      
      })
    );
  } 
  else if (make) {
    return Response.json(
      data.filter((item) => {
        return item.make.includes(make.toLowerCase());
      })
    );
  }


//вывод всех товаров по умолчанию
//если все переменные пусты ( из input полей)
  return Response.json(data);
}
