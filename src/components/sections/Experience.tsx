import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { ExperienceCard } from "../ui/ExperienceCard";
import { EXPERIENCES } from "../../constants";

interface ExperienceProps {
  sectionRef: (node?: Element | null) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ sectionRef }) => {
  const { theme } = useTheme();

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`h-screen flex items-center px-4 md:px-8 snap-start ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
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
          Work Experience
        </h2>
        <div className="space-y-8 md:space-y-12">
          {EXPERIENCES.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
