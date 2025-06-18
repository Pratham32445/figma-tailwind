import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ThermalCoal = () => {
  return (
    <section className="mt-12 w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-full h-full bg-gray-300 z-0"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/boil-coal.jpg"
              alt="Premium coal"
              fill
              className="object-cover object-center shadow-md"
            />
          </div>
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Thermal Coal
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            For power generation and industrial boilers.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            GCV: 5800–6500 kcal/kg <br /> Available as ROM, Washed, Screened{" "}
            <br /> Best for: Power plants, textile, cement, paper industry
          </p>
          <Link
            href="#"
            className="text-red-600 font-medium flex items-center gap-2 justify-center md:justify-start hover:underline transition"
          >
            View Product
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThermalCoal;
