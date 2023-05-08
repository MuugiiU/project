import axios from "axios";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  const [products, setProducts] = useState([]);

  const getAllBranches = async () => {
    try {
      const result = await axios.get("http://localhost:9000/products");
      console.log(result.data.products);
      setProducts(result.data.products);
    } catch (err) {
      console.log("Err", err);
    }
  };
  useEffect(() => {
    getAllBranches();
  }, []);
  return (
    <div className="p-10">
      <div className="grid md:grid-cols-6 sm:grid-cols-3 max-sm:space-y-2 md:space-y-0 gap-4 container mx-auto text-black pt-10">
        {products.length > 0 &&
          products.map((product) => (
            <>
              <div className="p-2 border border-black rounded-md bg-zinc-50">
                <img
                  src={product.img}
                  width={80}
                  className="w-full p-1 border bordr-black rounded-sm"
                />

                <Link
                  className="font-semibold text-md pt-5"
                  href={`Products/${product._id}`}
                >
                  {product.title}
                </Link>
                <p className="font-extralight text-sm">Сагсны бөмбөг</p>
                <p className="font-bold">{product.price}₮</p>
              </div>
            </>
          ))}
      </div>
    </div>
  );
};

export default Product;
