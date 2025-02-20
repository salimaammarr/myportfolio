// client/src/components/Education.js
import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education">
      <h1>Education</h1>
      <div className="education-list">
        <div className="education-item">
          <h2>Degree – Institution</h2>
          <p>Additional details like graduation year, etc.</p>
        </div>
        {/* Add more education items as needed */}
      </div>
    </section>
  );
};

export default Education;
