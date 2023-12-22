import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NavSecond from "./components/NavSecond";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import SearchItem from "./pages/SearchItem";

function App() {
  return (
    <Router>
      <Navbar />
      <NavSecond />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search/:term" element={<SearchItem />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
