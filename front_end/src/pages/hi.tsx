import { Navbar } from "flowbite-react";
import { NavbarContext } from "@/context/NavContext";
import { useContext, useState } from "react";
import Subnav from "../components/Nav/Subnav";
import Image from "next/image";
const imgPic01 = require("../assets/images/notification-bell.png");
const imgPic02 = require("../assets/images/navbar_cart.png");
const imgPic03 = require("../assets/images/navbar_avatar.png");
interface Inav {
  nav: Boolean;
  setNav: (nav: boolean) => void;
}
const NavbarA = () => {
  return (
    <>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active={true}>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarA;
