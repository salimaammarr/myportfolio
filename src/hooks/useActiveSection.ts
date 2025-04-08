import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [experienceRef, experienceInView] = useInView({ threshold: 0.3 });
  const [projectsRef, projectsInView] = useInView({ threshold: 0.3 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (experienceInView) setActiveSection("experience");
    else if (projectsInView) setActiveSection("projects");
    else if (aboutInView) setActiveSection("about");
  }, [homeInView, experienceInView, projectsInView, aboutInView]);

  return {
    activeSection,
    refs: {
      homeRef,
      experienceRef,
      projectsRef,
      aboutRef,
    },
  };
}
