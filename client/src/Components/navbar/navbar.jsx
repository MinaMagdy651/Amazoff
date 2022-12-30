import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { useEffect, useState } from "react";

function Navbar_() {
  const obj = useSelector((state) => state.obj.obj);
  const [login_status, setLogin_status] = useState(obj?.status);

  useEffect(() => {
    console.log("navbar updated", obj);
    if (obj.id !== -1) {
      setLogin_status(true);
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
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar_;
