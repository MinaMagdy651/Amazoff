import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./Components/products/products";
import Home from "./Components/home/home";
import Navbar from "./Components/navbar/navbar";
import Login from "./Components/login/login";
import Register from "./Components/register/register";
import Product from "./Components/product/product";
import Cart from "./Components/cart/cart";
import Footer from "./Components/footer/footer";
import Notify from "./Components/notify/Notify";
import NavbarSwithcer from "./Components/navbarSwithcer/navbarSwithcer";
import {
  useCustomerProducts,
  useCustomerReviews,
  useCheckToken,
} from "../src/shared/hooks";
import "./App.css";
// import Footer from "./Components/footer/footer";
function App() {
  if (localStorage.getItem("access_token")) {
    sessionStorage.setItem(
      "access_token",
      localStorage.getItem("access_token")
    );
  }

  useCheckToken(sessionStorage.getItem("access_token"));
  useCustomerProducts();
  useCustomerReviews();

  return (
    <Router>
      <NavbarSwithcer>
        <Navbar />
      </NavbarSwithcer>

      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search_query/:name" element={<Product></Product>}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Notify />
      <Footer></Footer>
    </Router>
  );
}

export default App;
