import { setDataAction } from "../Redux/shopSlicer";
import { useSelector, useDispatch } from "react-redux";
import axios from "../APIS/axios";
const TOKEN_CHECK = "/customer-token";

const useFetchToken = (data) => {
  const obj = useSelector((state) => state.obj.obj);

  const dispatch = useDispatch();
  const setData = (data) => {
    dispatch(setDataAction(data));
  };

  if (data !== "null" && data) {
    axios.defaults.headers.common["Authorization"] = "Bearer " + data;
    axios
      .get(TOKEN_CHECK)
      .then((response) => {
        if (obj.status === false) setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default useFetchToken;
