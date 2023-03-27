import { useEffect, useState } from "react";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.checkEmail;

const useCheckEmail = (data) => {
  const [error, setError] = useState(false);

  const postData = async () => {
    try {
      const response = await axios.post(URL, { email: data });
      if (response.status === 200) setError(false);
      else setError(true);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    if (data) postData();
    // eslint-disable-next-line
  }, [data]);
  return { error };
};
export default useCheckEmail;
