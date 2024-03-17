import Image from "next/image";
import { footerLinks } from "../constants";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="
    relative 
    flex 
    p-5
    items-center   
    max-md:flex-col-reverse ">
      <div className="
      flex 
      flex-col 
      w-[200px] 
      items-center 
      mb-[80px]
      max-sm:mb-[120px] 
      ">
        <Image
          src="/AutoClubLogo.png"
          alt={"logo"}
          width={200}
          height={0}
         
        />
        <p className="w-[200px]  text-xl">AutoDeal</p>
        <p className="w-[200px]  text-xl">All right Reserved</p>
      </div>

      <div
        className=" 
        mb-[80px]
        text-2xl
        flex 
        w-full 
        justify-around 
        max-sm:flex-col  
        max-sm:items-right
        max-sm:w-[auto]
        max-md:mb-[20px]">

        {footerLinks.map((Tiles) => (
          <div key={Tiles.title} className="flex flex-col justify-start ">
            {/*заголовок */}
            <h1 className="text-2xl max-sm:text-3xl font-semibold mt-3">{Tiles.title}</h1>
            {/* дочерние элементы из footerLinks */}
            {Tiles.links.map((Links) => (
              <div className="w-full ">
                <Link key={Links.title} href={Links.url}>
                  <div className="">
                    <p className="">{Links.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
        <div
        className="
         p-2
         w-full
         absolute 
         right-0 
         bottom-1 
         flex justify-around
         text-xl
         max-sm:flex-col
         max-sm:items-center    
         ">
          <Link href="/">
            <p className=" max-sm:w-[200px] text-[15px]">2024 Auto Deal</p>
          </Link>
          <Link href="/">
            <p className=" max-sm:w-[200px] text-[15px]">Terma of use</p>{" "}
          </Link>
          <Link href="/">
            <p className=" max-sm:w-[200px] text-[15px]">All rights Reserved</p>{" "}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
