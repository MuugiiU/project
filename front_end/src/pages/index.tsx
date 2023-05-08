// import Add_card from "@/components/add_card";
// import NavLayout from "@/Layout/NavLayout";
import Navbar from "@/components/Nav/Navbar";
import ProductSwiper from "../components/Product/ProductCard/ProductSwiper";
import NavLayout from "@/Layout/NavLayout";

import Link from "next/link";
import React from "react";
import ProductHeader from "@/components/Product/ProductCard/ProductHeader";
import CategoryList from "../components/categories";
import AddProduct from "@/components/AddProduct";

const Index = () => {
  console.log("ProductSwiper", ProductSwiper);
  return (
    <>
      <Navbar />
      <CategoryList />
      <ProductHeader />
      <ProductSwiper />
      {/* <AddProduct /> */}
    </>
  );
};

export default Index;
