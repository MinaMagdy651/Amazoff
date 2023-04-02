import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../shared/hooks";
import logo from "../../Assets/amazoff-logo.jpeg";
import Loading from "../loading/loading";
import "./style.css";

function Login() {
  const obj = useSelector((state) => state.obj.obj);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();

  const { error, loading } = useLogin(data ? data : null);

  const onSubmit = (data) => {
    setData(data);
  };

  if (error) {
    const element = document.getElementById("password");
    element.value = "";
    element.focus();
  }
  useEffect(() => {
    if (obj.status) {
      navigate("/home");
    }
  });
  return (
    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <div className="login-logo">
              <img className="amazoff-logo" src={logo} alt="Amazoff-logo" />
            </div>
            <div className="mb-3 text-input">
              <input
                id="email"
                className="form-control"
                type="email"
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
            <div className="remember-me-container d-flex justify-content-start  ">
              <label className="remember-me-label" htmlFor="remeber-me">
                <input
                  id="remeber-me"
                  className="remember-me-checkbox"
                  type="checkbox"
                  {...register("remember_me")}
                />
                Remember me
              </label>
            </div>
            <div className="login-button-container">
              <button className="login-button" type="submit">
                {loading && (
                  <i>
                    <Loading height={20} width={20} type={"spin"}></Loading>
                  </i>
                )}

                {!loading && <span>Sign in</span>}
              </button>
              {error && (
                <p className="text-danger text-center">
                  Wrong Email or Password
                </p>
              )}
            </div>
            <div className="login-info">
              Don't have an account? <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Login;
