import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
function ProductCard(probs) {
  const navigate = useNavigate();
  return (
    <Card
      style={{ width: "18rem" }}
      className="bg-success  col-sm-6 col-md-2 col-lg-3 m-3"
      onClick={() => navigate(`/product/${probs.product.product_id}`)}
    >
      <Card.Img variant="top" src={probs.product.url} />
      <Card.Body>
        <Card.Title>{probs.product.name}</Card.Title>
        <Card.Text>
          {probs.product.rating}
          {probs.product.price}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
