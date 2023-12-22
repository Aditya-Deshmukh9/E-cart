import React from "react";
import productData from "../Utils/Data";
import Product from "../components/Product";

function Products() {
  return (
    <div className="h-full w-full grid grid-cols-3 p-4 mt-5">
      {productData.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div>
  );
}

export default Products;
