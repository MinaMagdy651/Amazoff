import { useNavigate } from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux";
import { Rating } from "react-simple-star-rating";
import { FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import URL from "../../APIS/url.json"
import axios from "../../APIS/axios";
import "./style.css";
import { updateCart } from "../../Redux/shopSlicer";
const url = URL.addToCart;


function ProductCard(probs) {
  const obj = useSelector((state) => state.obj.obj);
  const dispatch = useDispatch();
  let cart = obj.cart;
  async function addToCart(product_id){
    try{
      const response = await axios.post(`${url}/${product_id}/add-to-cart`,
        {          
          quantity: 1
        })
        if (response.status === 200) {
           dispatch(updateCart(++cart));
           const notify = document.getElementById("notify");
          setTimeout(() => notify.style.visibility = "hidden" , 2000);
          notify.style.visibility = "visible";  
        }
        else{
          console.log(response);
          throw new Error("");
        }
    } catch (error){
    }
  }

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
          <Button id="card-button" variant="primary" onClick={() => addToCart(probs.product.product_id)}>
            Add to<span> </span>
            <FaShoppingCart className="cart-logo"></FaShoppingCart>
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
