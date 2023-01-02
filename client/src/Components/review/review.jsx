import { Rating } from "react-simple-star-rating";
import "./style.css";

function Review(probs) {
  return (
    <div>
      {probs.reviews.length === 0 && <div> NO reviews found</div>}
      {probs.reviews.map((review) => (
        <div key={review.review_id} className="my-5">
          <div className="review_customer_name">
            <strong>{review.customer_name}</strong>
          </div>
          <div className="customer_title">
            <Rating
              size={20}
              initialValue={review.rating}
              transition
              allowFraction
              readonly
            />
            <strong>{review.title}</strong>
          </div>
          <div>{review.description}</div>
        </div>
      ))}
    </div>
  );
}

export default Review;