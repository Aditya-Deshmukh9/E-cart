import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";

function CartItems({ id, thumbnail, title, price, description }) {
  const context = useContext(DataContext);

  const removeFromCart = (id) => {
    context.setcart((prevCart) => {
      const indexToRemove = prevCart.findIndex((item) => item.id === id);

      if (indexToRemove !== -1) {
        const newCart = [...prevCart];
        newCart.splice(indexToRemove, 1);
        return newCart;
      }

      return prevCart;
    });
  };

  return (
    <>
      <li className="flex items-center gap-4">
        <img
          src={thumbnail}
          alt=""
          className="h-16 w-16 rounded object-cover"
        />

        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-bold text-black hover:text-blue-600">
            {title}
          </h3>
          <h3 className="text-xs text-gray-900 hover:text-blue-600">
            {description}
          </h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Id - {id}</dt>
            </div>
          </dl>
        </Link>

        <div className="flex flex-1 items-center justify-end gap-2">
          <h2 className="bg-slate-200 p-1">
            {"₹ "}
            {price}
          </h2>

          <button
            onClick={() => removeFromCart(id)}
            className="text-gray-600 transition hover:text-red-600"
          >
            <span className="sr-only">Remove item</span>
            <MdOutlineClear className="h-4 w-4" />
          </button>
        </div>
      </li>
    </>
  );
}

export default CartItems;
