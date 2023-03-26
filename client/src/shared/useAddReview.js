import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateReviewsAction } from "../Redux/shopSlicer";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.addReview;
const useAddReview = (data) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const postData = async () => {
    try {
      const response = await axios.post(URL, data);
      if (response.status === 200) {
        dispatch(updateReviewsAction(data.product_id));
        setLoading(false);
        setError(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (Object.keys(data).length !== 0) postData();
  });
  return { loading, error };
};
export default useAddReview;
//title description rating product_id customer_id
