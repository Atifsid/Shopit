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
});

client.interceptors.response.use(responseInterceptor, errorHandler);
