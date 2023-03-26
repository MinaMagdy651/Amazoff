import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setReviewsAction } from "../Redux/shopSlicer";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.reviewList;

const useFetchCustomerReviews = () => {
  const dispatch = useDispatch();
  const obj = useSelector((state) => state.obj.obj);

  useEffect(() => {
    if (obj.status) {
      axios
        .get(URL + obj.id)
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
