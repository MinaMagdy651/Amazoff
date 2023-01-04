import { useDispatch } from "react-redux";
import { updateReviewsAction } from "../Redux/shopSlicer";
import axios from "../APIS/axios";
const ADD_REVIEW = "/product/addreview";
const useAddReview = (data) => {
  const dispatch = useDispatch();
  if (Object.keys(data).length !== 0) {
    axios.defaults.headers.post["Authorization"] =
      "Bearer " + sessionStorage.getItem("access_token");
    axios
      .post(ADD_REVIEW, data)
      .then(() => {
        dispatch(updateReviewsAction(data.product_id));
      })
      .catch((error) => console.log(error));
  }
};
export default useAddReview;
//title description rating product_id customer_id
