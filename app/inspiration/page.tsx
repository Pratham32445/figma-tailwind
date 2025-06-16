
import BulkOrdersComponent from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import Emerzing from "@/components/Inspiration/Emerzing";
import Industry from "@/components/Inspiration/Industry";
import InspirationHero from "@/components/Inspiration/Inspiration";
import Inspired from "@/components/Inspiration/Inspired";
import Striving from "@/components/Inspiration/Striving";
import WhatWeDo from "@/components/Inspiration/Whatwedo";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import React from "react";

const Inspiration = () => {
  return (
    <>
      {" "}
      <Navbar />
      <InspirationHero />
      <WhatWeDo />
      <Industry/>
      <Emerzing/>
      <Striving/>
      <Inspired/>
      <BulkOrdersComponent />
      <NewsUpdate />
      <Footer />{" "}
    </>
  );
};

export default Inspiration;
