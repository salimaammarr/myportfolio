import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { ProjectCard } from "../ui/ProjectCard";
import { PROJECTS } from "../../constants";
import { Code2, Sparkles } from "lucide-react";

interface ProjectsProps {
  sectionRef: (node?: Element | null) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ sectionRef }) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className={`min-h-screen flex items-center px-4 md:px-8 py-16 md:py-20 lg:py-24 snap-start relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800"
          : "bg-gradient-to-br from-gray-50 via-white to-gray-50"
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 noise-texture" />

      {/* Floating orbs */}
      <div
        className="floating-orb"
        style={{
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
          animationDelay: "1s",
        }}
      />
      <div
        className="floating-orb"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.2) 0%, transparent 70%)",
          bottom: "10%",
          right: "-5%",
          animationDelay: "3s",
        }}
      />

      <motion.div
        className="section-container w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center px-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-card mb-4 sm:mb-6"
          >
            <Code2
              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                theme === "dark" ? "text-pink-400" : "text-pink-600"
              }`}
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-display ${
              theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-base sm:text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of my technical work and experiments
          </motion.p>
        </div>

        {/* Bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`
                ${
                  index === 0 || index === 3
                    ? "sm:col-span-2 lg:col-span-2 lg:row-span-1"
                    : ""
                }
              `}
            >
              <ProjectCard
                project={project}
                index={index}
                
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card ${
              theme === "dark"
                ? "text-gray-400 hover:text-purple-400"
                : "text-gray-600 hover:text-purple-600"
            } transition-colors cursor-pointer group`}
          >
            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-medium">
              More projects on{" "}
              <a
                href="https://github.com/salimaammarr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-dotted underline-offset-4 hover:decoration-solid"
              >
                GitHub
              </a>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
