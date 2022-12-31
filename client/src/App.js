import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/home/home";
import Counter from "./Components/counter/counter";
import Navbar from "./Components/navbar/navbar";
import Login from "./Components/login/login";
import Register from "./Components/register/register";
import Product from "./Components/product/product";
import useFetchToken from "./shared/useFetchToken";
import Footer from "./Components/footer/footer";
function App() {
  useFetchToken(localStorage.getItem("access_token"));
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
