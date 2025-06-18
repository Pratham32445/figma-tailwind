import BulkOrdersComponent from "@/components/BulkOrders";
import CokingCoal from "@/components/by-application/CokingCoal";
import Domestic from "@/components/by-application/Domestic";
import SteamCoal from "@/components/by-application/SteamCoal";
import ThermalCoal from "@/components/by-application/ThermalCoal";
import Footer from "@/components/Footer";
import CoalHero from "@/components/by-application/CoalHero";
import ComparisonTable from "@/components/by-application/ComparisonTable";
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
