import React, { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/E-Cart.webp";
import DataContext from "../../context/DataContext";

const NewNav = () => {
  const [menu, setMenu] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  const context = useContext(DataContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setsearchTerm("");
  };

  return (
    <nav className="z-0 relative" id="navbar">
      <div className="relative z-1 shadow">
        <div className="max-w-7xl mx-auto sm:px-4 px-0 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center lg:px-0">
              <Link className="flex-shrink-0" to="/">
                <img
                  className="block lg:hidden h-8 sm:h-12 lg:h-10 w-full"
                  src={logo}
                  alt="Logo"
                />
                <img
                  className="hidden lg:block sm:h-12 w-auto"
                  src={logo}
                  alt="Logo"
                />
              </Link>
              <div className="hidden lg:block lg:ml-2">
                <div className="flex">
                  <Link
                    to="/"
                    className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-100  hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-500 "
                  >
                    {" "}
                    Home{" "}
                  </Link>
                  <Link
                    to="/products"
                    className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-100  hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-500 "
                  >
                    {" "}
                    Products{" "}
                  </Link>

                  <Link
                    to="#"
                    className="ml-4 px-3 py-2 rounded-md text-sm leading-5 font-medium text-gray-100  hover:bg-blue-500 hover:text-white transition duration-150 ease-in-out cursor-pointer focus:outline-none focus:text-white focus:bg-gray-500 "
                  >
                    {" "}
                    About{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative">
                <label className="sr-only" htmlFor="search">
                  Search
                </label>

                <input
                  className="h-8 w-24 rounded-full border-none bg-white pe-10 ps-4 text-sm shadow-sm  sm:w-72 lg:w-72"
                  id="search"
                  type="search"
                  placeholder="Search here"
                  value={searchTerm}
                  onChange={(e) => setsearchTerm(e.target.value)}
                />

                <button
                  type="button"
                  className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full p-2 text-gray-600 transition hover:text-gray-700"
                  onClick={handleSubmit}
                >
                  <span className="sr-only">Search</span>
                  <IoIosSearch className="h-4 w-4 cursor-pointer" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-5 m-1 px-2 py-2 ">
              <Link
                to={"/cart"}
                className=" text-slate-200 relative border border-slate-400 p-1"
              >
                <FaShoppingCart size={25} className=" cursor-pointer" />
                <div className=" absolute top-[-8px] right-[-11px] bg-red-600 w-[22px] h-[20px] rounded-full text-white text-sm grid place-items-center">
                  {context.cart.length}
                </div>
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                onClick={() => setMenu(!menu)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-50 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                aria-label="Main menu"
                aria-expanded="false"
              >
                <RiMenu3Line className="block h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
        <div className={menu ? "block md:hidden" : "hidden md:hidden"}>
          <div className="px-2 pt-2 pb-3">
            <Link
              to="/"
              className="mt-1 block px-3 py-2 rounded-md text-white font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Home{" "}
            </Link>
            <Link
              to="/products"
              className="mt-1 block px-3 py-2 rounded-md text-white font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              Products{" "}
            </Link>
            <Link
              to="#"
              className="mt-1 block px-3 py-2 rounded-md text-white font-medium hover:bg-yellow-500 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >
              About us{" "}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NewNav;
