import React from "react";
import BulkOrdersComponent from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import CoalHero from "@/components/IndonesianCoal/CoalHero";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import BriefCoalIndia from "@/components/IndianCoal/BriefCoalIndia";
import WhyIndian from "../../components/IndianCoal/WhyIndian";
import IndianCoalHero from "@/components/IndianCoal/IndianCoalHero";

const IndianCoal = () => {
  return (      
    <div>
      {" "}
      <Navbar />
      <IndianCoalHero />
      <BriefCoalIndia />
      <WhyIndian />
      <BulkOrdersComponent />
      <NewsUpdate />
      <Footer />{" "}
    </div>
  );
};

export default IndianCoal;
