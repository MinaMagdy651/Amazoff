import { useEffect } from "react";
import axios from "../APIS/axios";
const CHECK_EMAIL = "/login";

const useCheckEmail = (data) => {
  useEffect(() => {
    if (data) {
      axios
        .post(CHECK_EMAIL, {
          Email: "data.email",
          password: "data.password",
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
export default useCheckEmail;
