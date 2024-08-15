"use client";

import { CartState } from "@/types";
import { cartSubTotal } from "@/utils/functions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartState = {
  cartSize: 0,
  cartItems: [],
  totalPrice: 0,
  couponApplied: false,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // adds item to cart
    addProductToCart: (state, action) => {
      const cartProductIdx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      // increase item quantity if item is already present.
      if (cartProductIdx === -1) {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
        });
        state.cartSize += 1;
      }
      // else add new item
      else {
        const cartItem = state.cartItems[cartProductIdx];
        state.cartItems[cartProductIdx].quantity! += 1;
        state.cartItems.splice(cartProductIdx, 1, cartItem);
      }
      // update cart size
      state.cartSize = state.cartItems.length;
      state.totalPrice = cartSubTotal(state.cartItems);
    },

    // remove product from cart only if item is present in the cart.
    removeProductFromCart: (state, action) => {
      const cartProductIdx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartProductIdx != -1) {
        state.cartItems.splice(cartProductIdx, 1);
      }

      // update cart size
      state.cartSize = state.cartItems.length;
      // update totalPrice
      state.totalPrice = cartSubTotal(state.cartItems);
    },

    // decrement item quantity only if item is present in the cart.
    decreaseQuantity: (state, action) => {
      const cartProductIdx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (cartProductIdx != -1) {
        const cartItem = state.cartItems[cartProductIdx];

        // if cart item's quantity is truthy.
        if (cartItem.quantity) {
          // if cart item's quantity greater than one then decrement by 1.
          if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            state.cartItems.splice(cartProductIdx, 1, cartItem);
          }
          // else remove the item. i.e, cartItem.quantity <= 1.
          else {
            state.cartItems.splice(cartProductIdx, 1);
          }
        }
      }

      // update cart size
      state.cartSize = state.cartItems.length;
      // update totalPrice
      state.totalPrice = cartSubTotal(state.cartItems);
    },

    setCouponApplied: (state, action) => {
      state.couponApplied = action.payload;
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  decreaseQuantity,
  setCouponApplied,
} = counterSlice.actions;
export default counterSlice.reducer;
