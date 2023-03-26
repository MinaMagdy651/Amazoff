import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { updateReviewsAction } from "../Redux/shopSlicer";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.addReview;
const useAddReview = (data) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const postData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(URL, data);
      if (response.status === 200) {
        dispatch(updateReviewsAction(data.product_id));
        console.log(response);
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
    // eslint-disable-next-line
  }, [data]);
  return { loading, error };
};
export default useAddReview;
