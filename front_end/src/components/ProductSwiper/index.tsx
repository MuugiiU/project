import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import { useState, useEffect } from "react";
import ProductCard from "../ProductCard";

const ProductSwiper = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:9000/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data?.products);
    };
    fetchData();
  }, []);
  console.log("product datas:", products);

  return (
    <div className="container mx-auto pt-5">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
          2100: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        className="mySwiper"
      >
        {products?.map((product: any, idx: number) => (
          <SwiperSlide key={idx}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSwiper;
