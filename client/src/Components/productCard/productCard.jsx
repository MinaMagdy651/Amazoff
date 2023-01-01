import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function ProductCard(probs) {
  return (
    <Card
      style={{ width: "18rem" }}
      className="bg-success  col-sm-6 col-md-4 col-lg-3 m-3"
    >
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
