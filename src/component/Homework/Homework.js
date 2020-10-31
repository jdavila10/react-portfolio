import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function Homework() {
    const homeworkStyle = {width: 300}
    return (
        <div id="homework">
            <h2 className="heading">Homework Assignments</h2>
            <div className="container">
                <div className="row">
                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="images/homework.jpg" style={homeworkStyle} />
                        </div>
                        <div className="project-info">
                            <h3>Employee Management Homework</h3>
                            <p>
                                This homework provides the ability to track employees, managers and roles within a company.
                                The user is able to view all employees, departments and roles, add employees, roles, and
                                departments as well updating employee's roles or managers and removing employee.
                        </p>
                            <a href="https://github.com/cotec4/Employee-Tracker" target="_blank" rel="noreferrer">View Homework Repo</a>
                        </div>
                    </div>
                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="images/homework.jpg" style={homeworkStyle} />
                        </div>
                        <div className="project-info">
                            <h3>Weather Dashboard Homework</h3>
                            <p>
                                This homework provides the ability to look at specific weather and weather related data in
                                whatever city the user desires. The user simply has to search for a city and the weather
                                data will appear while the searches will be stored for ease of access later.
                        </p>
                            <a href="https://cotec4.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">View Homework</a>
                        </div>
                    </div>
                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="images/homework.jpg" style={homeworkStyle} />
                        </div>
                        <div className="project-info">
                            <h3>Work Day Scheduler Homework</h3>
                            <p>
                                This homework provides the ability to input events (meetings, calls, etc.) thorughout a work
                                day and to save these events to local storage so they will appear later. There is also
                                formatting which allows for editing of current and future hours but not past hours.
                        </p>
                            <a href="https://cotec4.github.io/Work-Day-Scheduler/" target="_blank" rel="noreferrer">View Homework</a>
                        </div>
                    </div>

                    <div className="project shadow-large">
                        <div className="project-image">
                            <img alt="" src="images/homework.jpg" style={homeworkStyle} />
                        </div>
                        <div className="project-info">
                            <h3>Note Taker Homework</h3>
                            <p>
                                This homework provides the ability to create notes and store those notes. You can also
                                delete, edit or change the notes after you've created them.
                        </p>
                            <a href="https://cryptic-retreat-39842.herokuapp.com/" target="_blank" rel="noreferrer">View Homework</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homework;