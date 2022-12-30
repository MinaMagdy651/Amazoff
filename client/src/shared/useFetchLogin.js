import axios from "../APIS/axios";
import { setDataAction } from "../Redux/shopSlicer";
import { useDispatch } from "react-redux";

const LOGIN_URL = "/customer-login";

const useFetchLogin = (data) => {
  const dispatch = useDispatch();
  const setData = (data) => {
    dispatch(setDataAction(data));
  };

  if (data) {
    axios
      .post(LOGIN_URL, {
        email: data.email,
        password: data.password,
      })
      .then((response) => {
        localStorage.setItem("access_token", response.data.token);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};
export default useFetchLogin;
