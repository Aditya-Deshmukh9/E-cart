import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseurl = "https://dummyjson.com";

  useEffect(() => {
    axios
      .get(`${baseurl}/products?limit=20`)
      .then((response) => {
        setItems(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setError(`${error.message} Please Refresh Page`);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ items, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
