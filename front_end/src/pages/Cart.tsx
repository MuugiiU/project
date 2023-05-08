import CartSection from "@/components/Cart/cartSection";
import NavLayout from "@/Layout/NavLayout";
import React from "react";

const Cart = () => {
  return (
    <NavLayout>
      <div className="container mx-auto pt-5">
        <CartSection />
      </div>
    </NavLayout>
  );
};

export default Cart;
