// import Add_card from "@/components/add_card";
// import NavLayout from "@/Layout/NavLayout";
import Navbar from "@/components/Nav/Navbar";
import ProductSwiper from "../components/ProductSwiper";
import NavLayout from "@/Layout/NavLayout";

import Link from "next/link";
import React from "react";
import ProductHeader from "@/components/ProductHeader";
import CategoryList from "../components/Categories";

const Index = () => {
  console.log("ProductSwiper", ProductSwiper);
  return (
    <>
      <Navbar />
      <CategoryList />
      <ProductHeader />
      <ProductSwiper />
    </>
  );
};

export default Index;
