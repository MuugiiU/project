import NavLayout from "@/Layout/NavLayout";
import React from "react";
import SwiperSection from "@/components/Swiper/swiper";
import Product from "@/components/Product/product";
// import LoginModal from "@/components/Auth/Login";
import Apart from "@/components/Product/apart";
import Footer from "@/components/Footer/footer";
import Medee from "@/components/Medee/medee";
import BackToTopButton from "@/components/BackButton/BackToTopButton";
import LoginModal from "@/components/Auth/Login";
import Hover from "@/components/Hover/hover";
import CategoryList from "@/components/Categories";
import ProductHeader from "@/components/ProductHeader";
import ProductSwiper from "@/components/ProductSwiper";

const Index = () => {
  return (
    <NavLayout>
      <SwiperSection />
      <CategoryList />
      <Product />
      <ProductHeader />
      <ProductSwiper />
      <Hover />
      <Apart />
      <Medee />
      <Footer />
      <BackToTopButton />
    </NavLayout>
  );
};
export default Index;
