import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./hooks/useTheme";
import { useScrollProgress } from "./hooks/useScrollProgress";
import { useActiveSection } from "./hooks/useActiveSection";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./components/sections/Home";
import { Experience } from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import { About } from "./components/sections/About";

function AppContent() {
  const { theme } = useTheme();
  const scrollProgress = useScrollProgress();
  const { activeSection, refs } = useActiveSection();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "dark bg-gray-900" : "bg-white"
      } transition-colors duration-300 overflow-hidden`}
    >
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <Navbar activeSection={activeSection} />

      <div className="h-screen overflow-y-auto snap-y snap-mandatory">
        <Home />
        <Experience sectionRef={refs.experienceRef} />
        <Projects sectionRef={refs.projectsRef} />
        <About sectionRef={refs.aboutRef} />
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
