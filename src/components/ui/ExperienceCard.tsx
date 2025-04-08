import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { Experience } from "../../types";

interface ExperienceCardProps {
  experience: Experience;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`experience-card group ${
        theme === "dark"
          ? "bg-gray-800 border-gray-700"
          : "bg-white border-gray-100"
      }`}
    >
      <div className="flex flex-col md:flex-row md:items-start justify-between mb-4 gap-2">
        <div>
          <h3
            className={`text-xl font-bold font-display group-hover:text-purple-500 transition-colors ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {experience.title}
          </h3>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            {experience.company}
          </p>
        </div>
        <p
          className={`${
            theme === "dark" ? "text-gray-500" : "text-gray-500"
          } whitespace-nowrap`}
        >
          {experience.period}
        </p>
      </div>
      <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
        {experience.description}
      </p>
    </motion.div>
  );
};
