import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import SearchItem from "./pages/SearchItem";
import Checkout from "./pages/Checkout";
import Loading from "./components/Loading";
import Error from "./pages/Error";
import Navbar from "./components/Navbar/Navbar";
import ProductPage from "./pages/ProductPage";
import About from "./pages/About";
import YorComponent from "./pages/YorComponent";
import { Toaster } from "react-hot-toast";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/y" element={<YorComponent />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/search/:term" element={<SearchItem />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/auth/checkout" element={<Checkout />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
