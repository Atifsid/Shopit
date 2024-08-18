import { createAsyncThunk } from "@reduxjs/toolkit";
import { BaseResponse, CartProduct } from "@/types";
import { getAuthorizedClient } from "../client";

export const addItemToCart = createAsyncThunk(
  "add/item",
  async (id: number, { rejectWithValue }) => {
    try {
      return await getAuthorizedClient().put<BaseResponse<CartProduct>>(
        `cart/add/item/${id}`
      );
    } catch (error) {
      rejectWithValue("Something went wrong, Please try again later.");
    }
  }
);

export const getCartItems = createAsyncThunk("get/items", async () => {
  try {
    return await getAuthorizedClient().get<BaseResponse<CartProduct[]>>(
      `cart/get/items`
    );
  } catch (error) {
    // google analytics can be implement.
    console.error("cart/get/items", error);
  }
});

export const getCartSize = createAsyncThunk("get/size", async () => {
  try {
    return await getAuthorizedClient().get<BaseResponse<number>>(
      `cart/get/size`
    );
  } catch (error) {
    console.error("get/size", error);
  }
});

export const deleteItemFromCart = createAsyncThunk(
  "delete/item",
  async (id: number) => {
    try {
      return await getAuthorizedClient().delete<BaseResponse<number>>(
        `cart/delete/item/${id}`
      );
    } catch (error) {
      console.error("cart/delete", error);
    }
  }
);

export const decreaseItemQuantityInCart = createAsyncThunk(
  "decrease/item",
  async (id: number) => {
    try {
      return await getAuthorizedClient().put<BaseResponse<CartProduct>>(
        `cart/decrease/item/${id}`
      );
    } catch (error) {
      console.error("cart/delete", error);
    }
  }
);
