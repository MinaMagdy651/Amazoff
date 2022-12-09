import { Link } from "react-router-dom";
import "./style.css";
import useFetchRegister from "../../shared/useFetchRegister";
import { useForm } from "react-hook-form";
import { useState } from "react";
import useCheckEmail from "../../shared/useCheckEmail";

function Register() {
  const [data, setData] = useState();
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => setData(data);

  useFetchRegister(data ? data : null);
  useCheckEmail(watch("email"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>
        <h3>Name</h3>
        <input {...register("name", { required: true })} />
      </span>

      <span>
        <h3>Email</h3>
        <input {...register("email", { required: true })} />
      </span>

      <span>
        <h3>Password</h3>
        <input {...register("password", { required: true })} />
      </span>

      <span>
        <h3>Address</h3>
        <input {...register("address", { required: true })} />
      </span>
      <span>
        <h3>Date Of Birth</h3>
        <input {...register("dob", { required: true })} />
      </span>

      <span>
        <h3>Gender</h3>
        <input {...register("gender", { required: true })} />
      </span>
      <div>
        <button type="submit">Register</button>

        <Link to="/login">
          <button type="button">Login</button>
        </Link>
      </div>
    </form>
  );
}
export default Register;
