import Grid from "@/components/Grid";
import { Loader } from "@/components/Loader";
import React, { Suspense } from "react";

const Products = () => {
  return (
    <section className="flex justify-center">
      <Suspense fallback={<Loader />}>
        <Grid />
      </Suspense>
    </section>
  );
};

export default Products;
