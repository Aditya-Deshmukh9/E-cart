import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function NewProductCard({ imgSrc, id, price, title }) {
  return (
    <div
      className="h-[370px] 2xl:h-[420px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
      key={id}
    >
      <Link to={`/product/${id}`}>
        <div>
          <img
            src={imgSrc}
            alt="img"
            className=" h-56 2xl:h-64 rounded-t-xl w-full"
          />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" font-semibold text-xl pt-4">{title}</h1>
          <div className=" flex gap-10 pt-2">
            <h2 className=" font-medium text-lg ">
              {"₹ "}
              {price}
            </h2>
          </div>

          <div className="mt-2 flex flex-row justify-between gap-2">
            <button className="block w-full rounded bg-blue-500 text-white p-2 text-sm font-medium transition hover:scale-105">
              {"₹ "}
              {price}
            </button>
            <button className=" w-full rounded bg-yellow-400 p-2 text-sm font-medium transition hover:scale-105">
              But Now
            </button>
          </div>
          <div className=" flex gap-1 items-center">
            <h2>5.0</h2>
            <FaStar className=" text-yellow-300" />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default NewProductCard;
