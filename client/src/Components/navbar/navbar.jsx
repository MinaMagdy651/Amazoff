import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearDataAction } from "../../Redux/shopSlicer";
import SearchBar from "../searchBar/searchBar";
import "bootstrap/dist/css/bootstrap.css";
import cart from "../../Assets/carts.png"
import "./style.css";

function Navbar_() {
  const obj = useSelector((state) => state.obj.obj);

  const [login_status, setLogin_status] = useState(obj?.status);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearDataAction());
    localStorage.removeItem("access_token");
    sessionStorage.removeItem("access_token");
  };

  useEffect(() => {
    if (obj.status) {
      setLogin_status(true);
    } else {
      setLogin_status(false);
    }
  }, [obj]);

  return (
    <div id="header" className="sticky-top">
      <div className="container">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <h3 id="brand">Amazoff</h3>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

                <li className="nav-item d-flex justify-content-center">
                  <Link
                    to="/home"
                    className="nav-link active name redirect"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item d-flex justify-content-center">
                  <Link
                    to="/products"
                    className="nav-link active name redirect"
                    aria-current="page"
                  >
                    Products
                  </Link>
                </li>
                <SearchBar></SearchBar>
                {!login_status && (
                  <li className="nav-item d-flex flex-row">
                    <button className="button">
                      <Link
                        to="/login"
                        className="nav-link active"
                        aria-current="page"
                      >
                        Login
                      </Link>
                    </button>
                    <button className="button">
                      <Link
                        to="/register"
                        className="nav-link active"
                        aria-current="page"
                      >
                        Register
                      </Link>
                    </button>
                  </li>
                )}
                {login_status && (
                  <li className="nav-item d-flex flex-row name">
                    Hello,{" "}
                    <strong className="nameNav">{`${
                      obj.name.split(" ")[0]
                    }`}</strong>
                  </li>
                )}
                {login_status && (
                  <li>
                    <button id="logout" className="button">
                      <Link
                        className="nav-link active"
                        aria-current="page"
                        onClick={logOut}
                      >
                        Log Out
                      </Link>
                    </button>
                  </li>
                )}
                {login_status && (
                  <Link      
                  to="/cart"
                  className="nav-link active"
                  aria-current="page">
                    <li style = {{cursor: "pointer"}}>
                      <img src = {cart}  width = "50px" height = "50px"/>
                      {console.log(obj)}
                      <span>{`${obj.counter}`}</span>
                    </li>
                  </Link>
                )
                }
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar_;
