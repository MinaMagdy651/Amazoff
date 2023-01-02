import { useEffect } from "react";
import axios from "../APIS/axios";
const CHECK_EMAIL = "/customer-check-email";

const useCheckEmail = (data) => {
  useEffect(() => {
    if (data) {
      axios
        .post(CHECK_EMAIL, {
          email: data,
        })
        .then((response) => {
          console.log("response", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // eslint-disable-next-line
  }, [data]);
};
export default useCheckEmail;
