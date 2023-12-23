import React, { useContext, useState } from "react";
import Products from "../components/Products";
import items from "../Utils/Items";
import NavSecond from "../components/NavSecond";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoursolProduct from "./CoursolProduct";
import DataContext from "../context/DataContext";

function Home() {
  const [data, setdata] = useState([...items]);
  const { myData } = useContext(DataContext);

  console.log(myData);
  return (
    <>
      <NavSecond setdata={setdata} />
      <Products items={data} />
      <CoursolProduct />
    </>
  );
}

export default Home;
