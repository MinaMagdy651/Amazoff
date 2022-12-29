import axios from "../APIS/axios";
const PRODUCT = "/product/";

const useGetProduct = (id) => {
  console.log(id);
  if (id) {
    axios
      .get(PRODUCT + id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export default useGetProduct;
