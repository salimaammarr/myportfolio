import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { Interest } from "../../types";

interface InterestCardProps {
  interest: Interest;
}

export const InterestCard: React.FC<InterestCardProps> = ({ interest }) => {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`absolute top-0 left-0 right-0 p-6 ${
        theme === "dark" ? "bg-gray-700" : "bg-gray-50"
      } rounded-xl shadow-sm`}
    >
      <div
        className={`w-16 h-16 mx-auto flex items-center justify-center rounded-full ${
          theme === "dark" ? "bg-gray-600" : "bg-white"
        } mb-4`}
      >
        {React.createElement(interest.icon, {
          className: `w-8 h-8 ${interest.color}`,
        })}
      </div>
      <h4
        className={`text-xl font-display font-bold text-center ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        {interest.title}
      </h4>
    </motion.div>
  );
};
