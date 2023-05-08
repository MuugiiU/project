import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import box from "../../../public/images/box.png";
import NavLayout from "@/Layout/NavLayout";

const Detail = ({ product }: any) => {
  const router = useRouter();
  console.log("mm===>", product);

  if (router.isFallback) {
    return <div>Уншиж байна ...</div>;
  }
  return (
    <NavLayout>
      <div className="container mx-auto pt-5">
        <div
          style={{
            background:
              "linear-gradient(to right , #55A3DF,#4BA58C,#1FC4DC, #5ECDB1)",
          }}
          className="md:grid grid-cols-2 gap-6 sm:space-y-2 max-sm:space-y-0 md:space-y-0 p-5"
        >
          <div className="">
            <img className="" src={product.img} />
          </div>
          <div className="text-white">
            <h1 className="font-bold text-2xl sm:pt-1 md:pt-0 max-sm:pt-1">
              {product.title}
            </h1>
            <p className="md:font-normal  sm:font-extralight sm:text-sm  ">
              Ус буцалгагч
            </p>
            <p className="md:font-light md:text-md md:block sm:hidden">
              (0 үнэлгээтэй)
            </p>
            <div className="w-full h-0.5 bg-white my-2 scale-y-50"></div>
            <p className="font-medium text-sm sm:hidden md:block">
              Онлайн авах үнэ
            </p>
            <h1 className="font-extrabold text-amber-200 text-2xl">
              {product.price}₮
            </h1>
            <div className="w-full h-0.5 bg-white my-2 scale-y-50 "></div>

            <div className="bg-white text-black h-20 rounded-lg flex gap-4 items-center px-5">
              <Image
                style={{ width: "52px", height: "50px" }}
                src={box}
                alt="box image"
              />
              <div>
                <h1>Хүргэлтийн нөхцөл</h1>
                <p>
                  Бэлэн бараа
                  <span className="text-red-500 font-semibold">48-72</span>{" "}
                  цагтхүргэгдэнэ
                </p>
              </div>
            </div>
            <div className="md:grid grid-cols-2 gap-2 pt-2 md:space-y-0  sm:space-y-3 max-sm:space-y-3">
              <button className="border border-black p-5 w-full text-black font-bold rounded-md sm:text-sm">
                <Link href="/Cart">САГСАНД ХИЙХ</Link>
              </button>
              <button className="bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% border font-bold border-black text-white p-5 w-full rounded-md sm:text-sm sm:text-bold">
                <a href="/your_card">ТҮРЭЭСЛЭН АВАХ</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </NavLayout>
  );
};

export async function getServerSideProps({ query }: any) {
  const result = await fetch(
    `http://localhost:9000/products/${query.productId}`
  );
  const data = await result.json();
  return {
    props: { product: data.product },
  };
}

export default Detail;
