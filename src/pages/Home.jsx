import React, { useEffect, useState } from "react";
import Products from "../components/Products";
import NavSecond from "../components/Navbar/NavSecond";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursolProduct from "./CoursolProduct";
import { useProductContext } from "../context/ProductContext";

function Home() {
  const { items, loading } = useProductContext();
  const [data, setdata] = useState([...items]);

  useEffect(() => {
    setdata([...items]);
  }, [items]);
  return (
    <>
      <NavSecond setdata={setdata} />
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
        <Products items={data} />
      )}
      <CoursolProduct />
    </>
  );
}

export default Home;
