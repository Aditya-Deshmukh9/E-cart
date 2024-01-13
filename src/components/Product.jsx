import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({
  thumbnail,
  id,
  description,
  price,
  title,
  discountPercentage,
}) => {
  const context = useContext(DataContext);

  const addToCart = (id, price, title, description, thumbnail) => {
    const existingProductIndex = context.cart.findIndex(item => item.id === id);

    if (existingProductIndex !== -1) {
      // Product already exists in the cart
      const updatedCart = context.cart.map((item, index) => {
        if (index === existingProductIndex) {
          // Increase the quantity if the product already exists
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      context.setcart(updatedCart);
    } else {
      // Product does not exist in the cart, add a new item
      const obj = {
        id,
        price,
        title,
        description,
        thumbnail,
        quantity: 1, // Initial nty is 1
      };

      context.setcart([...context.cart, obj]);
    }

    toast.success("Item added to cart", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };


  return (
    <>
      <div
        key={id}
        className="grid-item group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md "
      >
        <Link
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          to={`/product/${id}`}
        >
          <img
            className="absolute top-0 right-0 h-full w-full object-cover"
            src={thumbnail}
            alt="product image"
          />

          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            {discountPercentage.toFixed()}% OFF
          </span>
        </Link>
        <div className="mt-4 px-5 pb-5">
          <Link href="#">
            <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
          </Link>
          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {"₹ "}
                {(price * 75.5).toFixed(0)}
              </span>
            </p>
          </div>
          <div className="mt-4 flex flex-row justify-between gap-2">
            <button className="block w-full rounded bg-blue-500 text-white p-2 text-sm font-medium transition hover:scale-105">
              ₹ {(price * 75.5).toFixed(0)}
            </button>
            <button
              onClick={() =>
                addToCart(id, price, title, description, thumbnail)
              }
              className="block w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
