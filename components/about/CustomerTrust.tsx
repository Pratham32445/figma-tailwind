import Image from "next/image";
import React from "react";

const CustomerTrust = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="absolute -top-8 -left-8 sm:-top-12 sm:-left-12 w-full h-full bg-gray-300 z-0"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/customer-trust.jpg"
              alt="Premium coal"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Why Customers Trust Us
          </h2>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            <li>Industry-Grade Testing & Certifications.</li>
            <li>Timely Dispatches from Verified Yards.</li>
            <li>Transparent Weight, Moisture & Quality Reports.</li>
            <li>Support for Custom Orders & OEM Packaging.</li>
            <li>Dedicated Support for Industrial Buyers.</li>
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-300 font-bold font-poppins">
            Why Customer Trust Us
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomerTrust;
