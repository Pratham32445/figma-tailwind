import BulkOrdersComponent from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import BriefCoal from "@/components/IndonesianCoal/BriefCoal";
import CoalHero from "@/components/IndonesianCoal/CoalHero";
import WhyIndonesian from "@/components/IndonesianCoal/WhyIndonesian";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import React from "react";

const IndonesianCoal = () => {
  return (
    <>
      {" "}
      <Navbar />
      <CoalHero />
      <BriefCoal />
      <WhyIndonesian />
      <BulkOrdersComponent />
      <NewsUpdate />
      <Footer />{" "}
    </>
  );
};

export default IndonesianCoal;
