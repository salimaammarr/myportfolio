import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { Experience } from "../../types";
import { Building2, Calendar, ChevronRight } from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  index?: number;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index = 0,
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`experience-card group h-full glass-card hover-lift relative p-5 sm:p-6 md:p-8 ${
        theme === "dark"
          ? "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60"
          : "bg-white/40 border-gray-200/50 hover:bg-white/60"
      }`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Highlight indicator for current role */}
      {index === 0 && (
        <div className="absolute -top-2 sm:-top-3 left-4 sm:left-6 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold shadow-lg">
          Current
        </div>
      )}

      <div className="flex flex-col h-full">
        {/* Job title */}
        <h3
          className={`text-base sm:text-lg md:text-xl font-bold font-display group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all mb-2.5 sm:mb-3 leading-tight ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {experience.title}
        </h3>

        {/* Company info */}
        <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
          <Building2
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${
              theme === "dark" ? "text-purple-400" : "text-purple-600"
            }`}
          />
          <p
            className={`font-semibold text-sm sm:text-base ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            {experience.company}
          </p>
        </div>

        {/* Period */}
        <div className="flex items-center gap-2 mb-3 sm:mb-4">
          <Calendar
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0 ${
              theme === "dark" ? "text-gray-500" : "text-gray-400"
            }`}
          />
          <p
            className={`text-xs sm:text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {experience.period}
          </p>
        </div>

        {/* Description */}
        <p
          className={`text-sm sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {experience.description}
        </p>

        {/* Highlights */}
        {experience.highlights && experience.highlights.length > 0 && (
          <div className="mt-auto pt-3 sm:pt-4 border-t border-gray-700/30">
            <p
              className={`text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3 ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Key Achievements
            </p>
            <ul className="space-y-1.5 sm:space-y-2">
              {experience.highlights.map((highlight, idx) => (
                <motion.li
                  key={idx}
                  className={`flex items-start gap-1.5 sm:gap-2 text-xs sm:text-xs ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-purple-500" />
                  <span className="leading-relaxed">{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Decorative corner accent */}
      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden rounded-tr-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent" />
      </div>
    </motion.div>
  );
};
