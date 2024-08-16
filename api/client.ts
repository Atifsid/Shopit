"use client";

import { store } from "@/app/lib/store";
import axios, { AxiosResponse } from "axios";

const responseInterceptor = (response: AxiosResponse<unknown, unknown>) => {
  return response;
};

export const client = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.NEXT_PUBLIC_SERVER_PORT}`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAuthorizedClient = () => {
  client.interceptors.request.use(function (config) {
    const token = store.getState().auth.token;
    config.headers.Authorization = token;
    return config;
  });

  return client;
};

client.interceptors.response.use(responseInterceptor);
