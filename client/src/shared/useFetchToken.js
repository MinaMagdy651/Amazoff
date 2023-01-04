import axios from "../APIS/axios";
import { setDataAction } from "../Redux/shopSlicer";
import { useDispatch } from "react-redux";
const TOKEN_CHECK = "/customer-token";

const useFetchToken = (data) => {
  const dispatch = useDispatch();
  const setData = (data) => {
    dispatch(setDataAction(data));
  };

  if (data !== "null" && data) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + data;
    axios
      .get(TOKEN_CHECK)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default useFetchToken;
