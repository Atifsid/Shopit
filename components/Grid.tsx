"use client";

import { PRODUCTS } from "@/constants/fakeProducts";
import React, { useEffect } from "react";
import GridItem from "./GridItem";
import { fetchProducts } from "@/api/products";
import { useSelector } from "react-redux";
import { RootState } from "@/app/lib/store";

const Grid = () => {
  //     const token = useSelector((state: RootState) => state.auth.token);
  // const products = fetchProducts(token);

  // useEffect(() => {
  //   console.log(products);
  // }, []);

  return (
    <div className="common-width grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {PRODUCTS.map((product) => (
        <div key={product.id}>
          <GridItem {...product} />
        </div>
      ))}
    </div>
  );
};

export default Grid;
