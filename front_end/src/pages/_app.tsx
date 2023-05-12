import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NavContext } from "@/context/NavContext";
import AuthProvider from "@/context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NavContext>
      <UserProvider>
        <Component {...pageProps} />
        <ToastContainer />
        {/* <Footer /> */}
      </UserProvider>
      </NavContext>
    </AuthProvider>
  );
}
