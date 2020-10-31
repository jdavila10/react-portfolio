import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function LeadContent() {
    return (
        <div id="lead">
            <div id="lead-content">
                <h1>Jonathan Echevarria</h1>
                <h2>IT/Software Developer</h2>
                <a href="./Assets/Jonathan Echevarria Resume.pdf" className="btn-rounded-white" download>Download Resume</a>
            </div>

            <div id="lead-overlay"></div>

            <div id="lead-down">
                <span>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    )
}

export default LeadContent;