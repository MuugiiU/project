import React from "react";
import Navbar from "@/components/Nav/Navbar";

const NavLayout = ({ children }: any) => {
  return (
    <div>
      {/* <Navbar /> */}

      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default NavLayout;
