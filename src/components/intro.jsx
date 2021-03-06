
import React from "react";
import "./stars.scss";
import Typed from "react-typed";
import Resume from "../Assets/Resume.pdf";

class Intro extends React.Component {
  render() {
    return (
      // <div id="home" className="intro route bg-image " style={{backgroundImage: "url("+bigImage+")"}}>
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />

        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Jonathan Davila</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "IT",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <span style={{ paddingRight: 10 }}>
                  <a
                    className="btn btn-primary btn js-scroll px-4"
                    href="#work"
                    role="button"
                  >
                    View My Work
                </a>
                </span>
                <span>
                  <a
                    
                   href={Resume} download={Resume}
                    className = "btn btn-primary btn px-4"                    
                    role = "button"
                    
                      >
                      Download Resume
                    </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
