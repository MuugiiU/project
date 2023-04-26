import NavLayout from "@/Layout/NavLayout";
import React from "react";

const your_card = () => {
  return (
    <div className="container mx-auto p-12 ">
      <div
        style={{
          background:
            "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
        }}
        className="gap-4 shadow-xl h-60 p-12 rounded-xl text-white "
      >
        <h1 className="font-bold text-3xl">Анхааралтай хүлээн аваарай</h1>
        <div className="w-full h-0.5 bg-white my-2 scale-y-50 "></div>
        <p className="font-light">Төлбөр толох картаа нэмэх</p>
        <p className="font-extralight text-md text-gray-200">
          Та нэмэх,засах болон устгах боломжтой.
        </p>
        <div className="pt-5">
          <a className="border border-black p-2 rounded-lg" href="/add_card">
            Карт нэмэх
          </a>
        </div>
      </div>
    </div>
  );
};
export default your_card;
