import React from "react";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../Redux/fetures/cartSlice";


function CartItems({ id, thumbnail, title, price, quantity }) {

  const dispatch = useDispatch()


  return (
    <>
      <li className="flex items-center  gap-4">
        <img
          src={thumbnail}
          alt=""
          className="h-16 w-16 rounded object-cover"
        />

        <Link to={`/product/${id}`}>
          <h3 className="text-sm font-bold text-black hover:text-blue-600">
            {title}
          </h3>
          <h3 className="text-sm text-gray-900 hover:text-blue-600">
            ₹ {(price * 75.5).toFixed(0) * quantity}
          </h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Id - {id}</dt>
            </div>
          </dl>
        </Link>
        {/* quantity input */}
        <div className="flex items-center justify-center">
          <label htmlFor="Quantity" className="sr-only"> Quantity </label>

          <div className="flex items-center rounded border border-gray-800">
            <button
              type="button"
              className="w-10 text-4xl leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() => dispatch(decreaseQuantity({ id }))}
            >
              -
            </button>

            <span className=" text-center bg-white p-2 px-3 sm:text-xl">{quantity}</span>

            <button
              type="button"
              className="h-10 w-10 text-2xl leading-10 text-gray-600 transition hover:opacity-75"
              onClick={() => dispatch(increaseQuantity({ id }))}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">

          <button
            onClick={() => dispatch(removeFromCart({ id, thumbnail, title, price }))}
            className="text-gray-600 transition hover:text-red-600"
          >
            <span className="sr-only">Remove item</span>
            <MdOutlineClear className="h-4 w-4" />
          </button>
        </div>
      </li >
    </>
  );
}

export default CartItems;
