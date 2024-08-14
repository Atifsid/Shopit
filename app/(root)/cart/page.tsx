"use client";

import { RootState } from "@/app/lib/store";
import CartItem from "@/components/CartItem";
import Divider from "@/components/Divider";
import EmptyCart from "@/components/EmptyCart";
import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart);

  return (
    <section className="flex justify-center">
      <div className="flex-col my-3 min-w-[50%] max-lg:w-[80%] max-md:w-[95%]">
        <div className="m-5 bg-white shadow px-3 py-2">
          <div className="center">
            <span className="text-base">{`Subtotal (1 item) :`}</span>
            <span className="text-lg font-bold">{`$ 100`}</span>
          </div>
          <div className="center">
            <span className="text-base">{`Discount 10% :`}</span>
            <span className="text-lg font-bold text-red-500">{`- $ 100`}</span>
          </div>
          <Divider />
          <div className="center">
            <span className="text-base font-bold">{`Total :`}</span>
            <span className="text-lg font-bold">{`$ 100`}</span>
          </div>
        </div>
        {cartState.cartItems.length == 0 && <EmptyCart />}
        {cartState.cartItems.length > 0 &&
          cartState.cartItems.map((cartItem) => (
            <React.Fragment key={cartItem.id}>
              <CartItem {...cartItem} />
            </React.Fragment>
          ))}
      </div>
    </section>
  );
};

export default Cart;
