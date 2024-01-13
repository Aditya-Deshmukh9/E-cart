import { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [cart, setcart] = useState([]);


  return (
    <DataContext.Provider value={{ cart, setcart }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
