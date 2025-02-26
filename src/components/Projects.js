import React from "react";
import "./Projects.css";

const Projects = () => {
  const techIconMapping = {
    Docker: "bi bi-box-seam",
    AWS: "bi bi-cloud-upload",
    Python: "bi bi-filetype-py",
    Flask: "bi bi-droplet",
    Java: "bi bi-cup",
    React: "bi bi-bootstrap-reboot",
    "Node.js": "bi bi-node-plus",
    CSS: "bi bi-filetype-css",
    JavaScript: "bi bi-filetype-js",
    EJS: "bi bi-filetype-jsx",
  };
  const projects = [
    {
      title: "AI Medical Chatbot",
      description:
        "A medical chatbot that uses AI to provide medical advice and information.",
      repoLink: "https://github.com/salimaammarr/AI-Medical-Chatbot",
      tech: ["Docker", "AWS", "Python", "Flask"],
    },
    {
      title: "Arithmetic Calculator",
      description: "A simple arithmetic calculator.",
      repoLink: "https://github.com/salimaammarr/Arithmetic-Calculator",
      tech: ["Java"],
    },
    {
      title: "Packing List",
      description: "A simple packing list app.",
      repoLink: "https://github.com/salimaammarr/Packing-List",
      tech: ["React"],
    },
    {
      title: "Pets Adoption Website",
      description: "A website for adopting pets.",
      repoLink: "https://github.com/salimaammarr/TinPets",
      tech: ["Node.js", "CSS", "JavaScript", "EJS"],
    },
    {
      title: "Cities Database",
      description: "A database of cities.",
      repoLink: "https://github.com/salimaammarr/Cities-Database",
      tech: ["Clojure"],
    },
    {
      title: "Cellular Network Coverage",
      description: "A cellular network coverage app.",
      repoLink: "https://github.com/salimaammarr/Cellular-Network-Coverage",
      tech: ["Python"],
    },
    {
      title: "Snake Game",
      description: "Just a snake game.",
      repoLink: "https://github.com/salimaammarr/SnakeGame",
      tech: ["Python"],
    },
  ];

  return (
    <section
      id="projects-section"
      className="snap-slide projects d-flex align-items-center justify-content-center"
    >
      <div className="container text-center">
        <h2 className="pixel-font mb-4">PROJECTS</h2>
        <div className="projects-grid">
          {projects.map((p, index) => (
            <a
              key={index}
              href={p.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-box"
            >
              <div className="project-title">{p.title}</div>
              <div className="project-description">{p.description}</div>
              <div className="tech-icons">
                {p.tech &&
                  p.tech.map((techItem, idx) => (
                    <span key={idx} className="tech-icon" title={techItem}>
                      {techIconMapping[techItem] ? (
                        <i className={techIconMapping[techItem]}></i>
                      ) : (
                        techItem
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

export default Projects;
