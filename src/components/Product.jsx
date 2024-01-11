import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../Redux/fetures/cartSlice";
import Star from "./star";

const Product = ({
  thumbnail,
  id,
  description,
  price,
  title,
  discountPercentage,
  rating,
  stock
}) => {
  const dispatch = useDispatch()

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
      style: 'currency',
      currency: 'INR',
    });
  };

  const priceINR = formatNumberWithCommas(price);

  const handleCart = () => {
    dispatch(addToCart({ id, price, title, description, thumbnail }))
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
  }

  return (
    <>
      <div
        key={id}
        className="grid-item group my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-200 bg-indigo-50 shadow-md"
      >
        <Link
          className="relative m-0 flex h-60 overflow-hidden rounded-lg"
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
          <div className="flex items-center justify-between">
            <h5 className="text-xl tracking-tight text-slate-900">{title}</h5>
            <p className="bg-blue-400 rounded-2xl px-1">{stock}</p>
          </div>


          <div className="mt-2 mb-5 flex items-center justify-between">
            <p>
              <span className="text-3xl font-bold text-slate-900">
                {priceINR}
              </span>
            </p>
            <div className="">
              <Star stars={rating} />
            </div>
          </div>
          <div className="mt-4 flex flex-row justify-between gap-2">
            <button
              onClick={handleCart}
              className="block w-full rounded-2xl bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105"
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
