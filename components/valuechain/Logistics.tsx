import Image from "next/image";
import React from "react";

const Logistics = () => {
  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-poppins">
            Logistics & Handling
          </h2>
          <p className="font-poppins font-medium">
            Our logistics operations are designed for scale and speed. From bulk
            dispatches to packaged deliveries, we ensure safe and timely
            transport using dedicated fleets and regional hubs.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            <li>End-to-end logistics (road, rail, port-based).</li>
            <li>Real-time tracking & dispatch visibility.</li>
            <li>Support for custom delivery timelines</li>
          </p>
        </div>
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto aspect-square">
          <div className="absolute -top-8 -right-8 sm:-top-12 sm:-right-12 w-full h-full bg-gray-300 z-0"></div>
          <div className="relative z-10 w-full h-full">
            <Image
              src="/reach.jpg"
              alt="Coal mining operation showing unique market positioning"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logistics;
