import React from "react";
import linkedinIcon from "../img/link.gif";
import gmailIcon from "../img/gmail.gif";
import githubIcon from "../img/github.gif";
import '../libs/style2.css'

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <h2 className="contact-heading">Contact Me</h2>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/katakam-nikhilesh/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a
            href="mailto:knikki3132@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gmailIcon} alt="Gmail" className="social-icon" />
          </a>
          <a
            href="https://www.github.com/NikhileshKatakam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="social-icon" />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
