
import React from 'react';
import "../bootstrap.css";
import "../font-awesome.css";
import "../styles.scss";

function AboutMe() {
    return (
        <div id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2 className="heading">About Me</h2>
                    </div>
                    <div className="col-md-8">
                        <p>
                        My name is Jonathan Echevarria Davila and I am an IT/Full Stack Developer. I currently work as an IT Support for a company called REPAY.
                        I am currently developing my skills as a web developer in the 6 month coding bootcamp at Georgia Tech.                        
                        I was born and raised in the beautiful island of Puerto Rico. I love going to the beach and
                        surfing. My favorite place in the world is Flamenco beach.
                        I like doing sports, exercise and cook all kinds of food. I studied culinary arts but only use
                        the skills I learned to cook for my family and friends.                        
                        As a child I was always interested in building stuff. I was introduced to the world of
                        technology when my Army recruiter recommended me the IT job in the Army. Since day one of school I realized I had found what I wanted to do for
                        the rest of my life. After I got out I wanted more, I wanted to start building because that's what I'm meant to do after all. I decided to become a developer so
                        I can build great things and help people in any way I can.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;