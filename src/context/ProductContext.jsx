import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseurl = "https://myserver2-hfc4.onrender.com";

  useEffect(() => {
    axios
      .get(`${baseurl}/api/data`)
      .then((response) => {
        setItems(response.data);
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
