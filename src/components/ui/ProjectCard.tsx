import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`project-card group ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-100"
      }`}
      whileHover={{ y: -5 }}
    >
      <div className="flex justify-between items-start mb-4">
        <h3
          className={`text-xl font-bold font-display group-hover:text-purple-500 transition-colors ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {project.title}
        </h3>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center gap-2 ${
            theme === "dark"
              ? "text-gray-400 hover:text-purple-400"
              : "text-gray-600 hover:text-purple-600"
          } transition-colors`}
        >
          <Github className="w-5 h-5" />
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
      <p
        className={`mb-4 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className={`skill-tag ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};
