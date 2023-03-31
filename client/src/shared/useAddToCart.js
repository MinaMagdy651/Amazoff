import { useSelector, useDispatch } from "react-redux";
import URL from "../APIS/url.json";
import axios from "../APIS/axios";
import { updateCartAction } from "../Redux/shopSlicer";
import { useEffect } from "react";
const url = URL.addToCart;

const useAddToCart = async (product_id, cartStatus, setCartStatus) => {
  const obj = useSelector((state) => state.obj.obj);
  let cart = obj.cart;
  const dispatch = useDispatch();
  const postData = async () => {
    try {
      const response = await axios.post(`${url}/${product_id}/add-to-cart`, {
        quantity: 1,
      });
      if (response.status === 200) {
        dispatch(updateCartAction(++cart));
        const notify = document.getElementById("notify");
        setTimeout(() => (notify.style.visibility = "hidden"), 2000);
        notify.style.visibility = "visible";
      } else {
        console.log(response);
        throw new Error("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setCartStatus(false);
    }
  };
  useEffect(() => {
    if (cartStatus) postData();
    // eslint-disable-next-line
  }, [cartStatus]);
};

export default useAddToCart;
