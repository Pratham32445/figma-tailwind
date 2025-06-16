import HeroSection from "@/components/Home/CurvedHero";
import Navbar from "@/components/Navbar";
import React from "react";
import CoalQualityComponent from "@/components/Home/CoalQuality";
import Positaning from "@/components/Positaning";
import AboutDDMines from "@/components/Home/DdMines";
import NewsUpdate from "@/components/NewsUpdate";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CoalQualityComponent />
      <Positaning/>
      <AboutDDMines/>
      <NewsUpdate/>
      <Footer/>
    </>
  );
};

export default page;
