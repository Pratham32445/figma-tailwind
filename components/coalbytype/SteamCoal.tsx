import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SteamCoal = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
             Steam Coal
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            Efficient & economical for small industries.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            <li>Medium GCV, cost-effective</li>
            <li>Best for: Brick kilns, agro industries</li>
          </p>
          <Link
            href="#"
            className="text-red-600 font-medium flex items-center gap-2 justify-center md:justify-start hover:underline transition"
          >
            View Product
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 w-full h-full bg-gray-300 z-0"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/steam.jpg"
              alt="Coal mining operation showing unique market positioning"
              fill
              className="object-cover object-center shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteamCoal;
