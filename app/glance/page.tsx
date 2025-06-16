import CustomerTrust from "@/components/CustomerTrust";
import BulkOrdersComponent from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import GeoGraphicReach from "@/components/glance/GeoGraphicReach";
import GlanceHero from "@/components/glance/GlanceHero";
import Productportfolio from "@/components/glance/Productportfolio";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import React from "react";

const Glance = () => {  
  return (
    <>
      {" "}
      <Navbar />
      <GlanceHero/>
      <Productportfolio/>
      <GeoGraphicReach/>
      <CustomerTrust />
      <BulkOrdersComponent />
      <NewsUpdate />
      <Footer />{" "}
    </>
  );
};

export default Glance;
