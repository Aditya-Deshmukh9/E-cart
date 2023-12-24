import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({ imgSrc, id, description, price, title }) => {
  const context = useContext(DataContext);
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    context.setcart([...context.cart, obj]);
    toast.success("Item added on cart", {
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
        className="group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
      >
        <Link
          className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          to={`/product/${id}`}
        >
          <img
            className="peer absolute top-0 right-0 h-full w-full object-cover"
            src={imgSrc}
            alt="product image"
          />

          <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
            39% OFF
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
                {price}
              </span>
              <span className="text-sm text-slate-900 line-through">
                {"₹ "}
                100,000
              </span>
            </p>
          </div>
          <div className="mt-4 flex flex-row justify-between gap-2">
            <button className="block w-full rounded bg-blue-500 text-white p-2 text-sm font-medium transition hover:scale-105">
              {"₹ "}
              {price}
            </button>
            <button
              onClick={() => addToCart(id, price, title, description, imgSrc)}
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
