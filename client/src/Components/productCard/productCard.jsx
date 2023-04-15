import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import useAddToCart from "../../shared/useAddToCart";

function ProductCard(probs) {
  let [cartStatus, setCartStatus] = useState(false);

  useAddToCart(probs.product.product_id, cartStatus, setCartStatus);

  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "18rem" }}
      className="col-sm-12 col-md-2 col-lg-3 col-xs-12 m-3 card"
    >
      <Card.Img
        className="card-image"
        variant="top"
        src={probs.product.url}
        onClick={() => navigate(`/product/${probs.product.product_id}`)}
      />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{probs.product.name}</Card.Title>
        <div>{probs.product.category}</div>
        <div className="container-price">
          <Card.Text className="card-text">
            <span className="d-block">
              <Rating
                size={20}
                initialValue={probs.product.rating}
                transition
                allowFraction
                readonly
              />
            </span>
            <span className="d-block price">
              {probs.product.price + " EGP"}
            </span>
          </Card.Text>
          <Button
            id="card-button"
            variant="primary"
            onClick={() => setCartStatus(true)}
          >
            Add to<span> </span>
            <FaShoppingCart className="cart-logo"></FaShoppingCart>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
