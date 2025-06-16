import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";


const GeoGraphicReach = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Unique positioning in the market
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            we bridge the gap between premium coal sourcing and reliable
            industrial logistics. Unlike traditional suppliers, our strength
            lies in delivering customized coal solutions, real-time tracking,
            and consistently high-grade supply—all while maintaining competitive
            pricing. Our commitment to transparency, quality assurance, and
            responsive customer service makes us a preferred partner for
            industries that cant afford downtime or inconsistency. From mine to
            market, we operate with precision and purpose.
          </p>
          <a
            href="#"
            className="text-red-600 font-medium flex items-center gap-2 justify-center md:justify-start hover:underline transition"
          >
            Read More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 w-full h-full bg-gray-300 z-0"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/position.avif"
              alt="Coal mining operation showing unique market positioning"
              fill
              className="object-cover object-center shadow-md filter grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoGraphicReach;
