"use client";

import { store } from "@/app/lib/store";
import { ROUTES } from "@/constants/routes";
import axios, { AxiosResponse } from "axios";

const responseInterceptor = (response: AxiosResponse<unknown, unknown>) => {
  return response;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorHandler = (error: any) => {
  if (error.response.status === 401 || error.response.status === 403) {
    window.location.replace(ROUTES.login);
  }

  return Promise.reject(error);
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

client.interceptors.response.use(responseInterceptor, errorHandler);
