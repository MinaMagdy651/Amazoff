import { useEffect, useState } from "react";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.product;

const useGetProduct = (id) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(URL + id);
      if (response.status === 200) {
        setData(response.data);
        setLoading(false);
        setError(false);
      }
    } catch {
      setError(true);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [id]);
  return { data, loading, error };
};

export default useGetProduct;
