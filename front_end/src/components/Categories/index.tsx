import Category from "@/components/Category";
import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:9000/categories`);
    const data = await res.json();
    console.log(data);
    setCategories(data?.categories);
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log("CL", categories);
  return (
    <div>
      <Category categories={categories} />
    </div>
  );
};

export default CategoryList;
