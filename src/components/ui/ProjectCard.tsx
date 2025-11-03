import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { Project } from "../../types";

interface ProjectCardProps {
  project: Project;
  index?: number;
  featured?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  featured = false,
}) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`project-card group glass-card hover-lift h-full flex flex-col relative overflow-hidden p-5 sm:p-6 md:p-8 ${
        theme === "dark"
          ? "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60"
          : "bg-white/40 border-gray-200/50 hover:bg-white/60"
      } ${featured ? "sm:p-8 md:p-10" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <div className="flex items-center gap-1 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-yellow-500/80 to-orange-500/80 text-white text-xs font-semibold shadow-lg backdrop-blur-sm">
            <Star className="w-3 h-3 fill-current" />
            <span className="hidden xs:inline">Featured</span>
          </div>
        </div>
      )}

      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 opacity-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 pointer-events-none rounded-2xl"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div className="flex flex-col h-full relative z-10">
        {/* Header */}
        <div className="flex justify-between items-start mb-3 sm:mb-4 gap-2">
          <h3
            className={`text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-orange-500 transition-all leading-tight ${
              theme === "dark" ? "text-white" : "text-black"
            } ${featured ? "sm:text-xl md:text-2xl lg:text-3xl" : ""}`}
          >
            {project.title}
          </h3>

          {/* GitHub link */}
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-shrink-0 p-2 sm:p-2.5 rounded-full glass-card hover:scale-110 transition-all ${
              theme === "dark"
                ? "hover:bg-white/10"
                : "hover:bg-gray-900/5"
            }`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <Github
              className={`w-4 h-4 sm:w-5 sm:h-5 ${
                theme === "dark"
                  ? "text-gray-400 group-hover:text-purple-400"
                  : "text-gray-600 group-hover:text-purple-600"
              }`}
            />
          </motion.a>
        </div>

        {/* Description */}
        <p
          className={`mb-4 sm:mb-5 md:mb-6 leading-relaxed ${
            featured ? "text-sm sm:text-base md:text-lg" : "text-sm sm:text-sm md:text-base"
          } ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-auto">
          <div
            className={`text-xs uppercase tracking-wider font-semibold mb-3 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <motion.span
                key={tech}
                className={`skill-tag ${
                  theme === "dark"
                    ? "bg-gray-700/60 hover:bg-gray-600/80 text-gray-200"
                    : "bg-gray-100/60 hover:bg-gray-200/80 text-gray-700"
                } border border-gray-600/20`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* View project link */}
        <motion.div
          className="mt-6 pt-6 border-t border-gray-700/30"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.6 }}
          transition={{ duration: 0.2 }}
        >
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 text-sm font-medium group/link ${
              theme === "dark"
                ? "text-purple-400 hover:text-purple-300"
                : "text-purple-600 hover:text-purple-500"
            }`}
          >
            <span>View Project</span>
            <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>

      {/* Decorative corner element */}
      <motion.div
        className="absolute bottom-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-bl-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isHovered ? 0.15 : 0, scale: isHovered ? 1 : 0.8 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 via-pink-500 to-transparent" />
      </motion.div>
    </motion.div>
  );
};
