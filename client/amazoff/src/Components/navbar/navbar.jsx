import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <ul>
        <Link to="/home">
          <li> Home</li>
        </Link>
        <Link to="/counter">
          <li> Counter</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
