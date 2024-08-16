import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthRequest } from "@/types";

export const signupEvent = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: AuthRequest, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      return await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_SERVER_PORT}/auth/signup`,
        { email, password },
        config
      );
    } catch (error) {
      rejectWithValue("Something went wrong, Please try again later.");
    }
  }
);

export const loginEvent = createAsyncThunk(
  "auth/login",
  async ({ email, password }: AuthRequest, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      console.log(
        `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_SERVER_PORT}`
      );
      return await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_SERVER_PORT}/auth/login`,
        { email, password },
        config
      );
    } catch (error) {
      rejectWithValue("Something went wrong, Please try again later.");
    }
  }
);
