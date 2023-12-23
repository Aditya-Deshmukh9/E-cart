import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from "../Utils/Items";
import Products from "../components/Products";

function SearchItem() {
  const [searchData, setSearchData] = useState([]);
  const { term } = useParams();

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
      <Products items={searchData} />
    </div>
  );
}

export default SearchItem;
