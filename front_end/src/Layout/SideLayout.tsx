import Sidebar from "@/components/Tnavbar/sidebar";
import React from "react";

const SideLayout = ({ children }: any) => {
  return (
    <div className="">
      <Sidebar />

      {children}
    </div>
  );
};

export default SideLayout;
