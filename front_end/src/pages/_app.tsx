import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavContext } from "@/context/NavContext";
import Navbar from "@/components/Navbar";
import Sidenav from "@/components/Sidenav";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NavContext>
      <Navbar />
      <Sidenav />
      <Component {...pageProps} />
    </NavContext>
  );
}
