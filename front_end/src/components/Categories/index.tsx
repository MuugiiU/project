import Category from "@/components/Category";
import React, { useState, useEffect } from "react";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:9000/subcategories`);
      const data = await res.json();
      // const res1 = await fetch(`http://localhost:9000/categories`);
      // const data1 = await res.json();
      console.log(data);
      setCategories(data?.categories);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Category categories={categories} />
    </div>
  );
};

export default CategoryList;
