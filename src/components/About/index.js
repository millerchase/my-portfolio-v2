import React from "react";
import "./about.scss";
import headShot from "../../assets/images/head-shot.jpg";

function About() {
  return (
    <section id="about-me-section">
      <div className="about-me-bg-lg"></div>
      <div className="about-me-container px-1">
        <div className="portrait mb-4">
          <img src={headShot} className="my-2 portrait" alt="My head shot" />
        </div>
        <div className="about-me-content">
          <div className="about-me-header">
            <h2 className="mb-2" id="about">
              Hello I'm Chase,
            </h2>
          </div>
          <div className="about-me-text my-4">
            <p>
              a dynamic full-stack web developer that specializes in JavaScript.
              Whether putting together a stylish, dynamic, and responsive
              front-end OR building RESTful APIs, servers, and databases (MySQL
              or NoSQL) on the back-end. All can be done with the power of
              JavaScript!
            </p>
            <p>
              I'm a recent graduate of the University of Texas at Austin's
              Coding Bootcamp with a certificate in Full-Stack Web Development.
              My current skillset includes HTML, CSS, JavaScript, jQuery, React,
              Node, Express, AJAX, MySQL, and MongoDB.
            </p>
            <p>
              I'm always looking to learn new skills and expand my knowledge
              base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
