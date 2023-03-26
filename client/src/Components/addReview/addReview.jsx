import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import { useSelector } from "react-redux";
import useAddReview from "../../shared/useAddReview";
import "./style.css";

function Addreview(probs) {
  const obj = useSelector((state) => state.obj.obj);

  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0);
  const [customerReview, setCustomerReview] = useState({});

  const handleRating = (rate) => {
    setRating(rate);
  };

  const { error, loading } = useAddReview(customerReview);

  const onSubmit = (data) => {
    data.rating = rating;
    data.product_id = probs.product_id;
    data.customer_id = obj.id;
    setCustomerReview(data);
  };
  if (error) return <>error</>;
  if (loading) return <>loading</>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="review-form">
      <h4 className="review-form-title">Add Review</h4>
      <Rating
        size={30}
        initialValue={rating}
        onClick={handleRating}
        transition
        allowFraction
        className="my-3"
      />
      <div className="mb-3 text-input col-lg-6">
        <input
          id="title"
          className="form-control"
          placeholder="Title.."
          {...register("title", { required: true })}
        />
      </div>
      <div className="mb-3 text-input col-lg-6">
        <textarea
          id="title"
          className="form-control"
          placeholder="Description.."
          {...register("description")}
        />
      </div>
      <div className="d-flex justify-content-start">
        <button className="button review-button" type="submit">
          Submit Review
        </button>
      </div>
    </form>
  );
}
export default Addreview;
