import { setDataAction } from "../Redux/shopSlicer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.login;

const useFetchLogin = (data) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const setData = (data) => {
    dispatch(setDataAction(data));
  };
  const navigate = useNavigate();
  const postData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(URL, {
        email: data.email,
        password: data.password,
      });
      if (response.status === 200) {
        if (data.remember_me) {
          localStorage.setItem("access_token", response.data.token);
          sessionStorage.setItem("access_token", response.data.token);
        } else {
          sessionStorage.setItem("access_token", response.data.token);
        }
        setData(response.data);
        navigate("/home");
        setLoading(false);
        setError(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (data) postData();
    // eslint-disable-next-line
  }, [data]);
  return { error, loading };
};
export default useFetchLogin;