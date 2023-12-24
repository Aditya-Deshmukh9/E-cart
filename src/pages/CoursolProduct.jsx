import React from "react";
import NewProductCard from "../components/NewProductCard";
import Slider from "react-slick";
import items from "../Utils/Items";

function CoursolProduct() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      <div>
        <h1 className=" font-semibold text-4xl text-center text-ExtraDarkColor">
          Best sellers
        </h1>
      </div>
      <div className="mt-8">
        <Slider {...settings}>
          {items.map((item, index) => (
            <NewProductCard key={index} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CoursolProduct;
