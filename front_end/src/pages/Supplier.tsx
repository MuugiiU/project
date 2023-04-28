import SupplierProfile from "@/components/SupplierComp/SupplierProfile";
import React, { useState } from "react";

const Supplier = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
      }}
      className="container mx-auto "
    >
      <SupplierProfile />
    </div>
  );
};

export default Supplier;
