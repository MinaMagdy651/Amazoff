import { useEffect } from "react";
import axios from "../APIS/axios";
import URL from "../APIS/url.json";
const urlUpdate = URL.updateCart;


const useUpdateQuantityCart = (sign , setSign, product, setProduct , probs) => {
    const updateData = async () => {
        if (sign[0] === "+") setProduct({ ...product, quantity: ++product.quantity });
        else
            setProduct({
            ...product,
            quantity:
                product.quantity - 1 >= 0 ? --product.quantity : product.quantity,
            });

        await axios.patch(`${urlUpdate}/${product.product_id}`, {
                quantity: product.quantity,
        });
        probs.setAllProducts(probs.allProducts.map(productmapping => {
            if(product.product_id == productmapping.product_id) return product;
            return productmapping;
        }))
        setSign("+", false);
    }

    useEffect(() => {
        if(sign[1]) updateData();
    }, [sign])
}

export default useUpdateQuantityCart;