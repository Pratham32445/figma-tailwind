import React from "react";
import Image from "next/image";
import {  MoveRight } from "lucide-react";

const CoalQualitySection = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-full h-full bg-gray-300 z-0"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/coal-closeup.avif"
              alt="Premium coal"
              fill
              className="object-cover object-center shadow-md filter grayscale"
            />
          </div>
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Premium Coal Quality
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            At DD Mines, we specialize in the sourcing, processing, and delivery of premium-grade coal
            for industrial and commercial use. With years of expertise and a reputation built on integrity,
            we serve businesses with dependable logistics, strict quality controls, and tailored coal solutions.
          </p>
          <a
            href="#"
            className="text-red-600 font-medium flex items-center gap-2 justify-center md:justify-start hover:underline transition"
          >
            Read More
            <MoveRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CoalQualitySection;