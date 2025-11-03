import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, FileText, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { SECTIONS, SOCIAL_LINKS } from "../../constants";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? theme === "dark"
            ? "bg-gray-900/80 shadow-2xl"
            : "bg-white/80 shadow-2xl"
          : theme === "dark"
          ? "bg-gray-900/50"
          : "bg-white/50"
      } backdrop-blur-xl border-b ${
        theme === "dark" ? "border-gray-800/50" : "border-gray-100/50"
      }`}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <motion.div
            className="relative w-10 h-10 cursor-pointer group"
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => handleSectionClick("home")}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <Terminal className="w-6 h-6 group-hover:text-purple-500 transition-colors" />
            </div>
            <motion.div
              className="absolute inset-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke={theme === "dark" ? "white" : "black"}
                  strokeWidth="0.5"
                  strokeDasharray="0.5 2"
                  fill="none"
                  className="opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </svg>
            </motion.div>
          </motion.div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {SECTIONS.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`nav-link capitalize text-sm font-medium relative ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                } ${
                  activeSection === section
                    ? theme === "dark"
                      ? "text-white"
                      : "text-black"
                    : ""
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.button>
            ))}

            {/* Resume button */}
            <motion.a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all duration-300 glass-card ${
                theme === "dark"
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
              } border border-white/10`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </motion.a>

            {/* Theme toggle */}
            <motion.button
              onClick={toggleTheme}
              className={`p-2.5 rounded-full glass-card transition-all ${
                theme === "dark"
                  ? "text-white hover:bg-white/10"
                  : "text-gray-900 hover:bg-gray-900/10"
              }`}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -180 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {theme === "dark" ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile menu buttons */}
          <div className="md:hidden flex items-center gap-3">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full glass-card ${
                theme === "dark"
                  ? "text-white hover:bg-white/10"
                  : "text-gray-900 hover:bg-gray-900/10"
              } transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full glass-card ${
                theme === "dark"
                  ? "text-white hover:bg-white/10"
                  : "text-gray-900 hover:bg-gray-900/10"
              } transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90 }}
                    animate={{ rotate: 0 }}
                    exit={{ rotate: 90 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-x-0 top-[73px] ${
              theme === "dark"
                ? "bg-gray-900/95 border-gray-800/50"
                : "bg-white/95 border-gray-200/50"
            } border-b backdrop-blur-xl shadow-2xl md:hidden overflow-hidden`}
          >
            <motion.div
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              exit={{ y: -20 }}
              className="flex flex-col items-center gap-6 p-8"
            >
              {SECTIONS.map((section, index) => (
                <motion.button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`text-lg font-medium capitalize relative ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-white"
                      : "text-gray-600 hover:text-black"
                  } ${
                    activeSection === section
                      ? theme === "dark"
                        ? "text-white"
                        : "text-black"
                      : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section}
                  {activeSection === section && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500"
                      layoutId="activeSectionMobile"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.button>
              ))}
              <motion.a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium glass-card ${
                  theme === "dark"
                    ? "bg-white/10 text-white hover:bg-white/20"
                    : "bg-gray-900/10 text-gray-900 hover:bg-gray-900/20"
                } border border-white/10 transition-all`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
