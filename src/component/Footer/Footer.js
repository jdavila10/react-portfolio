import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 copyright">
                        <p>
                            Copyright &copy; 2020 Jonathan Echevarria
                    </p>
                    </div>
                    <div className="col-sm-2 top">
                        <span id="to-top">
                            <i className="fa fa-chevron-up" aria-hidden="true"></i>
                        </span>
                    </div>
                    <div className="col-sm-5 social">
                        <ul>
                            <li>
                                <a href="https://github.com/jdavila10" target="_blank" rel="noreferrer"><i className="fa fa-github"
                                    aria-hidden="true"></i></a>
                            </li>
                            
                            <li>
                                <a href="https://www.linkedin.com/in/jonathan-echevarria-b31035134/" target="_blank" rel="noreferrer"><i
                                    className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
