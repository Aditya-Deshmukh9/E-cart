import { useState } from "react";
import DataContext from "./DataContext";
import items from "../Utils/Items";

const DataContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);

  return (
    <DataContext.Provider value={{ cart, setcart, items }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
