import axios from "../APIS/axios";
const PRODUCT_SEARCH = "/product?name=";

const useSearchProduct = (data) => {
  console.log(data);
  var searchSuggestions = [];
  if (data) {
    axios
      .get(PRODUCT_SEARCH + data)
      .then((response) => {
        console.log(response);
        searchSuggestions = response;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return searchSuggestions;
};

export default useSearchProduct;
