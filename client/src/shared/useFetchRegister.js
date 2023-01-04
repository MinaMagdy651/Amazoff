import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setDataAction } from "../Redux/shopSlicer";
import { useDispatch } from "react-redux";
import axios from "../APIS/axios";
const REGISTER_URL = "/customer-register";

const useFetchRegister = (data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setData = (data) => {
    dispatch(setDataAction(data));
  };
  useEffect(() => {
    if (data) {
      axios
        .post(REGISTER_URL, {
          name: data.name,
          email: data.email,
          password: data.password,
          address: data.address,
          dob: data.dob,
          gender: data.gender,
        })
        .then((response) => {
          localStorage.setItem("access_token", response.data);
          sessionStorage.setItem("access_token", response.data);
          setData(data);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [data]);
};

export default useFetchRegister;
