"use client";

import { AuthResponse, AuthState, BaseResponse } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import { loginEvent, signupEvent } from "./authActions";
import { getToken, simpleTokenValidator } from "@/utils/functions";
import toast from "react-hot-toast";

const initialState: AuthState = {
  isLoggedIn: simpleTokenValidator(getToken()),
  loading: false,
  error: null,
  token: getToken(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // SIGNUP REDUCER
    builder.addCase(signupEvent.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(signupEvent.fulfilled, (state, action: any) => {
      if (action.payload && action.payload.data) {
        const response: BaseResponse<AuthResponse> = action.payload.data;
        if (response) {
          if (response.code === 200) {
            state.token = response.data.token;
            state.isLoggedIn = true;
            localStorage.setItem("userToken", response.data.token);
          } else {
            state.loading = false;
            toast.error(response.message, { position: "top-center" });
            state.error = response.message;
          }
        } else {
          state.error = action.payload;
        }
      } else {
        toast.error("Something went wrong, Please try again later", {
          position: "top-center",
        });
      }
      state.loading = false;
    });
    builder.addCase(signupEvent.rejected, (state, { payload }: any) => {
      state.loading = false;
      toast.error("Something went wrong, Please try again later", {
        position: "top-center",
      });
      console.error("signupEvent.rejected", payload);
    });

    // LOGIN REDUCER
    builder.addCase(loginEvent.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(loginEvent.fulfilled, (state, action: any) => {
      if (action.payload && action.payload.data) {
        const response: BaseResponse<AuthResponse> = action.payload.data;
        if (response) {
          if (response.code === 200) {
            state.token = response.data.token;
            state.isLoggedIn = true;
            localStorage.setItem("userToken", response.data.token);
          } else {
            state.loading = false;
            toast.error(response.message, { position: "top-center" });
            state.error = response.message;
          }
        } else {
          state.error = action.payload;
        }
      } else {
        toast.error("Something went wrong, Please try again later", {
          position: "top-center",
        });
      }
      state.loading = false;
    });
    builder.addCase(loginEvent.rejected, (state, { payload }: any) => {
      state.loading = false;
      toast.error("Something went wrong, Please try again later", {
        position: "top-center",
      });
      console.error("loginEvent.rejected", payload);
    });
  },
});

export default authSlice.reducer;
