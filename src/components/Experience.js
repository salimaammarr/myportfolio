// client/src/components/Experience.js
import React from "react";
import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      role: "Intern - New Products Development (PLM)",
      company: "Bombardier Inc.",
      duration: "September 2024 – Present",
      location: "Montreal, Canada",
      description:
        "Automated data workflows using Power Automate, developed a Python tool for file validation, created data models with Capella, conducted QA testing in Teamcenter, and participated in the Women in Engineering program.",
    },
    {
      role: "Technical Support and Digital Offer Agent",
      company: "Desjardins Insurance",
      duration: "May 2023 – August 2024",
      location: "Montreal, Canada",
      description:
        "Resolved technical issues for web and mobile apps and implemented digital solutions to improve client experience and operational efficiency.",
    },
  ];

  // In your render mapping:
  return (
    <section
      id="experience-section"
      className="snap-slide experience d-flex align-items-center justify-content-center"
    >
      <div className="container text-center">
        <h2 className="pixel-font mb-4">EXPERIENCE</h2>
        <div className="experience-grid">
          {experiences.map((exp, idx) => (
            <div className="experience-box" key={idx}>
              <h5>{exp.role}</h5>
              <p className="mb-1">
                {exp.company} | {exp.duration}
              </p>
              <p className="text-muted">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
