import React from "react";

//import images
import budget from "../img/budget-tracker.png";
import employee from "../img/employee-directory.png";
import note from "../img/note-taker.png";
import krusty from "../img/krusty.png";

class Homework extends React.Component {
    render() {
        return (
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Homework</h3>
                                <p className="subtitle-a"> </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="work-box">
                                <a href={budget} data-lightbox="gallery-vmarine">
                                    <div className="hw-img">
                                        <img src={budget} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">Budget Tracker</h2>
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
                                    <a className="w-ctegory" href="https://mybudget-off-on.herokuapp.com/" target="_blank">
                                        View Homework</a>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="work-box">
                                <a href={employee} data-lightbox="gallery-aguadeluz">
                                    <div className="hw-img">
                                        <img src={employee} alt="" className="img-fluid" />
                                    </div>
                                    <div className="work-content">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <h2 className="w-title">User Directory</h2>
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
                                    <a className="w-ctegory" href="https://jdavila10.github.io/User-Directory/" target="_blank">
                                        View Homework</a>
                                </span>
                            </div>
                        </div>
                        

                            <div className="col-md-3">
                                <div className="work-box">
                                    <a href={note} data-lightbox="gallery-smth">
                                        <div className="hw-img">
                                            <img src={note} alt="" className="img-fluid" />
                                        </div>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">Note Taker</h2>
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
                                        <a className="w-ctegory" href="https://ancient-sands-36750.herokuapp.com/" target="_blank">
                                            View Homework</a>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="work-box">
                                    <a href={krusty} data-lightbox="gallery-mf">
                                        <div className="hw-img">
                                            <img src={krusty} alt="" className="img-fluid" />
                                        </div>
                                        <div className="work-content">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h2 className="w-title">The Krusty Krab</h2>
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
                                        <a className="w-ctegory" href="https://tranquil-spire-12781.herokuapp.com/" target="_blank">
                                            View Homework</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section>
        );
    }
}

export default Homework;