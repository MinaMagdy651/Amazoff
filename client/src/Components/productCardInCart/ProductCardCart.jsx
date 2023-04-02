import "./style.css";
import { useState } from "react";
import useRemoveInCart from "../../shared/useRemoveInCart";
import useUpdateQuantityCart from "../../shared/useUpdateQuantityCart";
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


function ProductCardCart(probs) {
  let [product, setProduct] = useState(probs.product);
  let [removeProduct, setRemoveProduct] = useState(false);
  let [sign , setSign] = useState(["+", false]);

  useRemoveInCart(probs, removeProduct, setRemoveProduct);
  
  useUpdateQuantityCart(sign, setSign,product, setProduct, probs);

  return (
    <div className="row ">
      <div className="col card-product-card">
        <div className="imge">
          <img
            src={probs.product.url}
            alt={probs.product.product_id}
            width="10%"
          ></img>
        </div>
        <div className="prod_details">
          <p id="cat">{probs.product.category}</p>
          <p>{probs.product.name}</p>
        </div>
        <div className="prod_quantity">
          <button onClick={() => setSign(["-", true])}>-</button>
          {/* {console.log(probs.product.quantity)} */}
          <span>{probs.product.quantity}</span>
          <button onClick={() => setSign(["+" , true])}>+</button>
        </div>
        <div className="prod_price">
          <p>Price: {probs.product.price}$</p>
        </div>
        <div className="prod_remove">
          <button onClick={() => setRemoveProduct(true)}>
            <DeleteForeverIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCardCart;
