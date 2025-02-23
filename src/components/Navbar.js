import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="vertical-navbar position-fixed">
      <ul className="list-unstyled m-0 p-0">
        <li className="my-3">
          <button
            className="nav-icon"
            onClick={() => scrollToSection("hero-section")}
          >
            <img src={process.env.PUBLIC_URL + "/favicon.ico"} alt="" />
          </button>
        </li>
        <li className="my-3">
          <button
            className="nav-text"
            onClick={() => scrollToSection("about-section")}
          >
            More about me
          </button>
        </li>
        <li className="my-3">
          <button
            className="nav-text"
            onClick={() => scrollToSection("projects-section")}
          >
            Projects
          </button>
        </li>
        <li className="my-3">
          <button
            className="nav-text"
            onClick={() => scrollToSection("experience-section")}
          >
            Experience
          </button>
        </li>
        <li className="my-3">
          <a href="/Salima_Ammar.pdf" download className="nav-text resume-link">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
