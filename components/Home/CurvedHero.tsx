import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const HeroSection = () => {
  return (
    <section className="relative  min-h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/coal-bg.jpg"
          alt="Coal mining background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div
          className="absolute top-0 w-full h-[127px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(153, 153, 153, 0.00) 100%);",
          }}
        ></div>
      </div>

      <div className="relative p-4">
        <p className="font-poppins text-white text-2xl font-bold">
          Latest Deals:
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1
          className="font-black-han-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 sm:mb-12 leading-tight"
          style={{
            textShadow: "text-shadow: 12px 12px 28.5px rgba(0, 0, 0, 0.39)",
          }}
        >
          <span
            className="block"
            style={{ textShadow: "12px 12px 28.5px rgba(0, 0, 0, 0.39)" }}
          >
            Fueling Industries.
          </span>
          <span className="block">Driving Excellence!</span>
        </h1>

        <div className="flex items-start">
          <Button className="bg-gradient-to-b from-[#FFCE26] to-[#EF4211] font-poppins p-8 rounded-none text-xl">
            Contact us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <Image
          src="/vector.png"
          alt=""
          width={1200}
          height={120}
          className="w-full h-16 sm:h-24 md:h-32 object-cover object-top"
          priority
        />
      </div>
    </section>
  );
};

export default HeroSection;
