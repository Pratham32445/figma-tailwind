import Image from "next/image";
import React from "react";
import BulkCard from "../BulkCard";

const CoalHero = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 z-0">
        <Image
          src="/products-hero.jpg"
          alt="Coal mining background"
          fill
          className="object-cover object-center rounded-b-[250px]"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-b-[250px]" />
        <div
          className="absolute top-0 w-full h-[127px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.60) 0%, rgba(153, 153, 153, 0.00) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative p-4">
        <p className="font-poppins text-white text-2xl font-bold">
          Latest Deals:
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <h1
          style={{ textShadow: "12px 12px 28.5px rgba(0, 0, 0, 0.39)" }}
          className="font-black-han-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 sm:mb-12 leading-tight"
        >
          <span className="block">Choose Coal by Energy,</span>
          <span className="block">Ash & Moisture</span>
        </h1>

        <p
          className="text-white text-justify text-md md:text-[24px] lg:text-[30px] xl:text-[36px] font-bold font-poppins leading-normal"
          style={{ textShadow: "4px 4px 9.2px #000" }}
        >
          Browse our coal offerings based on key quality indicators like Gross
          Calorific Value (GCV), moisture content, ash percentage, and sulfur —
          ideal for power, steel, and domestic applications.
        </p>
      </div>

      <div className="absolute w-full bottom-[-50px]">
        <div className="max-w-5xl flex items-center mx-auto">
          <BulkCard title="Browse by Application" />
          <BulkCard title="Request a Quote" coalImage="/mining.jpg" />
        </div>
      </div>
    </section>
  );
};

export default CoalHero;
