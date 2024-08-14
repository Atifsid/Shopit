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
