import { PRODUCTS } from "@/constants/fakeProducts";
import React from "react";
import GridItem from "./GridItem";

const Grid = () => {
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
