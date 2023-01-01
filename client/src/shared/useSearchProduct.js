import axios from "../APIS/axios";
const PRODUCT_SEARCH = "/product?name=";

function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}
const useSearchProduct = (data) => {
  if (!isEmptyOrSpaces(data)) {
    return axios
      .get(PRODUCT_SEARCH + data.toLowerCase())
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
      });
  }
};

export default useSearchProduct;
