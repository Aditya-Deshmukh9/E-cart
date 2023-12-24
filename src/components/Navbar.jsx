import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import DataContext from "../context/DataContext";

function Navbar() {
  const [searchTerm, setsearchTerm] = useState("");
  const context = useContext(DataContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setsearchTerm("");
  };

  return (
    <>
      {/* Top Nav */}
      <div className="bg-indigo-950 flex flex-row justify-between px-4 py-2">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          E-Cart
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="relative">
          <input
            className="h-8 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
            id="search"
            type="search"
            placeholder="Search website..."
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />

          <button
            type="button"
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
          >
            <span className="sr-only">Search</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
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
        </form>

        {/* E-commerce Basket */}
        <div className="flex items-center gap-5 m-1 px-2">
          <FaUser size={25} className=" text-white" />
          <Link to={"/cart"} className=" text-white relative">
            <FaShoppingCart size={25} className=" cursor-pointer" />
            <div className=" absolute top-[-11px] right-[-11px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
              {context.cart.length}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
