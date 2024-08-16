import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthRequest } from "@/types";
import { client } from "../client";

export const signupEvent = createAsyncThunk(
  "auth/signup",
  async ({ email, password }: AuthRequest, { rejectWithValue }) => {
    try {
      return await client.post("/auth/signup", { email, password });
    } catch (error) {
      rejectWithValue("Something went wrong, Please try again later.");
    }
  }
);

export const loginEvent = createAsyncThunk(
  "auth/login",
  async ({ email, password }: AuthRequest, { rejectWithValue }) => {
    try {
      return await client.post("auth/login", { email, password });
    } catch (error) {
      rejectWithValue("Something went wrong, Please try again later.");
    }
  }
);
