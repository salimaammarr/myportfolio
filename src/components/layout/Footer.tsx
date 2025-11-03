import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { Heart, Code2 } from "lucide-react";

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`relative py-12 text-center overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 to-gray-800 border-gray-800/50"
          : "bg-gradient-to-b from-white to-gray-50 border-gray-100/50"
      } border-t backdrop-blur-sm`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Built with love message */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            built with
          </span>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Heart className="w-4 h-4 text-pink-500 fill-current" />
          </motion.div>
          <span
            className={`text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            and
          </span>
          <Code2 className="w-4 h-4 text-purple-500" />
        </motion.div>

        {/* Copyright */}
        <motion.p
          className={`text-sm ${
            theme === "dark" ? "text-gray-500" : "text-gray-400"
          }`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          © {new Date().getFullYear()} selima ammar. all rights reserved.
        </motion.p>

        {/* Decorative gradient line */}
        <motion.div
          className="mt-6 w-32 h-0.5 mx-auto bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        />
      </motion.div>
    </footer>
  );
};
