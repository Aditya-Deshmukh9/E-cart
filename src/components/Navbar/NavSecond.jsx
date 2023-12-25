import React, { useContext, useState } from "react";
import DataContext from "../../context/DataContext";

function Practice({ setdata }) {
  const context = useContext(DataContext);
  const items = context.items;
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isFilterOpen, setisFilterOpen] = useState(false);

  const filterByCategoryAndPrice = () => {
    let filteredItems = items;

    if (category) {
      filteredItems = filteredItems.filter((e) => e.category === category);
    }

    if (price) {
      filteredItems = filteredItems.filter((e) => e.price >= parseFloat(price));
    }

    setdata(filteredItems);
  };

  const toggleFilter = () => {
    setisFilterOpen(!isFilterOpen);
  };

  return (
    <>
      <button
        className="my-2 mx-1 rounded bg-indigo-600 text-white border  p-2 text-sm font-medium transition hover:scale-105"
        onClick={toggleFilter}
      >
        Toggle Filter
      </button>
      {isFilterOpen && (
        <div className="m-2 max-w-screen">
          <div className="rounded-xl border border-gray-400 bg-white p-6 shadow-lg">
            <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
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
                  <option value="mobiles">Mobile</option>
                  <option value="laptops">Laptop</option>
                  <option value="tablets">Tablets</option>
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  <option value="29999">0 to 29999</option>
                  <option value="49999">49999+</option>
                  <option value="69999">69999+</option>
                  <option value="89999">89999+</option>
                </select>
              </div>
            </div>

            <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
              <button
                onClick={() => setdata(items)}
                className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90"
              >
                Reset
              </button>
              <button
                onClick={filterByCategoryAndPrice}
                className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Practice;
