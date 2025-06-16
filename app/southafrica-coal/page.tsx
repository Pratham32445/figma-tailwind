import React from 'react'
import BulkOrdersComponent from "@/components/BulkOrders";
import Footer from "@/components/Footer";
import CoalHero from "@/components/IndonesianCoal/CoalHero";
import Navbar from "@/components/Navbar";
import NewsUpdate from "@/components/NewsUpdate";

const SouthAfricanCoal = () => {
  return (
    <div>      {" "}
      <Navbar />
      <CoalHero />
      <BulkOrdersComponent />
      <NewsUpdate />
      <Footer />{" "}</div>
  )
}

export default SouthAfricanCoal