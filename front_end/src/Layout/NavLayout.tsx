import React from "react";
import Tnavbar from "@/components/Tnavbar/tnavbar";
import Dele from "@/components/Tnavbar/dele";

const NavLayout = ({ children }: any) => {
  return (
    <div className="">
      {/* <Tnavbar /> */}
      <Dele />
      {children}
    </div>
  );
};

export default NavLayout;
