import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function Projects() {
    return (
        <div id="projects" className="background-alt">
            <h2 className="heading">Projects</h2>
            <div className="container">
                <div className="row">
                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="../../Assets/images/can-i-eat-it.jpg" />
                        </div>
                        <div className="project-info">
                            <h3>Can I eat it?</h3>
                            <p>
                            A kid-friendly web application that allows kids to check if a food item is safe for their
                            allergies before consumption and suggests alternatives if not.
                        </p>
                            <a href="https://jdavila10.github.io/Can-I-eat-it/" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                    </div>

                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="../../Assets/images/space.png" />
                        </div>
                        <div className="project-info">
                            <h3>Space Voyager 3.0</h3>
                            <p>
                            This website allows the user to register to become on official member of SV3. When the user
                            registers it will then take them to the home page which will guide them to different sites.
                            Sites including a page dedicated to life on Mars, a Planet Page which provides different
                            information regarding the star, moon, & planets of our solar system, an ISS (international
                            space station) Page that allows the user to view the location of where the space station is
                            in real time, and the astronomy picture of the day (APOTD) page brought to you by NASA.
                        </p>
                            <a href="https://space-voyager.herokuapp.com/" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;