import { updateCartAction } from "../Redux/shopSlicer";
import { useEffect } from "react";
import axios from "../APIS/axios";
import URL from "../APIS/url.json";
import { useDispatch } from "react-redux";
const url = URL.removeCart;


const useRemoveInCart = async (probs, removeProduct, setRemoveProduct) => {
    const dispatch = useDispatch();

    const deleteData = async () => {
        const response = await axios.delete(`${url}/${probs.product.product_id}`);
        if (response.status === 200) {
          const newProducts = probs.allProducts.filter(
            (product) => product.product_id !== probs.product.product_id
          );
        
        probs.setAllProducts(newProducts);
        
        dispatch(updateCartAction(newProducts.length));
        }
        setRemoveProduct(false);
    
    }

    useEffect(() => {
        if(removeProduct) deleteData();
    } , [removeProduct])

}

export default useRemoveInCart;