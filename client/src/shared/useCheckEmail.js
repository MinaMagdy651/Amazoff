import { useEffect, useState } from "react";
import axios from "../APIS/axios";
const CHECK_EMAIL = "/customer-check-email";

const useCheckEmail = (data) => {
  const [error, setError] = useState(false);
  useEffect(() => {
    if (data) {
      axios
        .post(CHECK_EMAIL, {
          email: data,
        })
        .then((response) => {
          setError(false);
        })
        .catch((error) => {
          setError(true);
        });
    }
    // eslint-disable-next-line
  }, [data]);
  return [error];
};
export default useCheckEmail;
