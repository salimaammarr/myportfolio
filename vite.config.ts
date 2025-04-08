import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/myportfolio/",
  plugins: [react()],
  optimizeDeps: {
    include: ["lucide-react"],
  },
  build: {
    commonjsOptions: {
      include: [/lucide-react/, /node_modules/],
    },
  },
});
