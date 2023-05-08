import Category from "@/components/Category";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import CategoryList from "@/components/Categories";
import CategoryItem from "@/components/CategoryItem";

const category = ({ category }: any) => {
  const router = useRouter();
  console.log("category", category);
  if (router.isFallback) {
    return <div>Уншиж байна...</div>;
  }
};

const SubCategoryList = ({ categories }: any) => {
  return (
    <div>
      <CategoryItem />
    </div>
  );
};

export async function getServerSideProps({ query }: any) {
  const res = await fetch(`http://localhost:9000/categories/${query.id}`);
  const data = await res.json();

  return { props: { categories: data.category } };
}
export default SubCategoryList;
