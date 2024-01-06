import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/E-Cart.webp";
import DataContext from "../../context/DataContext";
import { IoIosSearch } from "react-icons/io";

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
      <nav
        id="navbar"
        className="flex flex-row justify-between items-center px-1 sm:px-4 border-b border-slate-400 shadow shadow-slate-300"
      >
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-extrabold sm:text-2xl ">
          <img className="h-12 w-auto" src={logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-4">
          <div className="relative">
            <label className="sr-only" htmlFor="search">
              {" "}
              Search{" "}
            </label>

            <input
              className="h-8 w-full rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-72"
              id="search"
              type="search"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
            />

            <button
              type="button"
              className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 transition hover:text-gray-700"
            >
              <span className="sr-only">Search</span>
              <IoIosSearch
                className="h-4 w-4 cursor-pointer"
                onSubmit={handleSubmit}
              />
            </button>
          </div>
        </div>

        {/* E-commerce Basket */}
        <div className="flex items-center gap-5 m-1 px-2 py-2 ">
          <FaUser size={25} className="hidden text-white" />
          <Link
            to={"/cart"}
            className=" text-slate-700 relative border border-slate-400 p-1"
          >
            <FaShoppingCart size={25} className=" cursor-pointer" />
            <div className=" absolute top-[-8px] right-[-11px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
              {context.cart.length}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
