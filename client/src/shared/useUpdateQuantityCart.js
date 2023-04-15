import { useEffect } from "react";
import axios from "../APIS/axios";
import URL from "../APIS/url.json";
const urlUpdate = URL.updateCart;


const useUpdateQuantityCart = (sign , setSign, probs) => {
    const updateData = async () => {
        try{
            if (sign[0] === "+") ++probs.product.quantity;
            else
               probs.product.quantity =  probs.product.quantity - 1 >= 0 ? probs.product.quantity-1 : probs.product.quantity
            await axios.patch(`${urlUpdate}/${probs.product.product_id}`, {
                    quantity: probs.product.quantity,
            });
 
            probs.setAllProducts(probs.allProducts.map(productmapping => {
            console.log(probs.product)
            if(probs.product.product_id === productmapping.product_id) {
                console.log(probs.product.product_id + " " + productmapping.product_id);
                return probs.product;
            }
            return productmapping;
            }))
        }catch{}
        finally{
            setSign(["+", false]);
        }
       
        
    }

    useEffect(() => {
        if(sign[1]) updateData();
    }, [sign])
}

export default useUpdateQuantityCart;