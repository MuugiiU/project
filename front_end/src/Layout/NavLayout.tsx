import React from "react";
import Tnavbar from "@/components/Tnavbar/tnavbar";
import Dele from "@/components/Tnavbar/dele";
import Navbar from "@/components/Nav/Navbar";

const NavLayout = ({ children }: any) => {
  return (
    <div className="">
      {/* <Tnavbar /> */}
      {/* <Dele /> */}
      <Navbar />
      {children}
    </div>
  );
};

export default NavLayout;
