import React from "react";
import Products from "../components/Products";

function Home() {
  return (
    <div>
      <Products
        imgSrc="https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg"
        description="description"
        title="title"
      />
    </div>
  );
}

export default Home;
