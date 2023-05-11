import React from "react";
import Image from "next/image";
import mackbook from "../../../public/images/mackbook.png";

const CartSection = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
      }}
    >
      <div className="grid md:grid-cols-3 p-8 gap-4">
        <div className="bg-white p-5 flex gap-2 md:col-span-2 md:items-center">
          <Image
            src={mackbook}
            height={50}
            width={50}
            className=" sm:w-40 max-sm:w-40 md:w-60 md:h-40"
          />
          <div className="block">
            <h1 className="md:font-black md:text-3xl sm:font-bold sm:text-xl sm:font-bold sm:text-xl ">
              Nike Air Max 2019
            </h1>
            <p className="font-extralight text-sm text-lime-700">MOUNTH</p>
            <p className="md:font-bold md:text-2xl pt-2 sm:font-bold sm:text-xl max-sm:font-bold max-sm:text-lg">
              444,999₮
            </p>
          </div>
        </div>

        <div className="bg-white md:col-span-1 p-8 ">
          <div className="flex gap-4 justify-between">
            <h1>Subtotal</h1>
            <h1>444,999₮</h1>
          </div>
          <div className="flex gap-4 justify-between pt-2">
            <h1>Shipping</h1>
            <h1>4,999₮</h1>
          </div>
          <div
            style={{ backgroundColor: "#38A3A5" }}
            className="w-full h-0.5 my-2 scale-y-50 "
          ></div>
          <div className="flex gap-4 justify-between pt-2">
            <h1 className="font-bold text-xl">Total</h1>
            <h1 className="font-bold text-xl">449,998₮</h1>
          </div>
          <div className="pt-6 text-white font-medium">
            <button
              style={{
                background:
                  "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
              }}
              className="w-full p-2 rounded-lg"
            >
              Төлөх
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSection;
