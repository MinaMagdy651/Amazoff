import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./style.css";

let noProducts = 
<div className= "root">
    <div class = "container cartContainer">
        <div class = "row">
            <div class = "noProductMessage">
            <h2>Your Amazoff Cart is empty.</h2>
                <p>Your shopping basket lives to serve. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more.
                Continue shopping on <Link to = "/home"> Homepage</Link>
                </p>
            </div>
        </div>
    </div>
</div>;

let products = 
<div className= "root">
    <div class = "container cartContainerProducts">
        <h2 style = {{textAlign: "center"}}>My Shopping Cart</h2>
        
    </div>
</div>

function Cart(){
    const obj = useSelector((state) => state.obj.obj);

    return obj.counter === true? noProducts : products;
    
}

export default Cart;