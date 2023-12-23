import items from "../Utils/Items";

function NavSecond({ setdata }) {
  const filterByCategory = (category) => {
    console.log(category);
    const mobilesFilter = items.filter((e) => e.category === category);
    setdata(mobilesFilter);
  };

  const filterByPrice = (price) => {
    const priceFilter = items.filter((e) => e.price >= price);
    setdata(priceFilter);
  };
  return (
    <div className="flex items-center justify-start text-black bg-indigo-800 py-2">
      <button
        className="text-white font-bold mx-4"
        onClick={() => setdata(items)}
      >
        No Filter
      </button>
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="w-40 items-center m-2 cursor-pointer text-lg rounded-lg font-semibold border-gray-300 text-Black focus:outline-none sm:text-base"
        onChange={(e) => filterByCategory(e.target.value)}
      >
        <option value="">Filter the Products</option>
        <option value="mobiles">Mobile</option>
        <option value="laptops">Laptop</option>
        <option value="tablets">Tablets</option>
      </select>
      <select
        name="HeadlineAct"
        id="HeadlineAct"
        className="w-40 items-center m-2 cursor-pointer text-lg rounded-lg font-semibold border-gray-300 text-Black focus:outline-none sm:text-base"
        onChange={(e) => filterByPrice(e.target.value)}
      >
        <option value=""></option>
        <option value="29999">{">="} 29999</option>
        <option value="49999">{">="} 49999</option>
        <option value="69999">{">="} 69999</option>
        <option value="89999">{">="} 89999</option>
      </select>
    </div>
  );
}

export default NavSecond;
