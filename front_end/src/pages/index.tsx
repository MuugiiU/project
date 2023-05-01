import React from "react";
import Navbar from "@/components/Nav/Navbar";
import Detail from "./Products/[id]";
import NavLayout from "@/Layout/NavLayout";
import Category from "@/components/Category";


const Index = () => {
  return <>
  <Navbar/>
  {/* <Detail /> */}
  <Category/>
  </>
};

export default Index;
