import { useEffect } from "react";
import axios from "../APIS/axios";
const REGISTER_URL = "/register";

const useFetchRegister = (data) => {
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
          console.log("response", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });
};

export default useFetchRegister;
