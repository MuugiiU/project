import React from "react";

const ProductHeader = ({ children }: any) => {
  return (
    <>
      <div className="pt-20  bg-white">
        <h1 className="text-2xl font-bold pl-10 pb-5 text-cyan-500">Бүх Бүтээгдэхүүн</h1>
      </div>
      <section className=" flex flex-row bg-gray-100 ">
        <div className=" mx-auto grid max-w-6xl  grid-cols-1 gap-5  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">{children}</div>
      </section>
    </>
  );
};

export default ProductHeader;
