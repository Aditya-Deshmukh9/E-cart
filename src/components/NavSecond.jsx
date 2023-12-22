import React from "react";

function NavSecond() {
  return (
    <div className="flex items-center justify-start text-black bg-indigo-800 py-2">
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="w-40 items-center m-2 text-lg rounded-lg font-semibold border-gray-300 text-Black focus:outline-none sm:text-base"
      >
        <option value="">Filter the Products</option>
        <option value="Mobiles">John MayMobiles</option>
        <option value="Laptop">Laptop</option>
        <option value="Tablets">Tablets</option>
        <option value="29999">{">="} 29999</option>
        <option value="49999">{">="} 49999</option>
        <option value="69999">{">="} 69999</option>
        <option value="89999">{">="} 89999</option>
      </select>
    </div>
  );
}

export default NavSecond;
