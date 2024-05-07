import { Hero } from "./components";
import Render from "./components/Render";

export default function Home() {
  return (
    <main className="">
      
      <Hero />
      <div className="w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl">Каталог авто</h1>
          <p className="text-2xl">Возможно вам понравятся</p>
        </div>
        <div className="w-full min-h-[300px] ">
          <Render/>
        </div>
      </div>
  
    </main>
  );
}
