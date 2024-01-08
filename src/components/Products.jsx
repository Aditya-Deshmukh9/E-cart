import React from "react";
import Product from "../components/Product";

function Products({ items }) {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="container m-auto grid grid-cols-1 mx-4 items-center sm:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Products;
