import { useEffect } from "react";
import axios from "../APIS/axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setPurchaseAction } from "../Redux/shopSlicer";
const CUSTOMER_PURCHASE = "/customer-purchases/";
const useFetchCustomerProducts = () => {
  const dispatch = useDispatch();
  const obj = useSelector((state) => state.obj.obj);

  useEffect(() => {
    if (obj.status) {
      axios
        .get(CUSTOMER_PURCHASE + obj.id)
        .then((response) => {
          var data = [];
          response.data.map((product_id) => data.push(product_id.product_id));
          dispatch(setPurchaseAction(data));
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line
  }, [obj?.status]);
};
export default useFetchCustomerProducts;
