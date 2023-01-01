import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useGetProduct from "../../shared/useGetProduct";
import Review from "../review/review";

function Product(probs) {
  const reviews = [
    {
      customer_name: "Mina",
      review_id: 1,
      title: "Title",
      description: "gamed awy",
      rating: 4.5,
    },

    {
      customer_name: "msh mina",
      review_id: 2,
      title: "another title",
      description: "",
      rating: 2,
    },

    {
      customer_name: "aloyka",
      review_id: 3,
      title: "by2olo 7lw",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, optio. Quibusdam, quia explicabo assumenda distinctio iusto eveniet quisquam non perferendis eaque? Fuga esse, atque dolorum reprehenderit rem minus perferendis numquam.",
      rating: 3.5,
    },
  ];

  const [product, setProduct] = useState({});
  const id = useParams().id;
  const p = useGetProduct(id);
  useEffect(() => {
    async function execute() {
      try {
        const value = await p;
        if (value) setProduct(value);
        else setProduct({});
      } catch (err) {
        console.log(err);
      }
    }
    execute();
    // eslint-disable-next-line
  }, []);
  console.log(product);
  return (
    <div className="container">
      <h1>{id}</h1>
      {product.product_id}
      <Review reviews={reviews}></Review>
    </div>
  );
}

export default Product;
