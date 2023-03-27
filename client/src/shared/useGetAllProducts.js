import { useEffect, useState } from "react";
import axios from "../APIS/axios";
import urls from "../APIS/url.json";
const URL = urls.allProducts;

const useGetAllProducts = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios.get(URL);
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
  }, []);
  return { data, loading, error };
};
export default useGetAllProducts;
