import axios from "../APIS/axios";
const ALL_PRODUCTS = "/products";

const useGetAllProducts = () => {
  axios
    .get(ALL_PRODUCTS)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default useGetAllProducts;
