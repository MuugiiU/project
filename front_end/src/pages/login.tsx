import NavLayout from "@/Layout/NavLayout";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Login = () => {
  const [supplier_email, setSupplierEmail] = useState("");
  const [supplier_password, setSupplierPassword] = useState("");

  const [role, setRole] = useState("");
  const { supplier, setUser } = useContext(AuthContext);
  const router = useRouter();

  const changeEmail = (e) => {
    console.log("Supplier_Email: ", e.target.value);
    setSupplierEmail(e.target.value);
  };
  const changePass = (e) => {
    console.log("Supplier_Password: ", e.target.value);
    setSupplierPassword(e.target.value);
  };

  const handleLoginSubmit = async () => {
    try {
      const res = (await axios.post(`http://localhost:9000/supplier/login`, {
        supplier_email,
        supplier_password,
      })) as any;

      console.log(res);
      setUser(res.data.supplier);

      toast.success("Амжилттай нэвтэрлээ", {
        autoClose: 2000,
        position: "bottom-right",
      });
      router.push("/");
    } catch {
      toast.error("Амжилтгүй", { autoClose: 1000, position: "bottom-right" });
    }
  };

  return (
    <NavLayout>
      <div className="container mx-auto flex justify-center items-center pt-20">
        <div
          style={{ width: "480px", height: "520px", borderRadius: "25px" }}
          className="bg-white  shadow-2xl border border-black"
        >
          <div className="p-8">
            <div>
              <p className="font-semibold text-3xl">Нэвтрэх</p>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нэвтрэх нэр</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="supplier_email"
                  onChange={changeEmail}
                  variant="outlined"
                />
              </Box>
            </div>
            <div className="pt-5">
              <Box>
                <p className="pb-3 font-medium">Нууц үг</p>
                <TextField
                  sx={{ width: "100%" }}
                  id="supplier_password"
                  onChange={changePass}
                  variant="outlined"
                />
              </Box>
            </div>
            <div className="pt-5 font-light text-green-600">
              <p>Нууц үг сэргээх</p>
            </div>
            <div className="pt-5 text-white font-semibold">
              <button
                style={{
                  background:
                    "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
                  height: "50px",
                }}
                className="w-full rounded-3xl  shadow-md shadow-indigo-500/40"
                onClick={handleLoginSubmit}
              >
                Нэвтрэх
              </button>
            </div>
            <div className="flex justify-center items-center pt-5">
              <div className="h-[1px] bg-onSurface-black-disabled dark:bg-dark-onPrimary-white-disabled w-full mr-8 bg-black"></div>
              <p className="font-extralight text-medium">Эсвэл</p>
              <div className="h-[1px] bg-onSurface-black-disabled dark:bg-dark-onPrimary-white-disabled w-full ml-8 bg-black"></div>
            </div>
            <div className="pt-5 flex gap-3">
              <p className="font-extralight text-medium">Шинэ хэрэглэгч үү ?</p>
              <Link href="/Register">
                <p className="font-bold text-green-700">Бүртгүүлэх</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export default Login;
