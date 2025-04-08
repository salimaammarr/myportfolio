import { Music, Brain, Palette, Code2 } from "lucide-react";
import { Interest, Project, Experience } from "../types";

export const INTERESTS: Interest[] = [
  { icon: Music, title: "Music", color: "text-purple-500" },
  { icon: Brain, title: "Problem Solving", color: "text-pink-500" },
  { icon: Palette, title: "Art", color: "text-orange-500" },
  { icon: Code2, title: "Coding", color: "text-indigo-500" },
];

export const PROJECTS: Project[] = [
  {
    title: "ChatApp",
    description:
      "A full-stack chatting platform with real-time messaging capabilities.",
    githubUrl: "https://github.com/Samaya-Anwar/SOEN341-project",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO"],
  },
  {
    title: "AI Medical Chatbot",
    description:
      "An intelligent medical chatbot powered by LLMs and semantic search.",
    githubUrl: "https://github.com/salimaammarr/AI-Medical-Chatbot",
    technologies: ["Python", "Flask", "Groq API", "AWS"],
  },
  {
    title: "TinPets",
    description: "A full-stack MERN application for connecting pet owners.",
    githubUrl: "https://github.com/salimaammarr/TinPets",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Software Engineering Intern",
    company: "Bombardier Inc. - New Products Development (PLM)",
    period: "September 2024 - May 2025",
    description:
      "Developed Python-based validation tools and automated processes using Azure and Selenium, reducing data errors by 60% and streamlining workflows.",
  },
  {
    title: "Technical Support and Digital Offer Agent",
    company: "Desjardins Insurance",
    period: "May 2023 - August 2024",
    description:
      "Managed technical support for web and mobile applications while handling JIRA tickets and improving internal documentation.",
  },
];

export const SECTIONS = ["home", "experience", "projects", "about"];

export const SOCIAL_LINKS = {
  email: "mailto:salimaammar7@icloud.com",
  phone: "tel:+14389237690",
  github: "https://github.com/salimaammarr",
  linkedin: "https://linkedin.com/in/salima-ammar/",
  portfolio: "https://salimaammarr.github.io/myportfolio/",
  resume: "/myportfolio/resume.pdf",
};
