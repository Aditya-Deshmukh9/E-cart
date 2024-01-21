import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import CryptoJS from "crypto-js";

const secretKey = "aoisdj98wedoliwae8d.oioo9hfrolsi9hwe[9h54656yt5%%#@#@@v";

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
        setLoading(true);

        const encryptedData = localStorage.getItem("token");

        if (encryptedData) {
          try {
            const decryptedData = decryptData(encryptedData);
            setItems(decryptedData);
          } catch (decryptionError) {
            console.error("Decryption Error:", decryptionError);

            localStorage.removeItem("token");
          }
        } else {
          const response = await axios.get(`${baseurl}/products?limit=30`);
          const fetchedData = response.data.products;

          const encryptedDataToCache = encryptData(fetchedData);
          localStorage.setItem("token", encryptedDataToCache);

          setItems(fetchedData);
        }
      } catch (error) {
        setError(`${error.message}. Please refresh the page.`);
      } finally {
        setLoading(false);
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
