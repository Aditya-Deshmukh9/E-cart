import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import items from "../Utils/Items";
import Products from "../components/Products";
import { useProductContext } from "../context/ProductContext";

function SearchItem() {
  const [searchData, setSearchData] = useState([]);
  const { term } = useParams();
  const { items, loading } = useProductContext();

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((e) =>
        e.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchData(data);
    };

    filteredData();
  }, [term]);
  return (
    <div>
      {loading ? (
        <div className="w-full h-screen flex justify-center">
          <div
            className="animate-spin inline-block w-10 h-10 border-[3px] border-current border-t-transparent text-pink-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Products items={searchData} />
      )}
    </div>
  );
}

export default SearchItem;
