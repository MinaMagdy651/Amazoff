import { setDataAction } from "../Redux/shopSlicer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../APIS/axios";
const LOGIN_URL = "/customer-login";

const useFetchLogin = (data) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const setData = (data) => {
    dispatch(setDataAction(data));
  };
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      axios
        .post(LOGIN_URL, {
          email: data.email,
          password: data.password,
        })
        .then((response) => {
          if (data.remember_me) {
            localStorage.setItem("access_token", response.data.token);
            sessionStorage.setItem("access_token", response.data.token);
          } else {
            sessionStorage.setItem("access_token", response.data.token);
          }
          setData(response.data);
          navigate("/home");
        })
        .catch((error) => {
          setError(true);
        });
    }
    // eslint-disable-next-line
  }, [data]);
  return [error];
};
export default useFetchLogin;
