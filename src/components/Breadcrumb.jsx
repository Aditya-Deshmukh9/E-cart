import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      className="flex justify-start text-gray-700 border border-gray-200 py-1 sm:py-3 rounded-lg dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <ol className="inline-flex items-center ml-5 space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="text-sm text-gray-700 hover:text-gray-900 inline-flex items-center dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            Home
          </Link>
        </li>
        {pathnames.map((path, index) => (
          <React.Fragment key={index}>
            <li>
              <div className="flex items-center">
                <div className="text-gray-700 hover:text-gray-900 text-sm font-medium dark:text-gray-400 dark:hover:text-white">
                  <span className="text-gray-800 font-bold mr-2">{">"}</span>
                  {path}
                </div>
              </div>
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
