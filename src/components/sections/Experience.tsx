import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { ExperienceCard } from "../ui/ExperienceCard";
import { EXPERIENCES } from "../../constants";
import { Briefcase } from "lucide-react";

interface ExperienceProps {
  sectionRef: (node?: Element | null) => void;
}

export const Experience: React.FC<ExperienceProps> = ({ sectionRef }) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`min-h-screen flex items-center px-4 md:px-8 py-16 md:py-20 lg:py-24 snap-start relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 noise-texture" />

      {/* Floating orb */}
      <div
        className="floating-orb"
        style={{
          width: "450px",
          height: "450px",
          background:
            "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, transparent 70%)",
          top: "20%",
          right: "-10%",
          animationDelay: "2s",
        }}
      />

      <motion.div
        ref={containerRef}
        className="section-container w-full relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {/* Section header */}
        <div className="mb-10 sm:mb-12 md:mb-16 text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-card mb-4 sm:mb-6"
          >
            <Briefcase
              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                theme === "dark" ? "text-purple-400" : "text-purple-600"
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
            Work <span className="gradient-text">Experience</span>
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
            My professional journey in tech
          </motion.p>
        </div>

        {/* Timeline layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline line - hidden on mobile, visible on desktop */}
          <div
            className={`hidden md:block absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 ${
              theme === "dark" ? "bg-gray-700" : "bg-gray-300"
            } transform md:-translate-x-1/2`}
          >
            {/* Gradient overlay on timeline */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-orange-500/50 opacity-50" />
          </div>

          {/* Experience cards */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12">
            {EXPERIENCES.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative md:grid md:grid-cols-2 md:gap-6 lg:gap-8 ${
                  index % 2 === 0 ? "md:text-right" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="hidden md:block absolute left-1/2 top-8 w-4 h-4 rounded-full border-4 transform -translate-x-1/2 z-10"
                  style={{
                    borderColor:
                      theme === "dark"
                        ? "rgb(17, 24, 39)"
                        : "rgb(255, 255, 255)",
                    background:
                      index === 0
                        ? "linear-gradient(135deg, #9333ea, #ec4899)"
                        : theme === "dark"
                        ? "rgb(55, 65, 81)"
                        : "rgb(209, 213, 219)",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                />

                {/* Card positioned in alternating columns */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "md:col-start-1 md:col-end-2"
                      : "md:col-start-2 md:col-end-3"
                  }`}
                >
                  <ExperienceCard experience={experience} index={index} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
