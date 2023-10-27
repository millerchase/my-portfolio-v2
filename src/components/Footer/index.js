import React from "react";
import "./footer.scss";
import logo from "../../logo.svg";
import dateHandler from "../../utils/dateHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer fixed-bottom">
      <div className="footer-brand d-flex">
        <a
          className="navbar-brand d-flex align-items-center"
          target="_blank"
          rel="noreferrer"
          href="https://opensource.org/licenses/Apache-2.0"
        >
          <img
            src={logo}
            width="30"
            height="30"
            className="footer-logo"
            alt="logo"
          />
          <p className="signature">
            Chase Miller &copy; <span>{dateHandler()}</span>
          </p>
        </a>
      </div>
      <div className="social-medias d-flex justify-content-around">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/millerchase"
          className="social-media"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/chase-miller-b60b19231/"
          className="social-media"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/MlrChase40"
          className="social-media"
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
