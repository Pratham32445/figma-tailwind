import BulkOrdersComponent from "@/components/BulkOrders";
import CokingCoal from "@/components/coalbygrade/CokingCoal";
import Domestic from "@/components/coalbygrade/Domestic";
import SteamCoal from "@/components/coalbygrade/SteamCoal";
import ThermalCoal from "@/components/coalbygrade/ThermalCoal";
import Footer from "@/components/Footer";
import CoalHero from "@/components/coalbygrade/CoalHero";
import ComparisonTable from "@/components/coalbygrade/ComparisonTable";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";
import React from "react";

const CoalByGrade = () => {
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

export default CoalByGrade;
