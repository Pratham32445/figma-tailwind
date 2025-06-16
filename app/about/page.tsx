import AboutHero from "@/components/about/AboutHero";
import CustomerTrust from "@/components/about/CustomerTrust";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import WhoAreYou from "@/components/about/WhoAreYou";
import BulkOrders from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <WhoAreYou />
      <Mission />
      <Vision />
      <CustomerTrust />
      <BulkOrders/>
      <NewsUpdate />
      <Footer />
    </>
  );
};

export default AboutUs;
