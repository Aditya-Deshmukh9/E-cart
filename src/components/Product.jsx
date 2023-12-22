import React from "react";
import { Link } from "react-router-dom";

function Product({ imgSrc, id, description, price, title }) {
  return (
    <div key={id} className="border-2 border-black m-2">
      <Link to={`/product/${id}`}>
        <img src={imgSrc} />

        <div className="relative border border-gray-100 bg-white p-4">
          <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
          <p className="text-sm text-gray-700">{description}</p>

          <div className="mt-4 flex flex-row justify-between gap-2">
            <button className="block w-full rounded bg-blue-500 text-white p-2 text-sm font-medium transition hover:scale-105">
              {"₹ "}
              {price}
            </button>
            <button className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105">
              But Now
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
