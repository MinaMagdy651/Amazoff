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
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          className="form-control"
          {...register("email", { required: true })}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="paswword" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="form-control"
          {...register("password", { required: true })}
        />
      </div>
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
