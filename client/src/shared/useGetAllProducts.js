import axios from "../APIS/axios";
const ALL_PRODUCTS = "/products";

const useGetAllProducts = () => {
  return axios
    .get(ALL_PRODUCTS)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
};
export default useGetAllProducts;
