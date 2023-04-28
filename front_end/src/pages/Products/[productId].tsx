import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import ProductDetial from "@/components/Detail/productDetial";
import Similar from "@/components/Detail/similar";
import Ol from "@/components/Detail/ol";

const Detail = () => {
  const { productId } = useRouter();
  console.log(productId);

  return (
    <div className="container mx-auto">
      <Ol />
      <ProductDetial />
      <Similar />
    </div>
  );
};

export default Detail;
