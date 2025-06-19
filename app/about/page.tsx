import AboutHero from "@/components/about/AboutHero";
import CustomerTrust from "@/components/CustomerTrust";
import Mission from "@/components/about/Mission";
import Vision from "@/components/about/Vision";
import WhoAreYou from "@/components/about/WhoAreYou";
import BulkOrders from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import React from "react";
import BlackCircle from "@/components/BlackCircle";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <WhoAreYou />
      <BlackCircle />
      <Mission />
      <Vision />
      <CustomerTrust />
      <BulkOrders />
      <NewsUpdate />
      <Footer />
    </>
  );
};

export default AboutUs;
