import React from "react";

//import stock
import space from "../img/space.png";
import allergies from "../img/can-i-eat-it.jpg";

class Projects extends React.Component {
  render() {
    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-2"></div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={space} data-lightbox="gallery-vmarine">
                  <div className="work-img">
                    <img src={space} alt="Space voyager project image" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Space Voyagers</h2>
                        <div className="w-more">
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <span className="work-content">
                  <a className="w-ctegory" href="https://space-voyager.herokuapp.com/" target="_blank">
                    View Project</a>
                </span>
              </div>
            </div>
            <div className="col-md-4">
              <div className="work-box">
                <a href={allergies} data-lightbox="gallery-aguadeluz">
                  <div className="work-img">
                    <img src={allergies} alt="Can I eat it project image" className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2 className="w-title">Can I eat it?</h2>
                        <div className="w-more">
                        </div>
                      </div>
                      <div className="col-sm-4">
                        <div className="w-like">
                          <span className="ion-ios-plus-outline"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <span className="work-content">
                  <a className="w-ctegory" href="https://jdavila10.github.io/Can-I-eat-it/" target="_blank">
                    View Project</a>
                </span>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;