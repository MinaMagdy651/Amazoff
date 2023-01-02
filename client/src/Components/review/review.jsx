import { Rating } from "react-simple-star-rating";
import "./style.css";
import Addreview from "../addReview/addReview";
function Review(probs) {
  return (
    <div className="whole-container">
      <Addreview></Addreview>
      {probs.reviews.length === 0 && <div> No reviews found</div>}
      {probs.reviews.map((review) => (
        <div key={review.review_id} className="my-5">
          <div className="review_customer_name">
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
      ))}
    </div>
  );
}

export default Review;
