import { Link } from "react-router-dom";
import "./style.css";
import useFetchRegister from "../../shared/useFetchRegister";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import useCheckEmail from "../../shared/useCheckEmail";
import { FaEye } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  useFetchRegister(data ? data : null);
  const subscription = watch("email");
  useCheckEmail(subscription);

  const showPassword = () => {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="register-container container">
        <div className="row">
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
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
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
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              required
            />
          </div>

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
              Register
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
