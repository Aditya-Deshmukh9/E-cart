import React, { useState } from "react";
import { useProductContext } from "../../context/ProductContext";

function Practice({ setdata }) {
  const { items, loading } = useProductContext();
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("");


  const filterByCategoryAndPrice = () => {
    let filteredItems = [...items];

    if (category) {
      filteredItems = filteredItems.filter((e) => e.category === category);
    }

    if (sortType === "lowToHigh") {
      filteredItems.sort((a, b) => a.price - b.price);
    } else if (sortType === "highToLow") {
      filteredItems.sort((a, b) => b.price - a.price);
    }

    console.log(filteredItems);
    console.log(rating);

    setdata(filteredItems);
  };

  return (
    <>
      <div className="m-2 max-w-screen">
        <div className="p-6">
          <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
          <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Category Filter */}
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
                      {category}
                    </option>
                  )
                )}
              </select>
            </div>
            {/* Price wise */}
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

          <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
            <button
              onClick={() => setdata(items)}
              className="active:scale-95 rounded-lg bg-gray-300 border px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90"
            >
              Reset
            </button>
            <button
              onClick={filterByCategoryAndPrice}
              className={`active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90 ${loading ? "opacity-50 cursor-not-allowed" : ""
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
