import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import SearchItem from "./pages/SearchItem";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";
import Practice from "./components/Practice";

function App() {
  return (
    <Router>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      {/* <Practice /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:term" element={<SearchItem />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/auth/checkout" element={<Checkout />} />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </Router>
  );
}

export default App;
