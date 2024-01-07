import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import SearchItem from "./pages/SearchItem";
import { ToastContainer } from "react-toastify";
import Checkout from "./pages/Checkout";
import Loading from "./components/Loading";
import Error from "./pages/Error";
import NewNav from "./components/Navbar/NewNav";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";

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
      <NewNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/search/:term" element={<SearchItem />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/auth/checkout" element={<Checkout />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
