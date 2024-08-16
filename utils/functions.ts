import { CartProduct } from "@/types";

export const cartSubTotal = (arr: CartProduct[]) => {
  return arr.reduce(
    (partialSum, a) =>
      a.price && a.quantity ? partialSum + a.price * a.quantity : partialSum,
    0
  );
};

export const roundOffToDecimalPlaces = (
  value: number,
  decimalPlace: number = 2
): number => {
  return Number(value.toFixed(decimalPlace));
};

export const calculatePercentage = (
  totalValue: number,
  partialValue: number = 10
) => {
  return (partialValue / 100) * totalValue;
};

export const simpleTokenValidator = (token: string | null) => {
  return (
    token != undefined &&
    token != null &&
    token.trim() != "" &&
    token.startsWith("Bearer")
  );
};

export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

export const setToken = (token: string) => {
  if (isBrowser()) {
    localStorage.setItem("userToken", token);
  }
};

export const getToken = () => {
  if (isBrowser()) {
    return localStorage.getItem("userToken");
  }
  return null;
};
