import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { InterestCard } from "../ui/InterestCard";
import { INTERESTS } from "../../constants";

interface AboutProps {
  sectionRef: (node?: Element | null) => void;
}

export const About: React.FC<AboutProps> = ({ sectionRef }) => {
  const { theme } = useTheme();
  const [activeInterest, setActiveInterest] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInterest((prev) => (prev + 1) % INTERESTS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const interestVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className={`h-screen flex items-center px-4 md:px-8 snap-start ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-gray-50"
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
          About Me
        </h2>
        <div
          className={`grid md:grid-cols-2 gap-8 ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-100"
          } rounded-2xl p-6 md:p-8 shadow-sm`}
        >
          <div>
            <p
              className={`text-lg leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              I'm a software engineering student passionate about creating
              innovative solutions. I love tackling complex problems and turning
              them into elegant, user-friendly applications.
            </p>
          </div>
          <div className="relative h-[200px] overflow-hidden">
            <AnimatePresence initial={false} custom={1}>
              <motion.div
                key={activeInterest}
                custom={1}
                variants={interestVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <InterestCard interest={INTERESTS[activeInterest]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
