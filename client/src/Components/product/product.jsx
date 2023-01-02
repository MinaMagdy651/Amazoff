import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { Rating } from "react-simple-star-rating";
import "pure-react-carousel/dist/react-carousel.es.css";
import useGetProduct from "../../shared/useGetProduct";
import Review from "../review/review";
import "./style.css";
import { FaBackward, FaForward } from "react-icons/fa";

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
  }, [id]);
  return (
    <div className="container my-5">
      <div className="row">
        {product.urls && (
          <CarouselProvider
            className="col-lg-5 col-md-6 col-sm-12"
            naturalSlideWidth={50}
            naturalSlideHeight={40}
            totalSlides={product.urls.length}
          >
            <Slider>
              {product.urls.map((url, index) => (
                <Slide key={index}>
                  <img
                    key={index + "img"}
                    className="carousel_image"
                    src={url}
                    alt=""
                  />
                </Slide>
              ))}
            </Slider>
            <div className="d-flex justify-content-center p-2">
              <ButtonBack>
                <FaBackward></FaBackward>
              </ButtonBack>
              <ButtonNext>
                <FaForward></FaForward>
              </ButtonNext>
            </div>
          </CarouselProvider>
        )}
        {product && (
          <div key={product.product_id} className="col-lg-7 col-md-6 col-sm-12">
            <h2>{product.name}</h2>
            <h6>
              Category: <strong>{product.category}</strong>
            </h6>
            <Rating
              size={20}
              initialValue={product.rating}
              transition
              allowFraction
              readonly
            />
            <div>
              <h2>{product.price + " EGP"}</h2>
              <p>
                {"Quantity left in stock: "} <i>{product.quantity}</i>
              </p>
              <p>{product.description}</p>
            </div>
          </div>
        )}
      </div>
      <Review reviews={reviews}></Review>
    </div>
  );
}

export default Product;
