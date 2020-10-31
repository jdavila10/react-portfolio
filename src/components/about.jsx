import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        {
          id: "HTML5",
          content: "HTML5",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "CSS",
          content: "CSS",
          porcentage: "80%",
          value: "80"
        },
        {
          id: "JavaScript",
          content: "JavaScript",
          porcentage: "50%",
          value: "50"
        },
        {
          id: "MySQL",
          content: "MySQL",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Node.js",
          content: "Node.js",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "Sequelize",
          content: "Sequelize",
          porcentage: "65%",
          value: "65"
        },
        {
          id: "MongoDB",
          content: "MongoDB",
          porcentage: "70%",
          value: "70"
        },
        {
          id: "React",
          content: "React",
          porcentage: "50%",
          value: "50"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "My name is Jonathan Davila and I am an IT/Software Engineer. I work as IT Support for a company called REPAY. I am currently developing my skills as a web developer in the 6 month coding bootcamp at Georgia Tech."

        },
        {
          id: "second-p-about",
          content:
            "I was born and raised in the beautiful island of Puerto Rico. I love going to the beach and my favorite hobby is surfing. I like doing sports, travel, exercise and cooking. I have an Associate's Degree in Culinary Arts and I use the skills I learned to cook for my family and friends."

        },
        {
          id: "third-p-about",
          content:
            "As a kid I was always interested in building stuff. I was obsessed with LEGOS and I had a huge collection of different worlds I had built. In my generation there has been so many technology breakthroughs that it's almost impossible to not consider being part of it. When I joined the Army I had the chance to choose any job I wanted so I decided to go be an IT so I could learn everything I could about computers. After 10 years of service I decided to move on to the private sector so I could have a better work/life balance and spend more time with my family."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
