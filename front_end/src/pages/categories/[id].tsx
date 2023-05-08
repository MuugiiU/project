import ProductCard from "@/components/Product/ProductCard";
import ProductSideBar from "@/components/Product/Productsidebar";
import React from "react";

const Category = ({ products }: any) => {
  return (
    <div>
      <ProductSideBar />
      {/* <ProductCard products={products} /> */}
      {products.map((p: any) => (
        <p>{p.title}</p>
      ))}
    </div>
  );
};

export default Category;

export async function getServerSideProps(context: any) {
  console.log("IIDD", context.query);
  const { id } = context.query;
  const data: any = await fetch("http://localhost:9000/subcategories/" + id + "/products").then((res) => res.json());
  console.log("DD", data);

  return { props: { products: data.products } };
}
