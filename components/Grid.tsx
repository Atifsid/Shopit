"use client";

import React, { useEffect, useState } from "react";
import GridItem from "./GridItem";
import { Product } from "@/types";
import Error from "./Error";
import { getProducts } from "@/api/service/getProducts";
import { Loader } from "./Loader";

const Grid = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    setLoading(true);
    const data = await getProducts();
    data && setProducts(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      {loading && <Loader />}

      {!loading && products && products.length > 0 && (
        <div className="common-width grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {products.map((product) => (
            <div key={product.id}>
              <GridItem {...product} />
            </div>
          ))}
        </div>
      )}

      {!loading && (!products || (products.length === 0 && <Error />))}
    </React.Fragment>
  );
};

export default Grid;
