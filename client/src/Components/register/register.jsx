import { Link } from "react-router-dom";
import "./style.css";
function Register() {
  return (
    <div>
      <h5>Register</h5>
      <Link to="/login">
        <button className="btn_register" type="button">
          Login
        </button>
      </Link>
    </div>
  );
}
export default Register;
