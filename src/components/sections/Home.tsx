import React from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  Code2,
  Brain,
  Shield,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { SOCIAL_LINKS } from "../../constants";

export const Home: React.FC = () => {
  const { theme } = useTheme();

  const handleScrollToNext = () => {
    const section = document.getElementById("experience");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`h-screen flex flex-col justify-center items-center relative px-4 md:px-8 snap-start ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800"
          : "bg-gradient-to-b from-white to-gray-50"
      }`}
    >
      <motion.div
        className="section-container text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className={`text-4xl md:text-7xl font-bold mb-6 font-display ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          Hi, I'm <span className="gradient-text">Salima</span>
        </motion.h1>
        <motion.p
          className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          A passionate software engineering student interested in software
          development, artificial intelligence, and cybersecurity.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12">
          <div
            className={`flex items-center gap-4 ${
              theme === "dark" ? "bg-gray-800/50" : "bg-white/50"
            } backdrop-blur-sm px-4 md:px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <Code2 className="w-5 h-5 text-purple-500" />
            <span
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } whitespace-nowrap`}
            >
              Software Development
            </span>
          </div>
          <div
            className={`flex items-center gap-4 ${
              theme === "dark" ? "bg-gray-800/50" : "bg-white/50"
            } backdrop-blur-sm px-4 md:px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <Brain className="w-5 h-5 text-pink-500" />
            <span
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } whitespace-nowrap`}
            >
              Artificial Intelligence
            </span>
          </div>
          <div
            className={`flex items-center gap-4 ${
              theme === "dark" ? "bg-gray-800/50" : "bg-white/50"
            } backdrop-blur-sm px-4 md:px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300`}
          >
            <Shield className="w-5 h-5 text-indigo-500" />
            <span
              className={`${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              } whitespace-nowrap`}
            >
              Cybersecurity
            </span>
          </div>
        </motion.div>
        <motion.div className="flex justify-center gap-6 mb-12">
          <a
            href={SOCIAL_LINKS.email}
            className={`nav-link ${
              theme === "dark"
                ? "text-gray-400 hover:text-purple-400"
                : "text-gray-600 hover:text-purple-600"
            }`}
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.phone}
            className={`nav-link ${
              theme === "dark"
                ? "text-gray-400 hover:text-pink-400"
                : "text-gray-600 hover:text-pink-600"
            }`}
          >
            <Phone className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-link ${
              theme === "dark"
                ? "text-gray-400 hover:text-orange-400"
                : "text-gray-600 hover:text-orange-600"
            }`}
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-link ${
              theme === "dark"
                ? "text-gray-400 hover:text-blue-400"
                : "text-gray-600 hover:text-blue-600"
            }`}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={SOCIAL_LINKS.portfolio}
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-link ${
              theme === "dark"
                ? "text-gray-400 hover:text-green-400"
                : "text-gray-600 hover:text-green-600"
            }`}
          >
            <Briefcase className="w-6 h-6" />
          </a>
        </motion.div>
        <motion.button
          onClick={handleScrollToNext}
          className={`p-2 rounded-full ${
            theme === "dark"
              ? "text-white hover:bg-gray-800"
              : "text-gray-900 hover:bg-gray-100"
          } transition-colors`}
          whileHover={{ y: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};
