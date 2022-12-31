import axios from "../APIS/axios";
const PRODUCT_SEARCH = "/product?name=";

const useSearchProduct = (data) => {
  if (data !== "") {
    return axios
      .get(PRODUCT_SEARCH + data.toLowerCase())
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }
};

export default useSearchProduct;
