import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import Loading from "../components/Loading";
import Products from "../components/Products";
import Error from "./Error";
import Filters from "../components/Filters";

function ProductPage() {
  const { items, loading, error } = useProductContext();
  const [data, setdata] = useState([...items]);

  useEffect(() => {
    setdata([...items]);
  }, [items]);

  return (
    <div className="h-full w-full">
      <Filters setdata={setdata} />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <Products items={data} />
        </>
      )}
    </div>
  );
}

export default ProductPage;
