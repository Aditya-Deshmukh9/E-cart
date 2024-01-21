import React, { useState } from "react";
import { useProductContext } from "../context/ProductContext";
import { FaFilter } from "react-icons/fa";

function Practice({ setdata }) {
  const { items, loading } = useProductContext();
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("");
  const [btnsortType, setBtnSortType] = useState("");
  const [btnwiseCategory, setBtnwiseCategory] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  const filterByCategoryAndPrice = () => {
    let filteredItems = [...items];

    if (category || btnwiseCategory) {
      filteredItems = filteredItems.filter(
        (e) => e.category === category || btnwiseCategory
      );
    }

    if (sortType === "lowToHigh" || btnsortType === "lowToHigh") {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow" || btnsortType === "highToLow") {
      filteredItems.sort((a, b) => b.price - a.price);
    }
    if (btnwiseCategory) {
      filteredItems = filteredItems.filter(
        (e) => e.category === btnwiseCategory
      );
    }

    setdata(filteredItems);
  };

  return (
    <>
      <div className="m-2 max-w-screen">
        <div className="p-6">
          <h2 className="text-stone-700 text-xl font-bold inline-flex">
            <FaFilter className="mt-1 ml-1" />
            Apply Filters
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="flex flex-col">
              <label
                htmlFor="status"
                className="text-stone-600 text-sm font-medium"
              >
                Category
              </label>

              <select
                id="status"
                className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">All</option>
                {[...new Set(items.map((item) => item.category))].map(
                  (category, index) => (
                    <option key={index} value={category}>
                      {category} ({category.length})
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="status"
                className="text-stone-600 text-sm font-medium"
              >
                Price
              </label>

              <select
                id="status"
                className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="">All</option>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </select>
            </div>
          </div>

          <div className="mt-2 flex flex-wrap">
            <div>
              {[...new Set(items.map((item) => item.category))].map(
                (category, index) => (
                  <button
                    key={index}
                    value={category}
                    onClick={(e) => {
                      setBtnwiseCategory(e.target.value);
                      setActiveCategory(
                        activeCategory === category ? "" : category
                      );
                    }}
                    className={`border border-black px-2 mt-1 mx-2 rounded text-xs sm:text-sm hover:font-semibold ${
                      activeCategory === category ? "bg-indigo-500" : ""
                    }`}
                  >
                    {category}
                    <span>({category.length})</span>
                  </button>
                )
              )}
            </div>
            <button
              onClick={() => {
                setBtnSortType((prevSortType) =>
                  prevSortType === "highToLow" ? "" : "highToLow"
                );
              }}
              className={`border border-black px-2 mt-1 mx-2 text-xs sm:text-sm  rounded hover:bg-indigo-400 hover:font-semibold ${
                btnsortType === "highToLow" ? "bg-indigo-500" : ""
              }`}
            >
              High to low
            </button>

            <button
              onClick={() =>
                setBtnSortType((prevSortType) =>
                  prevSortType === "lowToHigh" ? "" : "lowToHigh"
                )
              }
              className={`border border-black px-2 mt-1 mx-2 text-xs sm:text-sm  rounded hover:bg-indigo-400 hover:font-semibold ${
                btnsortType === "lowToHigh" ? "bg-indigo-500" : ""
              }`}
            >
              Low to high
            </button>
          </div>

          <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button
              onClick={() => setdata(items)}
              className="active:scale-95 rounded-lg bg-gray-300 border px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90"
            >
              Reset
            </button>
            <button
              onClick={filterByCategoryAndPrice}
              className={`active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice;
