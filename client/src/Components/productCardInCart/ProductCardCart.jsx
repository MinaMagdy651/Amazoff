import { updateCart } from "../../Redux/shopSlicer";
import "./style.css"
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';

function ProductCardCart(probs){
    let [product, setProduct] = useState(probs.product);
    const obj = useSelector((state) => state.obj.obj);
    const dispatch = useDispatch();
    function removeProduct(product_id){
        let newProducts = probs.allProducts.filter(product => product.product_id != product_id)
        probs.setAllProducts(newProducts)
        dispatch(updateCart(newProducts.length))
    }
    return (
        <div className = "row ">
            <div className = "col card-product-card">
                <div className="imge">
                    <img src = {probs.product.url} alt = {probs.product.product_id} width = "20%"></img>
                </div>
                <div className = "prod_details">
                    <p id ="cat">{probs.product.category}</p>
                    <p>{probs.product.name}</p>
                </div>
                <div className="prod_quantity">
                    <button onClick = {() => setProduct({...product, quantity: product.quantity-1 >=0? --product.quantity: product.quantity})}>-</button>
                    <p>{product.quantity}</p>
                    <button onClick = {() => setProduct({...product, quantity: ++product.quantity})}>+</button>
                </div>
                <div className = "prod_price">
                    <p>Price: {probs.product.price}$</p>
                </div>
                <div className="prod_remove">
                    <button onClick = {() => removeProduct(probs.product.product_id)}>Remove</button>
                </div>
            </div>
        </div>
    );
}

export default ProductCardCart;