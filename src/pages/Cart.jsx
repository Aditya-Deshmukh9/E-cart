import React from "react";;
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";
import CoursolProduct from "./CoursolProduct";
import { useSelector } from "react-redux";
import { getTotal } from "../Redux/fetures/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.items)
  const total = useSelector(getTotal);

  const formatNumberWithCommas = (number) => {
    return number.toLocaleString('en-IN', {
      maximumFractionDigits: 2,
      style: 'currency',
      currency: 'INR',
    });
  };

  const totalprice = formatNumberWithCommas(total);


  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          {cartItems.length === 0 ? (
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
            <div className="mx-auto max-w-3xl">
              <header className="text-center">
                <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                  Your Cart({cartItems.length})
                </h1>
              </header>

              <div className="mt-8">
                <ul className="space-y-4">
                  {cartItems.map((item, index) => (
                    <CartItems key={index} {...item} />
                  ))}
                </ul>

                <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
                  <div className="w-screen max-w-lg space-y-4">
                    <dl className="space-y-0.5 text-sm text-gray-700">
                      <div className="flex justify-between !text-base font-medium">
                        <dt>Total</dt>
                        <dd>
                          {totalprice}
                        </dd>
                      </div>
                    </dl>

                    <div className="flex justify-end">
                      <Link

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
