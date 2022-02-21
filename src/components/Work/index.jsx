import React from "react";
import fanabi from "../../assets/images/fanabi.png";
import "./work.scss";

const Work = () => {
  return (
    <div className="work experience" id="work">
      <div className="container">
        <h2>
          <span>03.</span>
          Some Things I’ve Built
          <div className="line"></div>
        </h2>

        <div className="wrapper-project">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://shokh-fanabi.netlify.app/"
            className="project-img"
          >
            <img src={fanabi} alt="" />
          </a>
          <div className="project-content">
            <h5>Featured Project</h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://shokh-fanabi.netlify.app/"
            >
              Fanabi
            </a>

            <div className="project-card">
              FANABI media studio is a team of professionals and enthusiasts
              with many years of experience in directing, media project
              management, camera art, video editing and graphic design.
            </div>
            <ul>
              <li>Sass</li>
              <li>React JS</li>
            </ul>

            <div className="project-link">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/shokh001/FANABI"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://shokh-fanabi.netlify.app/"
              >
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
