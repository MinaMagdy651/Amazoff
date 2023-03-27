import { updateCart } from "../../Redux/shopSlicer";
import "./style.css"
import { useDispatch} from 'react-redux';
import {useState} from 'react';
import axios from "../../APIS/axios";
import URL from "../../APIS/url.json"
const url = URL.removeCart;
const urlUpdate = URL.updateCart;

function ProductCardCart(probs){
    let [product, setProduct] = useState(probs.product);
    const dispatch = useDispatch();
    async function removeProduct(product_id){
        const response = await axios.delete(`${url}/${product_id}`);
        if(response.status === 200){
                let newProducts = probs.allProducts.filter(product => product.product_id !== product_id);
                probs.setAllProducts(newProducts)
                dispatch(updateCart(newProducts.length))
        }
    }
    async function updateQuantity(sign){
        if(sign == "+")
            setProduct({...product, quantity: ++product.quantity})  
        else
            setProduct({...product, quantity: product.quantity-1 >=0? --product.quantity: product.quantity})
        const response = await axios.patch(`${urlUpdate}/${product.product_id}` , {
            quantity: product.quantity
        })

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
                    <button onClick = {() => updateQuantity('-')}>-</button>
                    {/* {console.log(probs.product.quantity)} */}
                    <p>{product.quantity}</p>
                    <button onClick = {() => updateQuantity('+')}>+</button>
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