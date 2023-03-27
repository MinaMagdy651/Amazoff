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
import { FaBackward, FaForward } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useGetProduct } from "../../shared/hooks";
import "pure-react-carousel/dist/react-carousel.es.css";
import Review from "../review/review";
import "./style.css";

function Product(probs) {
  const obj = useSelector((state) => state.obj.obj);
  const [reviews, setReviews] = useState([]);
  const id = useParams().id;

  const { data: product, error, loading } = useGetProduct(id);
  useEffect(() => {
    if (product?.reviews) {
      setReviews(product.reviews);
    } else setReviews([]);
    // eslint-disable-next-line
  }, [id, obj, product]);
  if (error) return <>error</>;
  if (loading) return <>loading</>;
  if (product)
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
                <ButtonBack className="slider-button" id="back">
                  <FaBackward id="back-icon"></FaBackward>
                </ButtonBack>
                <ButtonNext className="slider-button" id="forward">
                  <FaForward id="forward-icon"></FaForward>
                </ButtonNext>
              </div>
            </CarouselProvider>
          )}
          {product && (
            <div
              key={product.product_id}
              className="col-lg-7 col-md-6 col-sm-12"
            >
              <h2 className="product-name">{product.name}</h2>
              <h6 className="category">
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
                <h2>
                  {product.price} <span className="currency">EGP</span>
                  {product.quantity < 10 && (
                    <span className="quantity text-danger">
                      <strong></strong>
                      {`Only ${product.quantity} Left`}
                    </span>
                  )}
                  {product.quantity >= 10 && (
                    <span className="quantity">In stock</span>
                  )}
                </h2>
                {product.price >= 300 && (
                  <p>
                    <span className="shipping">
                      {" "}
                      Eligible for FREE shipping
                    </span>
                  </p>
                )}
                <p>{product.description}</p>
              </div>
            </div>
          )}
        </div>
        <Review reviews={reviews} product_id={product.product_id}></Review>
      </div>
    );
}

export default Product;
