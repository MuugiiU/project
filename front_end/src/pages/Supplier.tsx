import React, { useState } from "react";
import Image from "next/image";
import Rents from "@/components/SupplierComp/Rents";
import History from "@/components/SupplierComp/History";

const supplierIcon = require("../assets/images/SupplierProfile.png");

const render = [
  {
    title: "Rents",
    text: "Rents хэсэг дарагдсан байна",
    component: <Rents />,
  },
  {
    title: "R.Histiory",
    text: "R.History хэсэг дарагдсан байна",
    component: <History />,
  },
];

const Supplier = () => {
  const [selectedRender, setSelectedRender] = useState("");

  const handleClicked = (text) => {
    setSelectedRender(text);
  };

  return (
    <div className="container mx-auto  w-full">
      <div style={{ height: "900px" }} className="flex pt-20">
        <div className="w-2/5 border border-2-black pt-20">
          <div className="flex justify-center">
            <Image src={supplierIcon} alt="SupplierProfile" width={130} />
          </div>

          <p className="text-3xl flex justify-center pt-5">Name</p>
          <p className="text-xl flex justify-center pt-5">E-mail</p>
          <p className="text-xl flex justify-center pt-5">Phone</p>
          <p className="text-xl flex justify-center pt-5">Location</p>

          <div className="flex justify-center pt-20">
            <button className="p-3 w-40 rounded-lg text-white bg-gradient-to-r from-cyan-500 to-blue-500">
              Edit
            </button>
          </div>
        </div>
        <div className="w-3/5 border border-2-black flex justify-center items-center">
          <div
            style={{ width: "700px", height: "600px" }}
            className="border-2 border-2-black "
          >
            <div className=" text-center w-full">
              <div className="flex text-center w-full">
                {render.map((el, id) => (
                  <div
                    key={id}
                    className="w-2/4 border border-black"
                    onClick={() => {
                      handleClicked(el);
                    }}
                  >
                    {el.title}
                  </div>
                ))}
              </div>
              <div className="text-2xl text-black">
                <p>{selectedRender.component}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supplier;
