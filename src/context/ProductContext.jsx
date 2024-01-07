import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

const secretKey = "aoisdj98wedoliwae8d.oioo9hfrolsi9hwe[9"; // Replace with a strong secret key

const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

const decryptData = (encryptedData) => {
  const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
};

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseurl = "https://dummyjson.com";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const encryptedData = localStorage.getItem("token");

        if (encryptedData) {
          const decryptedData = decryptData(encryptedData);
          setItems(decryptedData);
          setLoading(false);
        } else {
          const response = await axios.get(`${baseurl}/products?limit=20`);
          const fetchedData = response.data.products;
          setItems(fetchedData);

          // Encrypt and cache the fetched data
          const encryptedDataToCache = encryptData(fetchedData);
          localStorage.setItem("token", encryptedDataToCache);

          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
        setError(`${error.message} Please Refresh Page`);
      }
    };

    fetchData();
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
