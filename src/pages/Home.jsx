import React, { useState } from "react";
import Products from "../components/Products";
import items from "../Utils/Items";
import NavSecond from "../components/Navbar/NavSecond";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursolProduct from "./CoursolProduct";
// import Practice from "../components/Practice";

function Home() {
  const [data, setdata] = useState([...items]);

  return (
    <>
      <NavSecond setdata={setdata} />
      {/* <Practice setdata={setdata} /> */}
      <Products items={data} />
      <CoursolProduct />
    </>
  );
}

export default Home;
