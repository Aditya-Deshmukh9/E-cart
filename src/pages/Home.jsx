import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import NavSecond from "../components/Navbar/NavSecond";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursolProduct from "./CoursolProduct";
import { useProductContext } from "../context/ProductContext";
import Loading from "../components/Loading";
import Error from "./Error";

function Home() {
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
          <CoursolProduct />
        </>
      )}
    </>
  );
}

export default Home;
