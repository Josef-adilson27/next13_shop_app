
export const footerLinks = [
  {
    title: "About",
    links: [
      { title: "How it works", url: "/" },
      { title: "Featured", url: "/" },
      { title: "Partnership", url: "/" },
      { title: "Bussiness Relation", url: "/" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Events", url: "/" },
      { title: "Blog", url: "/" },
      { title: "Podcast", url: "/" },
      { title: "Invite a friend", url: "/" },
    ],
  },
  {
    title: "Socials",
    links: [
      { title: "Discord", url: "/" },
      { title: "Instagram", url: "/" },
      { title: "Twiter", url: "/" },
      { title: "Facebook", url: "/" },
    ],
  },
];

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
  lada: ["priora", "vesta", "x-ray"],
  dodge: ["challenger", "Durango", "RAM"],
};

//делаем заглавными все названия моделей авто
for (let key in CarsModels) {
    let man = CarsModels[key].map((item:string) => {
      return item.split("").slice(0, 1).join(" ").toUpperCase() + item.split('').slice(1).join('')
    });  
   
    CarsModels[key] = man;
}
  