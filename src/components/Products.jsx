import React from "react";
import Product from "../components/Product";

function Products({ items }) {
  return (
    <div className="min-h-screen w-full items-center grid grid-cols-1 px-10 mt-5 sm:grid-cols-3">
      {items.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div>
  );
}

export default Products;
