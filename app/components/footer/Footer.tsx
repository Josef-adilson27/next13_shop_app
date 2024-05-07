import Image from "next/image";
import { footerLinks } from "../../constants";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer
      className="
    relative 
    flex 
    p-5
    items-center   
     bg-blue-900 
    mx-1  
    rounded-tl-[30px]
    rounded-tr-[30px]
    max-md:rounded-tl-[20px]
    max-md:rounded-tr-[20px]"
    >
      <div className="w-full flex justify-center  max-md:flex-col">
        {footerLinks.map((Tiles) => (
          <div key={Tiles.title} className="w-full  ">
            {/*заголовок */}
            <h1 className="text-2xl  font-semibold mt-3">{Tiles.title}</h1>
            {/* дочерние элементы из footerLinks */}
            {Tiles.links.map((Links) => (
              <div className=" ">
                <Link key={Links.title} href={Links.url}>
                  <div className="">
                    <p className="">{Links.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
