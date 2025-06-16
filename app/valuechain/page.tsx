import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import ValueChainHero from "@/components/valuechain/ValueChainHero";
import React from "react";

const ValueChain = () => {
  return (
    <>
      {" "}
      <Navbar />
      <ValueChainHero />
      <NewsUpdate />
      <Footer />{" "}
    </>
  );
};

export default ValueChain;
