import "./style.css";
import { FaGithub } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer  m-top-2 bg-dark">
      <div className="container">
        <div className="row p-2 d-flex justify-content-center">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="reset-a"
              href="https://github.com/AlyZakaria"
            >
              <div className="d-flex align-items-center justify-content-center">
                <FaGithub className="github-icon"></FaGithub>
                Aly Zakaria
              </div>
            </a>
          </div>
          {/* <div className="col-sm-6 col-md-4 col-lg-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="reset-a"
              href="https://github.com/chehab1"
            >
              <div className="d-flex align-items-center">
                <FaGithub className="github-icon"></FaGithub>
                Chehab Yakoot
              </div>
            </a>
          </div> */}
          <div className="col-sm-6 col-md-4 col-lg-3">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="reset-a"
              href="https://github.com/amwopps"
            >
              <div className="d-flex align-items-center">
                <FaGithub className="github-icon"></FaGithub>
                Mina Magdy
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
