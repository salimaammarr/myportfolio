import React from "react";
import "./About.css";

const About = () => {
  const iconsMapping = {
    Coding: "bi bi-code-slash",
    Puzzles: "bi bi-puzzle-fill",
    Music: "bi bi-music-note-beamed",
    Gym: "bi bi-droplet",
    Yoga: "bi bi-yin-yang",
    Gaming: "bi bi-controller",
    Art: "bi bi-flower1",
  };
  const items = [
    {
      title: "Coding",
      icon: ["Coding"],
      description: "",
    },
    {
      title: "Puzzles",
      icon: ["Puzzles"],
      description: "",
    },
    {
      title: "Music",
      icon: ["Music"],
      description: "",
    },
    {
      title: "Gym",
      icon: ["Gym"],
      description: "",
    },
    {
      title: "Yoga",
      icon: ["Yoga"],
      description: "",
    },
    {
      title: "Art",
      icon: ["Art"],
      description: "",
    },
  ];

  return (
    <section
      id="about-section"
      className="snap-slide about d-flex align-items-center justify-content-center"
    >
      <div className="container text-center">
        <h2 className="pixel-font mb-4">MORE ABOUT ME</h2>
        <div className="about-grid">
          {items.map((p, index) => (
            <a
              key={index}
              href={p.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="about-box"
            >
              <div className="about-title">{p.title}</div>
              <div className="about-description">{p.description}</div>
              <div className="about-icons">
                {p.icon &&
                  p.icon.map((iconItem, idx) => (
                    <span key={idx} className="about-icon" title={iconItem}>
                      {iconsMapping[iconItem] ? (
                        <i className={iconsMapping[iconItem]}></i>
                      ) : (
                        iconItem
                      )}
                    </span>
                  ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
