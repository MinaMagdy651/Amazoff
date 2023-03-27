import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setDataAction } from "../Redux/shopSlicer";
import { useDispatch } from "react-redux";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.register;

const useFetchRegister = (data) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setData = (data) => {
    dispatch(setDataAction(data));
  };
  const postData = async () => {
    setLoading(true);
    try {
      const response = await axios.post(URL, {
        name: data.name,
        email: data.email,
        password: data.password,
        address: data.address,
        dob: data.dob,
        gender: data.gender,
      });
      if (response.status === 200) {
        console.log("called");
        localStorage.setItem("access_token", response.data);
        sessionStorage.setItem("access_token", response.data);
        setLoading(false);
        setError(false);
        setData(data);
        navigate("/home");
      }
    } catch {
      setLoading(false);
      setError(true);
    }
  };
  useEffect(() => {
    if (data) {
      postData();
    }
    // eslint-disable-next-line
  }, [data]);
  return { loading, error };
};

export default useFetchRegister;
