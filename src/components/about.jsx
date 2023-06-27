import React from "react";
import myImage from "../img/myImage.png";
import '../libs/style2.css'

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="about-content">
          <h2 className="about-heading">About Me</h2>
          <p className="about-description">
            Hi there! I'm Nikhilesh Katakam, a passionate programmer with expertise
            in various programming languages and technologies. I have a strong
            foundation in Python, C, C++, Java, and possess intermediate
            knowledge in Cloud Computing (AWS, GCP), deep learning, and GIT. My
            proficiency extends to Smart Contracts as well.
          </p>
          <p className="about-description">
            In addition to my programming skills, I have hands-on experience
            with databases such as SQL, NoSQL, and MongoDB. I am well-versed in
            utilizing frameworks and tools like Express.js, Node.js, GitHub,
            and React.js to build scalable and efficient applications.
          </p>
          <p className="about-description">
            My dedication to continuous learning and staying updated with the
            latest technologies enables me to deliver high-quality solutions to
            complex problems. I am always eager to take on new challenges and
            collaborate with others to create innovative and impactful
            projects.
          </p>
        </div>
        <div className="about-img">
          <img
            className="img-fluid rounded-circle"
            src={myImage}
            alt="My Image"
            style={{ width: "20%" }}
          />
        </div>
        <div className="skills">
          <h2 className="skills-heading">Skills</h2>
          <div className="skills-boxes">
            <div className="skills-box">
              <h3 className="skills-title">Programming Languages</h3>
              <p className="skills-description">
              <strong style={{ color: 'black' }}>
                Python, C, C++, Java
                </strong>
              </p>
            </div>
            <div className="skills-box">
              <h3 className="skills-title">Cloud Computing</h3>
              <p className="skills-description">
              <strong style={{ color: 'black' }}>
                AWS, GCP, Azure
                </strong>
              </p>
            </div>
            <div className="skills-box">
              <h3 className="skills-title">Deep Learning</h3>
              <p className="skills-description">
              <strong style={{ color: 'black' }}>
                TensorFlow, PyTorch
                </strong>
              </p>
            </div>
            <div className="skills-box">
              <h3 className="skills-title">GIT</h3>
              <p className="skills-description">
              <strong style={{ color: 'black' }}>
                Version Control, Collaboration
                </strong>
              </p>
            </div>
            <div className="skills-box">
              <h3 className="skills-title">Smart Contracts</h3>
              <p className="skills-description">
              <strong style={{ color: 'black' }}>
                Solidity, Ethereum
                </strong>
              </p>
            </div>
            <div className="skills-box">
              <h3 className="skills-title">Databases</h3>
              <p className="skills-description">
              <strong style={{ color: 'black' }}>
                SQL, NoSQL, MongoDB
                </strong>
              </p>
            </div>
            <div className="skills-box">
              <h3 className="skills-title">Frameworks & Tools</h3>
              <p className="skills-description">
              <strong style={{ color: 'black' }}>
                Express.js, Node.js, GitHub, React.js, Spring, Spring Boot
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
