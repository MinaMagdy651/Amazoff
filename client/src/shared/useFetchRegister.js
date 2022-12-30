import { useEffect } from "react";
import axios from "../APIS/axios";
import { useNavigate } from "react-router-dom";
const REGISTER_URL = "/customer-register";

const useFetchRegister = (data) => {
  const navigate = useNavigate();
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
          console.log("response", response.data);
          localStorage.setItem("access_token", response.data);
          navigate("/home");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

export default useFetchRegister;
