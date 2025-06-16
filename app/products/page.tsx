import Navbar from "@/components/Navbar";
import React from "react";
import NewsUpdate from "@/components/NewsUpdate";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/Home/ProductsHero";

const Products = () => {
  return (
    <>
      <Navbar />
      <ProductsHero/>
      <NewsUpdate/>
      <Footer/>
    </>
  );
};

export default Products;
