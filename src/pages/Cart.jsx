import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";
import CoursolProduct from "./CoursolProduct";

function Cart() {
  const context = useContext(DataContext);
  const cartProduct = context.cart;


  const getTotal = () => {
    let total = 0;
    cartProduct.forEach((item) => (total = total + item.price));
    return total;
  };

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {cartProduct.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart is Empty
              </h1>
              <Link
                to={"/"}
                className="w-80 rounded bg-yellow-400 p-2 mt-10 text-xl font-medium transition hover:scale-105"
              >
                Contune Shopping...
              </Link>
            </div>
          ) : (
            // cart is Filed
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Your Cart
                </h1>
              </header>

              <div className="mt-8">
                <ul className="space-y-4">
                  {cartProduct.map((item, index) => (
                    <CartItems key={index} {...item} />
                  ))}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>
                          {"₹ "}
                          {getTotal()}.00
                        </dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <Link
                        to={"/auth/checkout"}
                        className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
                      >
                        Checkout
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <CoursolProduct />
    </>
  );
}

export default Cart;
