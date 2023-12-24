import React, { useContext } from "react";
import DataContext from "../context/DataContext";
import ProductList from "../components/Checkout/ProductList";

function Checkout() {
  const context = useContext(DataContext);
  const checkoutItems = context.cart;
  console.log(checkoutItems);

  try {
    return (
      <>
        <div className="w-full sm:mx-10 lg:mx-20">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <div>
                {checkoutItems.map((e, index) => (
                  <ProductList key={index} {...e} />
                ))}
              </div>
            </table>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.log("error", error);
  }
}

export default Checkout;
