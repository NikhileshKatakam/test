import React from "react";
import '../libs/style2.css'

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio">
        <div className="section">
          <h2 className="section-heading">Job Experiences</h2>
          <div className="box" id="experience-box">
            <h3 className="box-heading">Professional Experiences</h3>
            <p className="box-description">
              Capgemini: SEP 2021 to AUG 2022
              <br />
              Role: Java Developer
              <br />
              Responsibilities:
              <ul>
                <li>Creating micro-services using Java Spring Boot</li>
                <li>Performing manual and integration testing</li>
                <li>Creating user and packages validations</li>
                <li>Creating test plans and execution plans</li>
              </ul>
            </p>
            <h3 className="box-heading">Internships</h3>
            <p className="box-description">
              Eazydiner: Feb 2021 to AUG 2021
              <br />
              Role: Software Development Engineer (SDE) Intern
              <br />
              Responsibilities:
              <ul>
                <li>Developing Chatbots</li>
                <li>UI and transition changes on websites</li>
                <li>Developing chatbot for table reservation and food ordering</li>
                <li>Developing webpages using React and deploying using AWS or Heroku</li>
              </ul>
            </p>
            <p className="box-description">
              Indian Space Research Organization (ISRO)
              <br />
              Role: Machine Learning Intern
              <br />
              Responsibilities:
              <ul>
                <li>Worked on a Machine Learning project</li>
                <li>Performed data cleaning tasks using Python</li>
              </ul>
            </p>
            <p className="box-description">
              Tata Consultancy Services (TCS) (3 months internship)
              <br />
              Role: Cloud Intern
              <br />
              Responsibilities:
              <ul>
                <li>Worked on e-district-2 project</li>
                <li>Automation deployment on cloud</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-heading">Projects</h2>
          <div className="box" id="project-box">
            <h3 className="box-heading">Project 1: Talking and Speech Recognition Chatbot</h3>
            <p className="box-description">
              Description: A Chatbot that speaks English where the user can ask questions, interact with it via auditory or textual methods, and the bot responds accordingly.
              <br />
              Tech Stack: Python
            </p>
            <h3 className="box-heading">Project 2: Deployed Personal Portfolio with CI/CD pipelines on AWS</h3>
            <p className="box-description">
              Description: Created a personal portfolio website and deployed it using CI/CD pipelines on AWS. Integrated with GitHub for continuous deployment.
              <br />
              Tech Stack Used: Node.js, HTML, AWS Services (CodePipeline, Route53, Elastic Beanstalk), Git, GitHub
            </p>
            <h3 className="box-heading">Project 3: Daily Routine Automation</h3>
            <p className="box-description">
              Description: Automated logins and logouts for daily classes and meetings held on different websites and links at different times.
              <br />
              Tech Stack Used: Python, Selenium
            </p>
            <h3 className="box-heading">Project 4: WhatsApp Automation</h3>
            <p className="box-description">
              Description: Contributed to an open-source project called WhatsApp play where automation codes were written using Python and Selenium to add extra features to WhatsApp.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-heading">Academic Projects</h2>
          <div className="box" id="academic-box">
            <h3 className="box-heading">Mini Project: Online Voting System</h3>
            <p className="box-description">
              Description: Enabling voting service through online platform. Technologies used: PHP, HTML.
              <br />
              Role: Worked on the frontend part of the project.
            </p>
            <h3 className="box-heading">Major Project: Deep Learning Ensemble for Hyperspectral Image Classification</h3>
            <p className="box-description">
              Description: Classified Hyperspectral images in the field of remote sensing using deep CNN-based methods. Role: Developer and Documentation.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;