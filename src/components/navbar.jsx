import React from "react";
import $ from "jquery";
import { Link } from "react-scroll";

import logo1 from "../img/main.gif";
import logo2 from "../img/main2.gif";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      logo: logo1
    };
  }

  componentDidMount() {
    const nav = $("nav");
    let navHeight = nav.outerHeight();

    $(".navbar-toggler").on("click", function() {
      if (!$("#mainNav").hasClass("navbar-reduce")) {
        $("#mainNav").addClass("navbar-reduce");
      }
    });

    $("body").scrollspy({
      target: "#mainNav",
      offset: navHeight
    });

    $(".js-scroll").on("click", function() {
      $(".navbar-collapse").collapse("hide");
    });

    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 50) {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-reduce");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-trans");
        this.setState({ logo: logo2 });
      } else {
        document
          .querySelector(".navbar-expand-md")
          .classList.add("navbar-trans");
        document
          .querySelector(".navbar-expand-md")
          .classList.remove("navbar-reduce");
        this.setState({ logo: logo1 });
      }
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
        id="mainNav"
      >
        <div className="container">
          <Link
            className="navbar-brand js-scroll"
            to="home"
            smooth={true}
            duration={1000}
          >
            <img
              src={this.state.logo}
              alt="logo"
              style={{ maxWidth: "100px" }}
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarDefault"
            aria-controls="navbarDefault"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div
            className="navbar-collapse collapse justify-content-end"
            id="navbarDefault"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll active"
                  to="home"
                  smooth={true}
                  duration={1000}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="about"
                  smooth={true}
                  duration={1000}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="portfolio"
                  smooth={true}
                  duration={1000}
                >
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link js-scroll"
                  to="contact"
                  smooth={true}
                  duration={1000}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;