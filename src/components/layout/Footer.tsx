import React from "react";
import { useTheme } from "../../hooks/useTheme";

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`py-8 text-center ${
        theme === "dark"
          ? "text-gray-400 border-gray-800"
          : "text-gray-600 border-gray-100"
      } border-t`}
    >
      <p>© {new Date().getFullYear()} Salima Ammar. All rights reserved.</p>
    </footer>
  );
};
