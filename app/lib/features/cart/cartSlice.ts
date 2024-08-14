"use client";

import { CartProduct } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
    cartSize: number;
    cartItems: CartProduct[]
}

const initialState: CartState = {
    cartSize: 0,
    cartItems: []
}

export const counterSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart: (state, action) => {
            const cartProductIdx = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (cartProductIdx === -1) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
                state.cartSize += 1;
            } else {
                const cartItem = state.cartItems[cartProductIdx];
                state.cartItems[cartProductIdx].quantity! += 1;
                state.cartItems.splice(cartProductIdx, 1, cartItem);
            }
            state.cartSize = state.cartItems.length;
        },
        removeProductFromCart: (state, action) => {
            const cartProductIdx = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (cartProductIdx != -1) {
                state.cartItems.splice(cartProductIdx, 1);
            }
            state.cartSize = state.cartItems.length;
        },
        decreaseQuantity: (state, action) => {
            const cartProductIdx = state.cartItems.findIndex(item => item.id === action.payload.id);
            if (cartProductIdx != -1) {
                const cartItem = state.cartItems[cartProductIdx];
                if (cartItem.quantity! === 1) {
                    state.cartItems.splice(cartProductIdx, 1);
                } else {
                    cartItem.quantity! -= 1;
                    state.cartItems.splice(cartProductIdx, 1, cartItem);
                }
            }
            state.cartSize = state.cartItems.length;
        }
    }
})

export const { addProductToCart, removeProductFromCart, decreaseQuantity } = counterSlice.actions;
export default counterSlice.reducer;