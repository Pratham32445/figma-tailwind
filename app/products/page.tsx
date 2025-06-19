import Navbar from "@/components/Navbar";
import React from "react";
import NewsUpdate from "@/components/NewsUpdate";
import Footer from "@/components/Footer";
import ProductsHero from "@/components/Home/ProductsHero";
import ExploreProducts from "@/components/products/ExploreProducts";

const Products = () => {
  return (
    <>
      <Navbar />
      <ProductsHero/>
      <ExploreProducts/>
      <NewsUpdate/>
      <Footer/>
    </>
  );
};

export default Products;
