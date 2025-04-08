import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Terminal, FileText, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { SECTIONS, SOCIAL_LINKS } from "../../constants";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 ${
        theme === "dark" ? "bg-gray-900/95" : "bg-white/95"
      } backdrop-blur-md z-40 border-b ${
        theme === "dark" ? "border-gray-800" : "border-gray-100"
      } shadow-lg transition-colors duration-300`}
    >
      <div className="section-container py-4">
        <div className="flex justify-between items-center">
          <div className="relative w-10 h-10">
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                theme === "dark" ? "text-white" : "text-black"
              }`}
            >
              <Terminal className="w-6 h-6" />
            </div>
            <div className="absolute inset-0">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle
                  cx="20"
                  cy="20"
                  r="16"
                  stroke={theme === "dark" ? "white" : "black"}
                  strokeWidth="0.5"
                  strokeDasharray="0.5 2"
                  fill="none"
                />
              </svg>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            {SECTIONS.map((section) => (
              <button
                key={section}
                onClick={() => handleSectionClick(section)}
                className={`nav-link capitalize ${
                  theme === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-black"
                } ${
                  activeSection === section
                    ? theme === "dark"
                      ? "text-white after:w-full"
                      : "text-black after:w-full"
                    : ""
                }`}
              >
                {section}
              </button>
            ))}
            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 ${
                theme === "dark"
                  ? "bg-white text-gray-900 hover:bg-gray-200"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              } rounded-full transition-colors`}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              } transition-colors`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              } transition-colors`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-full ${
                theme === "dark"
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-900 hover:bg-gray-100"
              } transition-colors`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <div
            className={`fixed inset-x-0 top-[73px] ${
              theme === "dark" ? "bg-gray-900" : "bg-white"
            } border-b ${
              theme === "dark" ? "border-gray-800" : "border-gray-200"
            } shadow-lg md:hidden`}
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {SECTIONS.map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionClick(section)}
                  className={`text-lg font-medium capitalize ${
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
                >
                  {section}
                </button>
              ))}
              <a
                href={SOCIAL_LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-6 py-3 ${
                  theme === "dark"
                    ? "bg-white text-gray-900 hover:bg-gray-200"
                    : "bg-gray-900 text-white hover:bg-gray-800"
                } rounded-full transition-colors`}
              >
                <FileText className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};
