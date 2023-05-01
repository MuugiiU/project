import Category from "@/components/Category";
import React from "react";

const CategoryList = ({ categories }: any) => {
  console.log("CL", categories);
  return (
    <div>
      <Category categories={categories} />
    </div>
  );
};

export default CategoryList;

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:9000/categories`);
  const data = await res.json();
  //   const categories = [
  //     {
  //       title: "Гэрийн Тавилга",
  //       imgUrl: "",
  //       subCategories: [
  //         { title: "Ширээ", imgUrl: "https://res.cloudinary.com/dnvfogglp/image/upload/v1682910926/table_pbqgdw.jpg" },
  //         { title: "Буйдан", imgUrl: "https://res.cloudinary.com/dnvfogglp/image/upload/v1682910926/sofa_cyzyko.jpg" },
  //         { title: "ГалТогоо", imgUrl: "https://res.cloudinary.com/dnvfogglp/image/upload/v1682910925/kitchen_uxbmwt.jpg" },
  //         { title: "Тавиур", imgUrl: "https://res.cloudinary.com/dnvfogglp/image/upload/v1682910924/booktable_dtx8zt.webp" },
  //       ],
  //     },
  //     {
  //       title: "Спорт",
  //       imgUrl: "https://res.cloudinary.com/dnvfogglp/image/upload/v1682910842/sports_rtnexj.jpg",
  //       subCategories: [],
  //     },
  //   ];

  return { props: { categories: data.categories } };
}
