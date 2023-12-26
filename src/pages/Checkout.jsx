import React, { useContext } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import DataContext from "../context/DataContext";

function Checkout() {
  const context = useContext(DataContext);
  const checkoutItems = context.cart;
  try {
    return (
      <>
        <div className="w-full sm:mx-10 lg:mx-20">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead>
                <tr>
                  <th className="whitespace-nowrap px-2 sm:px-4 py-2 font-medium text-gray-900">
                    Title
                  </th>
                  <th className="whitespace-nowrap px-2 sm:px-4 py-2 text-gray-700">
                    ID
                  </th>
                  <th className="whitespace-nowrap px-2 sm:px-4 py-2 text-gray-700">
                    Price
                  </th>
                  <th className="whitespace-nowrap px-2 sm:px-4 py-2">
                    Actions
                  </th>
                </tr>
              </thead>
              {checkoutItems.map((item, index) => (
                <tbody key={index} className="divide-y divide-gray-200">
                  <tr key={item.id}>
                    <td className="whitespace-nowrap px-2 sm:px-4 py-2 font-medium text-gray-900">
                      {item.title}
                    </td>
                    <td className="whitespace-nowrap px-2 sm:px-4 py-2 text-gray-700">
                      {item.id}
                    </td>
                    <td className="whitespace-nowrap px-2 sm:px-4 py-2 text-gray-700">
                      {"₹ "}
                      {item.price}
                    </td>
                    <td className="whitespace-nowrap px-2 sm:px-4 py-2">
                      <Link
                        to={item.amazonLink}
                        className="inline-block rounded bg-indigo-600 px-2 sm:px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        Amazon Link
                      </Link>
                    </td>
                  </tr>
                </tbody>
              ))}
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
