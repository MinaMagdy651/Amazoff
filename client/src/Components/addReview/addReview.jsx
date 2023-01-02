import { useForm } from "react-hook-form";
import { Rating } from "react-simple-star-rating";
import { useState } from "react";
import "./style.css";
function Addreview() {
  const { register, handleSubmit } = useForm();
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);
  };
  const onSubmit = (data) => {
    console.log(data);
    console.log(rating);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="review-form">
      <h4 className="review-form-title">Add A Review!</h4>
      <Rating
        size={30}
        initialValue={rating}
        onClick={handleRating}
        transition
        allowFraction
        className="my-3"
        showTooltip
      />
      <div className="mb-3 text-input col-lg-5">
        <input
          id="title"
          className="form-control"
          placeholder="Title.."
          {...register("title", { required: true })}
        />
      </div>
      <div className="mb-3 text-input col-lg-8">
        <textarea
          id="title"
          className="form-control"
          placeholder="Description.."
          {...register("description")}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button className="button review-button" type="submit">
          Add Review
        </button>
      </div>
    </form>
  );
}
export default Addreview;
