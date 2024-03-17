import data from "./data.json";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const make = searchParams.get("make");
  const model = searchParams.get("model");
  const fuel = searchParams.get("fuel");

  if (make && model && fuel ) {
    let res1 = data.filter((item) => {
      return item.make.includes(make)
             && item.model.includes(model)
             && item.fuel_type.includes(fuel)
       ;
    });
    return Response.json(res1);
  }


 else if (make && model) {
    let res2 = data.filter((item) => {
      return item.make.includes(make)
            && item.model.includes(model);
    });
    return Response.json(res2);
  }

   else if (make) {
    let res3 = data.filter((item) => {
      return item.make.includes(make);
    });
    return Response.json(res3);
  }
  return Response.json(data);
}
