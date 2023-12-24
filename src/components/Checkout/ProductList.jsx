import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ id, price, title, amazonLink }) => {
  return (
    <>
      <tbody className="divide-y divide-gray-200">
        <tr>
          <td className="whitespace-nowrap px-2 sm:px-4 py-2 font-medium text-gray-900">
            {title}
          </td>
          <td className="whitespace-nowrap px-2 sm:px-4 py-2 text-gray-700">
            {id}
          </td>
          <td className="whitespace-nowrap px-2 sm:px-4 py-2 text-gray-700">
            {"₹ "}
            {price}
          </td>
          <td className="whitespace-nowrap px-2 sm:px-4 py-2">
            <Link
              to={amazonLink}
              className="inline-block rounded bg-indigo-600 px-2 sm:px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              Amazon Link
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ProductList;
