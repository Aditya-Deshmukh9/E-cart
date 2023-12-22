import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <>
      {/* Top Nav */}
      <div className="bg-indigo-950 flex flex-row justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          E-Cart
        </Link>

        {/* Search Bar */}
        <div className="relative">
          <label className="sr-only" htmlFor="search">
            {" "}
            Search{" "}
          </label>

          <input
            className="h-8 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search website..."
          />

          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* E-commerce Basket */}
        <Link to={"/cart"}>
          <div className="flex items-center">
            <MdShoppingCart className="h-7 w-7 text-white" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default Navbar;
