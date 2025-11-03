import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronDown,
  Mail,
  Phone,
  Github,
  Linkedin,
  Briefcase,
  Cloud,
  Server,
  Network,
  Sparkles,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { SOCIAL_LINKS } from "../../constants";

export const Home: React.FC = () => {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const handleScrollToNext = () => {
    const section = document.getElementById("experience");
    section?.scrollIntoView({ behavior: "smooth" });
  };

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
      id="home"
      className={`min-h-screen h-screen flex flex-col justify-center items-center relative px-4 md:px-8 snap-start overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-white via-gray-50 to-white"
      }`}
    >
      {/* Floating background orbs */}
      <div className="floating-orb orb-1" />
      <div className="floating-orb orb-2" />
      <div className="floating-orb orb-3" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-texture" />

      <motion.div
        style={{ opacity, scale }}
        className="section-container text-center relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main heading with enhanced styling */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <div className="relative inline-block">
              <motion.h1
                className={`text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-2 font-display relative leading-tight ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
                initial={{ letterSpacing: "0.05em" }}
                animate={{ letterSpacing: "-0.02em" }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                hi, i'm <span className="gradient-text">selima</span>
              </motion.h1>
              
              {/* Decorative sparkle */}
              <motion.div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 md:-top-8 md:-right-8"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 md:w-10 md:h-10 text-purple-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 md:mb-12 max-w-2xl mx-auto font-light px-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            infrastructure engineer · problem solver · systems thinker
          </motion.p>

          {/* Expertise badges with enhanced design */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-10 md:mb-14 px-4"
          >
            {[
              { icon: Cloud, text: "Cloud Infrastructure", color: "purple" },
              { icon: Server, text: "Backend Systems", color: "pink" },
              { icon: Network, text: "Networks & Security", color: "indigo" },
            ].map((item, index) => (
              <motion.div
                key={item.text}
                className={`glass-card flex items-center gap-2 sm:gap-3 px-3 sm:px-5 md:px-7 py-2.5 sm:py-3 md:py-3.5 rounded-full hover:scale-105 transition-all duration-300 group cursor-pointer ${
                  theme === "dark"
                    ? "hover:bg-white/10"
                    : "hover:bg-gray-900/5"
                }`}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <div
                  className={`p-1.5 sm:p-2 rounded-full bg-${item.color}-500/10 group-hover:bg-${item.color}-500/20 transition-colors`}
                >
                  <item.icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 text-${item.color}-500 group-hover:scale-110 transition-transform`}
                  />
                </div>
                <span
                  className={`text-xs sm:text-sm md:text-base font-medium whitespace-nowrap ${
                    theme === "dark" ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Social links with enhanced animation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            {[
              { href: SOCIAL_LINKS.email, icon: Mail, color: "purple" },
              { href: SOCIAL_LINKS.phone, icon: Phone, color: "pink" },
              {
                href: SOCIAL_LINKS.github,
                icon: Github,
                color: "orange",
                external: true,
              },
              {
                href: SOCIAL_LINKS.linkedin,
                icon: Linkedin,
                color: "blue",
                external: true,
              },
              {
                href: SOCIAL_LINKS.portfolio,
                icon: Briefcase,
                color: "indigo",
                external: true,
              },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className={`p-2.5 sm:p-3 md:p-4 rounded-full glass-card hover:scale-110 transition-all duration-300 group ${
                  theme === "dark"
                    ? "hover:bg-white/10"
                    : "hover:bg-gray-900/5"
                }`}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon
                  className={`w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-colors ${
                    theme === "dark"
                      ? `text-gray-400 group-hover:text-${link.color}-400`
                      : `text-gray-600 group-hover:text-${link.color}-600`
                  }`}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center"
          >
            <motion.button
              onClick={handleScrollToNext}
              className={`p-3 rounded-full glass-card hover:scale-110 transition-all duration-300 group ${
                theme === "dark"
                  ? "hover:bg-white/10"
                  : "hover:bg-gray-900/5"
              }`}
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown
                className={`w-6 h-6 ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              />
            </motion.button>
            <motion.p
              className={`mt-3 text-xs uppercase tracking-wider ${
                theme === "dark" ? "text-gray-500" : "text-gray-400"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Scroll to explore
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
