import { useParams } from "react-router-dom";
import useGetProduct from "../../shared/useGetProduct";

function Product(probs) {
  const id = useParams().id;
  console.log(id);
  useGetProduct(id);
  return <h1>{id}</h1>;
}

export default Product;
