import React from "react";
import Product from "../components/Product";

function Products({ items }) {
  return (
    <div className="h-full w-full grid grid-cols-3 px-20 mt-5">
      {items.map((item, index) => (
        <Product key={index} {...item} />
      ))}
    </div>
  );
}

export default Products;
