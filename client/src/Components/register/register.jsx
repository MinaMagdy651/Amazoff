import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCheckEmail, useRegister } from "../../shared/hooks";
import Loading from "../loading/loading";
import logo from "../../Assets/amazoff-logo.jpeg";

import "./style.css";

function Register() {
  const obj = useSelector((state) => state.obj.obj);
  const navigate = useNavigate();

  useEffect(() => {
    if (obj.status) {
      navigate("/home");
    }
  });

  const [data, setData] = useState();
  const { register, handleSubmit, watch } = useForm();

  const onSubmit = (data) => {
    setData(data);
  };

  const subscription = watch("email");
  const { error: errorCheck } = useCheckEmail(subscription);
  const { error, loading } = useRegister(data ? data : null);
  const [confirm_error, setConfirm_error] = useState(false);
  const showPassword = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };
  const confirmPassowrd = () => {
    if (watch("confirm-password") !== watch("password")) setConfirm_error(true);
    else setConfirm_error(false);
  };
  if (error) return <>error</>;
  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-container container">
        <div className="row">
           <div className="login-logo">
              <Link to="/home">
                <img className="amazoff-logo" src={logo} alt="Amazoff-logo" />
              </Link>
            </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              {...register("name", { required: true })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", { required: true })}
            />
            {!errorCheck && (
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            )}
            {errorCheck && (
              <div id="emailHelp" className="form-text text-danger">
                Email Already exists
              </div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              className="form-control"
              id="address"
              {...register("address", { required: true })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="passowrd" className="form-label">
              Password
            </label>
            <div className="password-container">
              <input
                type="password"
                className="form-control"
                id="password"
                {...register("password", { required: true })}
              />
              <FaEye className="eye-icon" onClick={showPassword} />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="confirm-password" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirm-password"
              required
              {...register("confirm-password", { required: true })}
              onBlur={confirmPassowrd}
            />
          </div>
          {confirm_error && (
            <p className="text-danger">Passwords don't match</p>
          )}
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              data-date=""
              data-date-format="DD MMMM YYYY"
              className="form-control"
              id="dob"
              {...register("dob", { required: true })}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              defaultValue={"DEFAULT"}
              className="form-select gender-selection-field"
              id="gender"
              aria-label="Gender"
              {...register("gender", { required: true })}
            >
              <option value="DEFAULT" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer not to say">Prefer not to say</option>
            </select>
            <button className="register-button my-2" type="submit">
              {loading && (
                <i>
                  <Loading height={20} width={20} type={"spin"}></Loading>
                </i>
              )}

              {!loading && <span>Register</span>}
            </button>
            <div>
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
export default Register;
