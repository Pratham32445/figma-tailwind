import Image from "next/image";
import React from "react";

const WhoAreYou = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="relative z-10 w-full h-full">
            <Image
              src="/coal-mines-full.png"
              alt="Premium coal"
              fill
              className="object-cover object-center shadow-md"
            />
          </div>
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Premium Coal Quality
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            We are a leading supplier of premium coal products, serving
            industries and households across the country. From high-grade
            thermal and coking coal to retail-ready domestic fuel, we bring you
            the right energy solution — on time, every time. With a strong
            logistics network, expert sourcing, and customizable delivery
            formats, we make coal buying seamless for factories, resellers, and
            homeowners alike.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoAreYou;
