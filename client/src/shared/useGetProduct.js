import axios from "../APIS/axios";
const PRODUCT = "/product/";

const useGetProduct = (id) => {
  if (id) {
    return axios
      .get(PRODUCT + id)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }
};

export default useGetProduct;
