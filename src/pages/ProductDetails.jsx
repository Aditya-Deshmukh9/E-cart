import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from "../Utils/Data";

function ProductDetails() {
  const { id } = useParams();
  const [product, setproduct] = useState({});

  useEffect(() => {
    const filterProduct = items.filter((product) => {
      return product.id == id;
    });
    setproduct(filterProduct[0]);
  }, [id]);

  const { imgSrc, title, description, price } = product;
  console.log(imgSrc);
  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt="Party"
                src={imgSrc}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="mt-4 flex flex-row justify-between gap-2 lg:py-24">
              <button className="block w-full rounded bg-blue-500 text-white p-2 text-sm font-medium transition hover:scale-105">
                {"₹ "}
                {price}
              </button>
              <button className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105">
                But Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
