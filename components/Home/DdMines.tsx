import React from "react";
import Image from "next/image";

const AboutDDMines = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative">
        <div className="w-full">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <Image
              src="/mining-bg.avif"
              alt="Mining Background"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 z-10">
          <div>
            <h2 className="text-sm text-gray-700 tracking-widest uppercase">About</h2>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
              DD<span className="font-bold">Mines</span>
            </h1>
            <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed max-w-prose">
              DD Mines is ideally positioned to fulfill the ever growing energy needs of our customers
              for the foreseeable future.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#FFCE26] to-[#EF4211] text-white font-semibold px-5 py-3 rounded-md w-fit hover:scale-105 transition">
            Watch our videos
          </button>
        </div>

        <div className="absolute bottom-[-80px] left-1/2 transform -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 w-[90%] sm:w-[60%] lg:w-[50%] h-[250px] sm:h-[300px] lg:h-[400px]">
          <Image
            src="/conveyor.avif"
            alt="Conveyor System"
            fill
            className="object-cover rounded-md shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutDDMines;
