import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function CartItems({ id, thumbnail, title, price, quantity }) {
  const context = useContext(DataContext);

  const increaseQuantity = () => {
    context.setcart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      return updatedCart;
    });
    toast.success("Item quantity increase");
  };

  const decreaseQuantity = () => {
    context.setcart((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id && item.quantity > 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return updatedCart;
    });
    toast.success("Item quantity decrease");
  };

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
      <li className="flex items-center gap-4 border border-black pr-3">
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
            ₹ {(price * 75.5).toFixed(0)}
          </h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Id - {id}</dt>
            </div>
          </dl>
        </Link>

        <div className="flex flex-1 items-center justify-end">
          <div className="border text-black">
            <button
              className="px-2 font-bold text-xl hover:text-red-500 hover:scale-75 bg-slate-400"
              onClick={increaseQuantity}
            >
              +
            </button>

            <h2 className="bg-slate-200 p-1 inline-block">Qty {quantity}</h2>
            <button
              className="px-2 font-bold text-xl hover:text-red-500 hover:scale-75 bg-slate-400"
              onClick={decreaseQuantity}
            >
              -
            </button>
          </div>

          <button
            onClick={() => removeFromCart(id)}
            className="text-gray-600 transition hover:text-red-600 "
          >
            <span className="sr-only">Remove item</span>
            <MdOutlineClear
              onClick={() => toast.success(`${title} remove from cart`)}
              className="h-5 w-5 hover:scale-90"
            />
          </button>
        </div>
      </li>
    </>
  );
}

export default CartItems;
