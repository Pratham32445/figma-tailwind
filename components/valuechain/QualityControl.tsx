import Image from "next/image";
import React from "react";

const QualityControl = () => {
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
            Quality Control & Transparency
          </h2>
          <p>
            At every stage, we prioritize data-backed assurance. Each order is
            accompanied by technical sheets, weight certificates, and quality
            documentation — ensuring full traceability and trust.
          </p>
          <p className="text-sm sm:text-base leading-relaxed mb-6 max-w-prose mx-auto md:mx-0 font-poppins font-medium">
            <li>Lab-tested product reports.</li>
            <li>Batch-wise certification.</li>
            <li>Transparent moisture, ash & GCV data.</li>
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-300 font-bold font-poppins">
             Quality Control & <br/> Transparency
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityControl;
