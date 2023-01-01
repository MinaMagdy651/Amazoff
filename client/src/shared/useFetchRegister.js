import { useEffect } from "react";
import axios from "../APIS/axios";
import { useNavigate } from "react-router-dom";
import { setDataAction } from "../Redux/shopSlicer";
import { useDispatch } from "react-redux";
const REGISTER_URL = "/customer-register";

const useFetchRegister = (data) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const setData = (data) => {
    dispatch(setDataAction(data));
  };
  useEffect(() => {
    if (data) {
      console.log(data);
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
          if (data.remember_me) {
            localStorage.setItem("access_token", response.data.token);
            sessionStorage.setItem("access_token", response.data.token);
          } else sessionStorage.setItem("access_token", response.data.token);
          setData(data);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

export default useFetchRegister;
