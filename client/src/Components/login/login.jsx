import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useFetchLogin from "../../shared/useFetchLogin";
import logo from "../../Assets/amazoff-logo.jpeg";
import "./style.css";

function Login() {
  const obj = useSelector((state) => state.obj.obj);
  const navigate = useNavigate();
  useEffect(() => {
    if (obj.status) {
      navigate("/home");
    }
  });
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useFetchLogin(data ? data : null);
  const onSubmit = (data) => {
    setData(data);
    setLoading(false);
  };
  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      {loading && <div></div>}
      <div className="container">
        <div className="login-logo">
          <img className="amazoff-logo" src={logo} alt="Amazoff-logo" />
        </div>
        <div className="mb-3 text-input">
          <input
            id="email"
            className="form-control"
            placeholder="Email"
            {...register("email", { required: true })}
          />
        </div>
        <div className="mb-3 text-input">
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            {...register("password", { required: true })}
          />
        </div>
        <div className="remember-me-container">
          <label className="remember-me-label" htmlFor="">
            <input
              className="remember-me-checkbox"
              type="checkbox"
              {...register("remember_me")}
            />
            Remember me
          </label>
        </div>
        <div className="login-button-container">
          <button className="login-button" type="submit">
            Sign in
          </button>
        </div>
        <div className="login-info">
          Don't have an account? <Link to="/register">Register</Link>
        </div>
      </div>
    </form>
  );
}
export default Login;
