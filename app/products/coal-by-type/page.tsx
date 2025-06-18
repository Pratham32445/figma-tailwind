import BulkOrdersComponent from "@/components/BulkOrders";
import CokingCoal from "@/components/coalbytype/CokingCoal";
import Domestic from "@/components/coalbytype/Domestic";
import SteamCoal from "@/components/coalbytype/SteamCoal";
import ThermalCoal from "@/components/coalbytype/ThermalCoal";
import Footer from "@/components/Footer";
import CoalHero from "@/components/coalbytype/CoalHero";
import ComparisonTable from "@/components/coalbytype/ComparisonTable";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import React from "react";

const CoalByType = () => {
  return (
    <>
      <Navbar />
      <CoalHero />
      <ThermalCoal />
      <CokingCoal />
      <SteamCoal />
      <Domestic />
      <ComparisonTable />
      <BulkOrdersComponent />
      <NewsUpdate />
      <Footer />
    </>
  );
};

export default CoalByType;
