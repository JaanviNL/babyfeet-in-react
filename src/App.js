
import Header from "./components/Header";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import WishList from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
