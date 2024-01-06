import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/ProductContext";
import Loading from "../components/Loading";
import Products from "../components/Products";
import Error from "./Error";
import NavSecond from "../components/Navbar/NavSecond";

function ProductPage() {
  const { items, loading, error } = useProductContext();
  const [data, setdata] = useState([...items]);

  useEffect(() => {
    setdata([...items]);
  }, [items]);

  return (
    <>
      <NavSecond setdata={setdata} />
      {loading ? (
        <Loading />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <Products items={data} />
        </>
      )}
    </>
  );
}

export default ProductPage;
