import BulkOrdersComponent from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import Distribution from "@/components/valuechain/Distribution";
import Logistics from "@/components/valuechain/Logistics";
import Partnership from "@/components/valuechain/Partnership";
import QualityControl from "@/components/valuechain/QualityControl";
import Sourcing from "@/components/valuechain/Sourcing";
import Storage from "@/components/valuechain/Storage";
import ValueChainHero from "@/components/valuechain/ValueChainHero";
import React from "react";

const ValueChain = () => {
  return (
    <>
      {" "}
      <Navbar />
      <ValueChainHero />
      <Sourcing />
      <Logistics />
      <Storage />
      <Distribution />
      <QualityControl/>
      <Partnership />
      <BulkOrdersComponent/>
      <NewsUpdate />
      <Footer />{" "}
    </>
  );
};

export default ValueChain;
