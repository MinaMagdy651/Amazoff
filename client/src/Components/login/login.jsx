import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import axios from "axios";

function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const [LoginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    if (data) {
      axios
        .post("http://localhost:3500/login", {
          Email: data.email,
          password: data.password,
        })
        .then((response) => {
          setLoginStatus(true);
          console.log("response", response.data);
        })
        .catch((error) => {
          setLoginStatus(false);
          console.log(error);
        });
    }
  }, [data]);

  const onSubmit = (data) => setData(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>
        <h3>Email</h3>
        <input {...register("email", { required: true })} />
      </span>
      <span>
        <h3>Password</h3>
        <input {...register("password", { required: true })} />
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
