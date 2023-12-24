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
    <>
      <div key={id} className="border-2 border-black m-2">
        <Link to={`/product/${id}`}>
          <img src={imgSrc} />
        </Link>
        <div className="relative border border-gray-100 bg-white p-4">
          <Link
            to={`/product/${id}`}
            className="mt-4 text-lg font-medium text-gray-900"
          >
            {title}
          </Link>
          <Link to={`/product/${id}`} className="text-sm text-gray-700">
            {description}
          </Link>

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
