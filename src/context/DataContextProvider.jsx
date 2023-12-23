import { useState } from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {
  const [myData, setMyData] = useState({
    name: "aditya",
    age: "20",
  });
  return (
    <DataContext.Provider value={{ myData, setMyData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
