import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="snap-slide hero d-flex align-items-center justify-content-center"
    >
      <div className="hero-content">
        <div className="hero-header">
          <h1 className="pixel-font hero-name">SALIMA AMMAR</h1>
          <p className="hero-axiom">Aspiring Software Engineer & Innovator</p>
        </div>

        <div className="hero-description">
          <p className="hero-bio">
            Hi, I’m a passionate software engineering student interested in app
            development, artificial intelligence, and cybersecurity. I love
            creating innovative solutions that blend technology and creativity
            to solve real-world problems. <br /> I’ve always been curious about
            how things work, which is what drew me to software development. I
            enjoy the mix of logic and creativity it requires, whether I’m
            designing web or mobile applications, exploring AI solutions, or
            finding better ways to write efficient code. More than anything, I
            want to build innovative and useful solutions that have a real
            impact on people’s lives. There’s always something new to learn in
            tech, and that’s what keeps me excited and motivated.*
          </p>
        </div>
      </div>

      <div className="social-icons">
        <a
          href="https://github.com/salimaammarr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://linkedin.com/in/salima-ammar"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
