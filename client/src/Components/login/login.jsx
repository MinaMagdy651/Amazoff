import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link } from "react-router-dom";
import useFetchLogin from "../../shared/useFetchLogin";
import "./style.css";

function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  useFetchLogin(data ? data : null);

  const onSubmit = (data) => setData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>
        <h3>Email</h3>
        <input {...register("email", { required: true })} />
      </span>
      <span>
        <h3>Password</h3>
        <input type="password" {...register("password", { required: true })} />
      </span>
      <div>
        <button type="submit">Login</button>

        <Link to="/register">
          <button type="button">Register</button>
        </Link>
      </div>
    </form>
  );
}
export default Login;
