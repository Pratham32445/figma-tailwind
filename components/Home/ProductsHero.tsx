import Image from "next/image";
import React from "react";

const ProductsHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* <div className="absolute inset-0 z-0 bg-white"> */}
        <Image
          src="/coal-products.png"
          alt="Coal mining background"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="absolute top-0 left-0 right-0 h-32 z-10 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
      {/* </div> */}

      <div className="relative p-4">
        <p className="font-poppins text-white text-2xl font-bold">
          Latest Deals:
        </p>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <h1 className="font-black-han-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-8 sm:mb-12 leading-tight">
          <span className="block">Explore Our Range</span>
          <span className="block">of High-Quality</span>
          <span className="block">Coal Products!</span>
        </h1>
      </div>
    </section>
  );
};

export default ProductsHero;
