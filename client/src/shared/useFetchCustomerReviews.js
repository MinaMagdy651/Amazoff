import { useEffect } from "react";
import axios from "../APIS/axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setReviewsAction } from "../Redux/shopSlicer";
const CUSTOMER_REVIEWS = "/product-reviewed/";

const useFetchCustomerReviews = () => {
  const dispatch = useDispatch();
  const obj = useSelector((state) => state.obj.obj);

  useEffect(() => {
    if (obj.status) {
      axios
        .get(CUSTOMER_REVIEWS + obj.id)
        .then((response) => {
          var data = [];
          response.data.map((product_id) => data.push(product_id.product_id));
          dispatch(setReviewsAction(data));
        })
        .catch((error) => console.log(error));
    }
    // eslint-disable-next-line
  }, [obj?.status]);
};
export default useFetchCustomerReviews;
