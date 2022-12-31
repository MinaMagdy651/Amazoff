import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { clearDataAction } from "../../Redux/shopSlicer";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";

function Navbar_() {
  const obj = useSelector((state) => state.obj.obj);
  const [login_status, setLogin_status] = useState(obj?.status);

  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(clearDataAction());
    localStorage.removeItem("access_token");
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
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand">
            Amazoff
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/counter"
                  className="nav-link active"
                  aria-current="page"
                >
                  Counter
                </Link>
              </li>
              {!login_status && (
                <li className="nav-item">
                  <button>
                    <Link
                      to="/login"
                      className="nav-link active"
                      aria-current="page"
                    >
                      Login
                    </Link>
                  </button>
                </li>
              )}
              <li className="nav-item">
                <button>
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    onClick={logOut}
                  >
                    Log Out
                  </Link>
                </button>
              </li>
              <li className="nav-item">
                <button>
                  <Link
                    to="/register"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Register
                  </Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_;
