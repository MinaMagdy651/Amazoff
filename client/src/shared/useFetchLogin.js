import { useEffect } from "react";
import axios from "axios";
const useFetchLogin = (data) => {
  useEffect(() => {
    if (data) {
      axios
        .post("http://localhost:3500/login", {
          Email: data.email,
          password: data.password,
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
export default useFetchLogin;
