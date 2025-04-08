import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { ProjectCard } from "../ui/ProjectCard";
import { PROJECTS } from "../../constants";

interface ProjectsProps {
  sectionRef: (node?: Element | null) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  const { theme } = useTheme();

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`h-screen flex items-center px-4 md:px-8 snap-start ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-800 to-gray-900"
          : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <motion.div
        className="section-container w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2
          className={`text-3xl md:text-4xl font-bold mb-12 text-center font-display ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
