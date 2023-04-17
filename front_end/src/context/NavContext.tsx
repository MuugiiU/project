import React, { Context } from "react";
import { createContext, useState } from "react";

interface Inav {
  nav: boolean;
  setNav: (nav: boolean) => void;
}
const defaultNav: Inav = {
  nav: false,
  setNav: () => {},
};
const NavbarContext = createContext(defaultNav);

const NavContext = ({ children }: any): any => {
  const [nav, setNav] = useState(false);

  return (
    <NavbarContext.Provider value={{ nav, setNav }}>
      {children}
    </NavbarContext.Provider>
  );
};

export { NavbarContext, NavContext };
