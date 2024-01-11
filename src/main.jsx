import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import DataContextProvider from "./context//DataContextProvider.jsx";
import { ProductProvider } from "./context/ProductContext.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>

      <ProductProvider>
        <DataContextProvider>

          <App />
        </DataContextProvider>
      </ProductProvider>
    </Provider>
  </React.StrictMode>
);
