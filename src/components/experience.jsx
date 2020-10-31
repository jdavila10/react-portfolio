import React from "react";

//import pictures
import PRNG from "../img/PRNG.jpg";
import Army from "../img/Army.png";
import REPAY from "../img/REPAY.png";

class Experience extends React.Component {
    render() {
        return (
            <section id="experience" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Experience</h3>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-box">
                                <a href={REPAY} data-lightbox="gallery-vmarine">
                                    <div className="work-img">
                                        <img src={REPAY} alt="REPAY Logo" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">REPAY</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory"> IT Associate</span>
                                                </div>
                                                <span className="w-date">March '18 - Current</span>
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
                                <a href={Army} data-lightbox="gallery-aguadeluz">
                                    <div className="work-img">
                                        <img src={Army} alt="US Army Logo" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">US Army</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                    Help Desk Technician</span>
                                                </div>
                                                <span className="w-date">April '14 – March '18</span>
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
                                <a href={PRNG} data-lightbox="gallery-todo">
                                    <div className="work-img">
                                        <img src={PRNG} alt="Puerto Rico National Guard Logo" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Army Puerto Rico National Guard</h2>
                                                <div className="w-more">
                                                    <span className="w-ctegory">
                                                        Information Technology Specialist</span>
                                                </div>
                                                <span className="w-date">May '08 – April '14</span>
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
                    </div>
                </div >
            </section >
        );
    }
}

export default Experience;