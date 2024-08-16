import { BaseResponse, Product } from "@/types";
import { getAuthorizedClient } from "../client";

export async function getProducts() {
  const response = await getAuthorizedClient().get<BaseResponse<Product[]>>(
    "/products/get"
  );
  if (response.data && response.data.code === 200) {
    return response.data.data;
  }
  return null;
}
