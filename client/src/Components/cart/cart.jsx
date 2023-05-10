import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { useEffect } from "react";
import axios from "../../APIS/axios";
import URL from "../../APIS/url.json";
import Productgrid from "../product_grid/product_grid";
const url = URL.getCart;

let noProducts = () => {
  return (
    <div className="root">
      <div className="container cartContainer">
        <div className="row">
          <div className="noProductMessage">
            <h2>Your Amazoff Cart is empty.</h2>
            <p>
              Your shopping basket lives to serve. Give it purpose – fill it
              with groceries, clothing, household supplies, electronics and
              more. Continue shopping on <Link to="/home"> Homepage</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

let withProducts = (products, setAllProducts) => {
  return (
    <div className="root">
      <div className="container cartContainerProducts">
        <div className="title">
          <h2 style={{ textAlign: "center" }}>My Shopping Cart</h2>
          <p>items: {products.length}</p>
        </div>

        <div className="row">
          <Productgrid
            allProducts={products}
            setAllProducts={setAllProducts}
            cart={true}
          ></Productgrid>
        </div>
      </div>
    </div>
  );
};

function Cart() {
  const obj = useSelector((state) => state.obj.obj);
  let [products, setProducts] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return obj.cart === 0 || products.length === 0
    ? noProducts()
    : withProducts(products, setProducts);
}

export default Cart;
