import React from "react";
import "./resume.scss";
import myResume from "./assets/chases-resume.pdf";
import resumePhoto from "./assets/images/resume-img.png";

function Resume() {
  return (
    <div className="resume-container">
      <div className="resume-content">
        <div className="resume-header">
          <h1 className="mt-4">My Resume</h1>
          <p className="mx-xl-4">
            Download my{" "}
            <a href={myResume} download>
              resume
            </a>
          </p>
        </div>
        <div className="resume-body">
          <img src={resumePhoto} alt="resume" className="resume-photo" />
        </div>
      </div>
    </div>
  );
}

export default Resume;
