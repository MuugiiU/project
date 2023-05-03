import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

const CategoryItem = ({ category }: any) => {
  return (
    <div className="rounded-lg border-2 border-gray-200 shadow-lg flex flex-col p-4">
      <h2 className=" text-md bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% top-0 left-0 bg-clip-text text-transparent rounded-xl transition-all duration-500 font-bold ">
        {/* Гэрийн Тавилга */}
        {category.category_title}
        {/* {category_title} */}
      </h2>

      {!category.subCategories.length ? (
        <div className="flex flex-1 h-96">
          <Image
            src={category.category_img}
            alt="cate_pic"
            height={400}
            width={400}
            objectFit="cover"
            style={{ height: "100%", width: "100%" }}
            className="cursor-pointer object-cover flex flex-1 md:h-32 max-md:h-16 max-sm:h-16 md:w-full sm:w-screen max-sm:w-screen rounded-md"
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-2">
          {category.subCategories?.map((subCategory: any, idx: number) => (
            <Link key={idx} href={"/categories/" + category.category_slug}>
              <Image
                src={subCategory.sub_cat_img}
                alt="sub_photo"
                width={300}
                height={300}
                className="cursor-pointer object-cover md:h-32 max-md:h-16 max-sm:h-16 md:w-full sm:w-screen max-sm:w-screen rounded-md"
              />
            </Link>
          ))}
        </div>
      )}

      <Link
        href={"/categories/" + category.link}
        className="animate-text bg-gradient-to-r from-blue-300 from-10% via-sky-500 via-30% to-emerald-300 to-90% top-0 left-0 bg-clip-text text-transparent text-sm font-black rounded-xl transition-all duration-500  bg-size-20 capitalize hover:uppercase cursor-pointer pl-5"
      >
        Дэлгэрэнгүй
      </Link>
    </div>
  );
};

export default CategoryItem;
