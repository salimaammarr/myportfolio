import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { INTERESTS } from "../../constants";
import { Heart, Lightbulb, Target } from "lucide-react";

interface AboutProps {
  sectionRef: (node?: Element | null) => void;
}

export const About: React.FC<AboutProps> = ({ sectionRef }) => {
  const { theme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`min-h-screen flex items-center px-4 md:px-8 py-16 md:py-20 lg:py-24 snap-start relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute inset-0 noise-texture" />

      {/* Floating orbs */}
      <div
        className="floating-orb"
        style={{
          width: "450px",
          height: "450px",
          background:
            "radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
          top: "10%",
          left: "5%",
          animationDelay: "0s",
        }}
      />
      <div
        className="floating-orb"
        style={{
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)",
          bottom: "15%",
          right: "10%",
          animationDelay: "4s",
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-card mb-4 sm:mb-6"
          >
            <Heart
              className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 ${
                theme === "dark" ? "text-orange-400" : "text-orange-600"
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
            About <span className="gradient-text">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-base sm:text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            beyond the code
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Main content cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8 mb-10 sm:mb-12">
            {/* Learning */}
            <motion.div
              variants={itemVariants}
              className={`p-5 sm:p-6 md:p-8 rounded-2xl glass-card hover-lift group ${
                theme === "dark"
                  ? "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60"
                  : "bg-white/40 border-gray-200/50 hover:bg-white/60"
              } backdrop-blur-sm border relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-full bg-purple-500/10 flex-shrink-0">
                    <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                  </div>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold ${
                      theme === "dark" ? "text-purple-400" : "text-purple-600"
                    }`}
                  >
                    learning
                  </h3>
                </div>
                <p
                  className={`text-sm sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  apps · russian · systems · networks
                </p>
                <p
                  className={`text-xs leading-relaxed italic ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  how things fall apart · how to put them back
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-tr-2xl" />
            </motion.div>

            {/* Puzzles */}
            <motion.div
              variants={itemVariants}
              className={`p-5 sm:p-6 md:p-8 rounded-2xl glass-card hover-lift group ${
                theme === "dark"
                  ? "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60"
                  : "bg-white/40 border-gray-200/50 hover:bg-white/60"
              } backdrop-blur-sm border relative overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-full bg-pink-500/10 flex-shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
                  </div>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold ${
                      theme === "dark" ? "text-pink-400" : "text-pink-600"
                    }`}
                  >
                    puzzles
                  </h3>
                </div>
                <p
                  className={`text-sm sm:text-sm md:text-base leading-relaxed mb-2 sm:mb-3 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  math · ctfs · tetris · lockpicking
                </p>
                <p
                  className={`text-xs leading-relaxed italic ${
                    theme === "dark" ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  pieces that don't fit until they do
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-tr-2xl" />
            </motion.div>

            {/* Beliefs */}
            <motion.div
              variants={itemVariants}
              className={`p-5 sm:p-6 md:p-8 rounded-2xl glass-card hover-lift group ${
                theme === "dark"
                  ? "bg-gray-800/40 border-gray-700/50 hover:bg-gray-800/60"
                  : "bg-white/40 border-gray-200/50 hover:bg-white/60"
              } backdrop-blur-sm border relative overflow-hidden sm:col-span-2 md:col-span-3 lg:col-span-1`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-full bg-orange-500/10 flex-shrink-0">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" />
                  </div>
                  <h3
                    className={`text-lg sm:text-xl md:text-2xl font-bold ${
                      theme === "dark" ? "text-orange-400" : "text-orange-600"
                    }`}
                  >
                    beliefs
                  </h3>
                </div>
                <p
                  className={`text-sm sm:text-sm md:text-base leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  systems are people. people are systems.
                  <br />
                  both break. both can be rebuilt.
                  <br />
                  errors belong. leave it better.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-tr-2xl" />
            </motion.div>
          </div>

          {/* Interests section */}
          <motion.div variants={itemVariants} className="mt-10 sm:mt-12 md:mt-16">
            <div className="text-center mb-6 sm:mb-8">
              <h3
                className={`text-xl sm:text-2xl md:text-3xl font-bold mb-2 ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                Interests & <span className="gradient-text">Habits</span>
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                things that keep me curious
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
              {INTERESTS.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={interest.title}
                    className={`p-4 sm:p-5 md:p-6 rounded-xl glass-card hover-lift group text-center ${
                      theme === "dark"
                        ? "bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/60"
                        : "bg-white/30 border-gray-200/50 hover:bg-white/60"
                    } backdrop-blur-sm border transition-all duration-300`}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.08,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ y: -8, scale: 1.05 }}
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-full flex items-center justify-center bg-gradient-to-br ${
                        theme === "dark"
                          ? "from-gray-700/50 to-gray-800/50"
                          : "from-gray-100/50 to-gray-200/50"
                      } group-hover:scale-110 transition-transform`}
                    >
                      <Icon
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${interest.color} group-hover:scale-110 transition-transform`}
                      />
                    </div>
                    <p
                      className={`text-xs font-medium leading-tight ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {interest.title}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
