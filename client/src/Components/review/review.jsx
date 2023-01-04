import { Rating } from "react-simple-star-rating";
import { useSelector } from "react-redux";
import "./style.css";
import Addreview from "../addReview/addReview";
import * as Unicons from '@iconscout/react-unicons';
function Review(probs) {
  const obj = useSelector((state) => state.obj.obj);
  return (
    <div className="whole-container">
      {obj.purchase_list.includes(probs.product_id) &&
        !obj.reviews_list.includes(probs.product_id) && (
          <Addreview product_id={probs.product_id}></Addreview>
        )}
      {probs.reviews.length === 0 && 
      <div className= "no-reviews d-flex justify-content-center">No reviews found</div>}
      <ul className="review-list">
        {probs.reviews.map((review) => (
          <li key={review.review_id} className="review-list-item">
            <div className="my-5 transition">
              <div className="review_customer_name">
              <Unicons.UilUser id = "reviewer-icon"/>
                <span className="customer-name">{review.customer_name}</span>
              </div>
              <div className="rating">
                <Rating
                  size={20}
                  initialValue={review.rating}
                  transition
                  allowFraction
                  readonly
                />
                <span className="purchase">Verified Purchase</span>
              </div>  
              <div className="customer-title">
                <span>{review.title}</span>
              </div>
              <div>{review.description}</div>
              <hr />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Review;
