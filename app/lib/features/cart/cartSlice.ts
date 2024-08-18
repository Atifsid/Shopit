"use client";

import {
  addItemToCart,
  decreaseItemQuantityInCart,
  deleteItemFromCart,
  getCartItems,
  getCartSize,
} from "@/api/service/cartActions";
import { CartState } from "@/types";
import { cartSubTotal } from "@/utils/functions";
import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState: CartState = {
  cartSize: 0,
  cartItems: [],
  totalPrice: 0,
  couponApplied: false,
  loading: false,
  error: null,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCouponApplied: (state, action) => {
      state.couponApplied = action.payload;
    },
  },
  extraReducers(builder) {
    // get cart items
    builder.addCase(getCartItems.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCartItems.fulfilled, (state, { payload }) => {
      if (payload) {
        const response = payload.data;
        if (response) {
          if (response.code === 200) {
            state.loading = false;
            state.cartItems = response.data;
            state.cartSize = response.data.length;
            state.totalPrice = cartSubTotal(response.data);
          } else {
            state.loading = false;
            toast.error(response.message);
            state.error = response.message;
          }
        }
      } else {
        toast.error("Something went wrong, Please try again later");
      }
      state.loading = false;
    });
    builder.addCase(getCartItems.rejected, (state, { payload }: any) => {
      state.loading = false;
      toast.error("Something went wrong, Please try again later");
      console.error("getCartItems.rejected", payload);
    });

    // get cart size
    builder.addCase(getCartSize.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getCartSize.fulfilled, (state, { payload }) => {
      if (payload) {
        state.loading = true;
        const response = payload.data;
        if (response) {
          if (response.code === 200) {
            state.cartSize = response.data;
          } else {
            toast.error(response.message);
            state.error = response.message;
          }
        }
        state.loading = false;
      } else {
        toast.error("Something went wrong, Please try again later");
      }
      state.loading = false;
    });
    builder.addCase(getCartSize.rejected, (state, { payload }: any) => {
      state.loading = false;
      toast.error("Something went wrong, Please try again later");
      console.error("getCartSize.rejected", payload);
    });

    // add item to cart
    builder.addCase(addItemToCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addItemToCart.fulfilled, (state, { payload }) => {
      if (payload) {
        const response = payload.data;
        if (response) {
          if (response.code === 200) {
            const cartProductIdx = state.cartItems.findIndex(
              (item) => item.id === response.data.id
            );

            if (cartProductIdx === -1) {
              state.cartItems.push(response.data);
            } else {
              state.cartItems.splice(cartProductIdx, 1, response.data);
            }
            // update cart size
            state.loading = false;
            state.cartSize = state.cartItems.length;
            state.totalPrice = cartSubTotal(state.cartItems);
          } else {
            state.loading = false;
            toast.error(response.message);
            state.error = response.message;
          }
        }
      } else {
        toast.error("Something went wrong, Please try again later");
      }
      state.loading = false;
    });
    builder.addCase(addItemToCart.rejected, (state, { payload }: any) => {
      state.loading = false;
      toast.error("Something went wrong, Please try again later");
      console.error("addItemToCart.rejected", payload);
    });

    // decrease item quantity in cart
    builder.addCase(decreaseItemQuantityInCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      decreaseItemQuantityInCart.fulfilled,
      (state, { payload }) => {
        if (payload) {
          const response = payload.data;
          if (response) {
            if (response.code === 200) {
              const cartProductIdx = state.cartItems.findIndex(
                (item) => item.id === response.data.id
              );

              const cartItem = response.data;
              if (cartItem.quantity === 0) {
                state.cartItems.splice(cartProductIdx, 1);
              } else {
                state.cartItems.splice(cartProductIdx, 1, response.data);
              }

              // update cart size
              state.cartSize = state.cartItems.length;
              state.totalPrice = cartSubTotal(state.cartItems);
              state.loading = false;
            } else {
              state.loading = false;
              toast.error(response.message);
              state.error = response.message;
            }
          }
        } else {
          toast.error("Something went wrong, Please try again later");
        }
        state.loading = false;
      }
    );
    builder.addCase(
      decreaseItemQuantityInCart.rejected,
      (state, { payload }: any) => {
        state.loading = false;
        toast.error("Something went wrong, Please try again later");
        console.error("decreaseItemQuantityInCart.rejected", payload);
      }
    );

    // remove item from cart
    builder.addCase(deleteItemFromCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteItemFromCart.fulfilled, (state, { payload }) => {
      if (payload) {
        const response = payload.data;
        if (response) {
          if (response.code === 200) {
            const cartProductIdx = state.cartItems.findIndex(
              (item) => item.id === response.data
            );

            if (cartProductIdx != -1) {
              state.cartItems.splice(cartProductIdx, 1);
            }

            // update cart size
            state.cartSize = state.cartItems.length;
            state.totalPrice = cartSubTotal(state.cartItems);
            state.loading = false;
          } else {
            state.loading = false;
            toast.error(response.message);
            state.error = response.message;
          }
        }
      } else {
        toast.error("Something went wrong, Please try again later");
      }
      state.loading = false;
    });
    builder.addCase(deleteItemFromCart.rejected, (state, { payload }: any) => {
      state.loading = false;
      toast.error("Something went wrong, Please try again later");
      console.error("deleteItemFromCart.rejected", payload);
    });
  },
});

export const { setCouponApplied } = counterSlice.actions;
export default counterSlice.reducer;
