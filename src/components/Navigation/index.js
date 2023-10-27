import Image from "react-bootstrap/Image";
import logo from "../../logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faUser,
  faEnvelope,
  faFile,
} from "@fortawesome/free-solid-svg-icons";
import "./navigation.scss";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a
          className="navbar-brand logo ms-1"
          onClick={() => handlePageChange("About")}
          href="#about"
        >
          <Image roundedCircle src={logo} alt="logo" className="logo-img" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                onClick={() => handlePageChange("About")}
                className={`${
                  currentPage === "About" ? "nav-link selected" : "nav-link"
                } about-link`}
                href="#about-me"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <FontAwesomeIcon icon={faUser} />
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handlePageChange("Project")}
                className={`${
                  currentPage === "Project" ? "nav-link selected" : "nav-link"
                } project-link`}
                href="#projects"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <FontAwesomeIcon icon={faDesktop} className="project-link" />
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handlePageChange("Resume")}
                className={`${
                  currentPage === "Resume" ? "nav-link selected" : "nav-link"
                } resume-link`}
                href="#resume"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <FontAwesomeIcon icon={faFile} />
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={() => handlePageChange("Contact")}
                className={`${
                  currentPage === "Contact" ? "nav-link selected" : "nav-link"
                } contact-link`}
                href="#contact"
                role="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
