// import Add_card from "@/components/add_card";
// import NavLayout from "@/Layout/NavLayout";
import Navbar from "@/components/Nav/Navbar";

import NavLayout from "@/Layout/NavLayout";
import Category from "@/components/Category";

import Link from "next/link";
import React from "react";

const Index = () => {
  return (
    <>
      <Navbar />
      {/* <NavLayout></NavLayout> */}
      <Category />
    </>
  );
};

export default Index;
