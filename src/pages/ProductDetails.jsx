import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import MyImages from "../components/MyImages";
import Products from "../components/Products";
import CoursolProduct from "./CoursolProduct";
import DataContext from "../context/DataContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Breadcrumbs from "../components/Breadcrumb";

function ProductDetails() {
  const { id } = useParams();
  const { items, loading } = useProductContext();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const context = useContext(DataContext);

  const addToCart = (id, price, title, description, thumbnail) => {
    const obj = {
      id,
      price,
      title,
      description,
      thumbnail,
    };
    context.setcart([...context.cart, obj]);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    const filterProduct = items.filter((e) => e.id == id);
    setProduct(filterProduct[0] || {});

    const Related = items.filter((e) => e.category == product.category);
    setRelatedProducts(Related);
  }, [id, items, product.category]);

  return (
    <>
      {loading && !product.id ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="mt-2">
            <Breadcrumbs />
          </div>
          <section
            key={id}
            className="overflow-hidden py-2 font-poppins dark:bg-gray-800"
          >
            <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full mb-8 md:w-1/2 md:mb-0">
                  {/* Image Section */}
                  <MyImages
                    imgs={product.images}
                    thumbnail={product.thumbnail}
                  />
                </div>

                {/* Left S_ide Section */}
                <div className="w-full px-4 md:w-1/2 ">
                  <div className="lg:pl-20">
                    <div className="mb-8 ">
                      <h2 className="max-w-xl mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                        {product.title}
                      </h2>
                      <p className="inline-block mb-6 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                        <span>₹ {(product.price * 75.5).toFixed(0)}</span>
                        <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                          {"₹ "}199999
                        </span>
                      </p>
                      <p className="max-w-md text-xl text-gray-700 dark:text-gray-400">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() =>
                          addToCart(
                            product.id,
                            product.price,
                            product.title,
                            product.description,
                            product.thumbnail
                          )
                        }
                        className="w-full p-4 bg-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-700"
                      >
                        Add to cart
                      </button>
                      <button className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md lg:w-2/5 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-500 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
      <Products items={relatedProducts} />
      <CoursolProduct />
    </>
  );
}

export default ProductDetails;
