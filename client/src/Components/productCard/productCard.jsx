import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import "./style.css";

function ProductCard(probs) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "18rem" }}
      className="col-sm-6 col-md-2 col-lg-3 m-3 card"
    >
      <Card.Img
        className="card-image"
        variant="top"
        src={probs.product.url}
        onClick={() => navigate(`/product/${probs.product.product_id}`)}
      />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{probs.product.name}</Card.Title>
        <div className="container-price">
          <Card.Text className="card-text">
            {probs.product.rating}
            {probs.product.price}
          </Card.Text>
          <Button className="card-button" variant="primary">
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
