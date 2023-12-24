import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NewProductCard({ imgSrc, id, price, title }) {
  const context = useContext(DataContext);
  const addToCart = (id, price, title, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      imgSrc,
    };
    context.setcart([...context.cart, obj]);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div
      key={id}
      className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
    >
      <Link
        to={`/product/${id}`}
        className="relative mx-8 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img className="object-cover" src={imgSrc} alt="product image" />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to={`/product/${id}`}>
          <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              {"₹"}
              {price}
            </span>
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                aria-hidden="true"
                className="h-5 w-5 text-yellow-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            ))}
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              5.0
            </span>
          </div>
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
  );
}

export default NewProductCard;
