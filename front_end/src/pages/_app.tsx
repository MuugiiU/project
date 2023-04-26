import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavContext } from "@/context/NavContext";
import Navbar from "@/components/Nav/Navbar";
import Sidenav from "@/components/Nav/Sidenav";
<<<<<<< HEAD
import Footer from "@/components/Footer";
=======
import Detail from "./Products/[id]";
>>>>>>> origin/main

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavContext>
      {/* <Navbar /> */}
      <Sidenav />
      <Component {...pageProps} />
      <Footer/>
    </NavContext>
  );
}
