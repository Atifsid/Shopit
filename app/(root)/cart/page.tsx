"use client";

import { RootState } from "@/app/lib/store";
import BlurryDivider from "@/components/BlurryDivider";
import CartItem from "@/components/CartItem";
import EmptyCart from "@/components/EmptyCart";
import { Loader } from "@/components/Loader";
import {
  calculatePercentage,
  roundOffToDecimalPlaces,
} from "@/utils/functions";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartState = useSelector((state: RootState) => state.cart);

  return (
    <section className="flex justify-center">
      <div className="flex-col my-3 min-w-[50%] max-lg:w-[80%] max-md:w-[95%]">
        <div className="m-5 bg-white shadow px-3 py-2">
          <div className="center">
            <span className="text-base">{`Subtotal (${cartState.cartSize} item${
              cartState.cartSize > 1 ? "s" : ""
            }) :`}</span>
            <span className="text-lg font-bold">{`$ ${roundOffToDecimalPlaces(
              cartState.totalPrice
            )}`}</span>
          </div>
          <div className="center">
            <span className="text-base">{`Discount 10% :`}</span>
            <span className="text-lg font-semibold text-red-500">{`- $ ${
              cartState.totalPrice > 0
                ? roundOffToDecimalPlaces(
                    calculatePercentage(cartState.totalPrice)
                  )
                : "0"
            }`}</span>
          </div>
          <BlurryDivider />
          <div className="center">
            <span className="text-base font-bold">{`Total :`}</span>
            <span className="text- font-bold">{`$ ${roundOffToDecimalPlaces(
              cartState.totalPrice -
                roundOffToDecimalPlaces(
                  calculatePercentage(cartState.totalPrice)
                )
            )}`}</span>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          {cartState.cartItems.length == 0 && <EmptyCart />}
          {cartState.cartItems.length > 0 &&
            cartState.cartItems.map((cartItem) => (
              <React.Fragment key={cartItem.id}>
                <CartItem {...cartItem} />
              </React.Fragment>
            ))}
        </Suspense>
      </div>
    </section>
  );
};

export default Cart;
