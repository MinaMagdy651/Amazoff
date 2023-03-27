import axios from "../APIS/axios";
import { useState, useEffect } from "react";
import urls from "../APIS/url.json";
const URL = urls.productsCategory;


const useGetProductsCategories = () =>{
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
      }, []);
      return { data, loading, error };

}

export default useGetProductsCategories;
