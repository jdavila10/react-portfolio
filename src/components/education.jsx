import React from "react";

//import pictures
import UMT from "../img/UMT.jpg";
import CS from "../img/Carmen-Sol.jpeg";

class Education extends React.Component {
    render() {
        return (
            <section id="experience" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Education</h3>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={UMT} data-lightbox="gallery-vmarine">
                                    <div className="work-img">
                                        <img src={UMT} alt="UMT Logo" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">UMT</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">Bachelor of Computer Science</span>
                                                </div>
                                                <span className="w-date">2017</span>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                     
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={CS} data-lightbox="gallery-todo">
                                    <div className="work-img">
                                        <img src={CS} alt="Colegio Carmen Sol Logo" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Colegio Carmen Sol</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        High School Graduate</span>
                                                </div>
                                                <span className="w-date">2007</span>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="w-like">
                                                    <span className="ion-ios-plus-outline"></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                </div >
            </section >
        );
    }
}

export default Education;