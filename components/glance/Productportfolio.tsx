import Image from "next/image";
import React from "react";

const Productportfolio = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-full h-full bg-gray-300 z-0"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/product-portfolio.png"
              alt="Premium coal"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Product Portfolio
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            {" "}
            We supply a wide range of coal products tailored to industrial and
            domestic needs:
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            <li>Thermal Coal (High & Medium GCV).</li>
            <li>Coking & Metallurgical Coal</li>
            <li>Anthracite, Steam, and ROM Coa</li>
            <li>Low Ash / Low Moisture / Low Sulfur Variants</li>
            <li>Custom Packaging: Bulk, Jumbo Bags, 50kg/25kg</li>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Productportfolio;
