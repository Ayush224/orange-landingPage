import Navbar from "./Navbar";
import img from "../assets/orange.png";
import { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Hero = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="container mx-auto p-10 bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] rounded-2xl h-full shadow-md text-white relative">
      <Navbar sidebar={sidebar} setSidebar={setSidebar} />
      <div className="place-items-center grid grid-cols-1 md:grid-cols-2 h-full mt-[70px] md:mt-0">
        <div className="space-y-7">
          <i className="uppercase text-2xl block" data-aos="fade-up">
            Oranges Theory
          </i>
          <p
            className="uppercase text-5xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            A healthy food
          </p>
          <i className="block" data-aos="fade-up" data-aos-delay="600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
            repellat expedita! Molestias repellat sed id facere dicta excepturi,
            minima officiis?
          </i>
          <button
            className="border rounded-2xl h-10 w-25"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            Buy Me!
          </button>
        </div>
        <div>
          <img
            src={img}
            alt="orange"
            className="sm:w-100 lg:w-full h-auto z-[1] img-shadow"
            data-aos="zoom-in"
          />
        </div>
      </div>
      <div
        className="text-3xl md:text-6xl lg:text-8xl w-full absolute bottom-5 md:ml-14 lg:ml-15 xl:ml-35 ml-10 text-amber-100"
        data-aos="zoom-out"
      >
        Keeps You Hydrated
      </div>
      {sidebar && (
        <div className="absolute right-0 top-0 h-full bg-gradient-to-b from-amber-500 to-amber-600 w-30 rounded-xl">
          <div className="flex flex-col items-center w-full h-full justify-center gap-5 ">
            <div className="w-[1px] h-[70px] bg-white"></div>
            <div className="flex flex-col gap-5">
              <Facebook className="border inline-block h-10 w-10 p-2 rounded-full" />
              <Twitter className="border inline-block h-10 w-10 p-2 rounded-full" />
              <Instagram className="border inline-block h-10 w-10 p-2 rounded-full" />
            </div>
            <div className="w-[1px] h-[70px] bg-white"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
