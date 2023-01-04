import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/home";
import Counter from "./Components/counter/counter";
import Navbar from "./Components/navbar/navbar";
import Login from "./Components/login/login";
import Register from "./Components/register/register";
import Product from "./Components/product/product";
import useFetchToken from "./shared/useFetchToken";
import useFetchCustomerProducts from "./shared/useFetchCustomerProducts";
import useFetchCustomerReviews from "./shared/useFetchCustomerReviews";
// import Footer from "./Components/footer/footer";
function App() {
  if (localStorage.getItem("access_token")) {
    sessionStorage.setItem(
      "access_token",
      localStorage.getItem("access_token")
    );
  }

  useFetchToken(sessionStorage.getItem("access_token"));
  useFetchCustomerProducts();
  useFetchCustomerReviews();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/search_query/:name" element={<Product></Product>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </Router>
  );
}

export default App;
