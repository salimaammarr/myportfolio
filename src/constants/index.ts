import { Coffee, Calculator, Code2, Shield, Moon, Music } from "lucide-react";
import { Interest, Project, Experience } from "../types";

export const INTERESTS: Interest[] = [
  { icon: Code2, title: "Systems & Networks", color: "text-purple-500" },
  { icon: Shield, title: "Security & CTFs", color: "text-pink-500" },
  { icon: Calculator, title: "Math & Puzzles", color: "text-orange-500" },
  
  { icon: Coffee, title: "Coffee", color: "text-amber-500" },
  { icon: Moon, title: "Nocturnal", color: "text-blue-500" },
  { icon: Music, title: "Songwriter", color: "text-indigo-500" },
];

export const PROJECTS: Project[] = [
  {
    title: "QwikRide – Bike Sharing System",
    description:
      "Bike sharing platform with role-based access control and JWT authentication. Optimized for fast load times with code splitting.",
    githubUrl: "https://github.com/Abdul-RehmanCU/SOEN-343---Bike",
    technologies: ["React", "Spring Boot", "Spring Security", "Maven", "JWT"],
  },
  {
    title: "AI Medical Chatbot",
    description:
      "Medical Q&A chatbot using LLMs and semantic search. Integrated with vector database for context-aware responses.",
    githubUrl: "https://github.com/salimaammarr/AI-Medical-Chatbot",
    technologies: ["Python", "Flask", "Groq API", "LangChain", "Pinecone", "Docker", "AWS"],
  },
  
  {
    title: "Sony Memory Stick Magic Gate Hack",
    description:
      "Reverse-engineered Sony Memory Stick Magic Gate protection to recover lost photos from a broken camera. Hardware and firmware analysis to bypass encryption.",
    githubUrl: "https://github.com/salimaammarr",
    technologies: ["Hardware Hacking", "Reverse Engineering", "Firmware Analysis"],
  },
  {
    title: "LLM Leaderboard Web Platform",
    description:
      "Performance leaderboard for LLM models with fast queries and real-time updates. Deployed with CI/CD pipeline to AWS.",
    githubUrl: "https://github.com/siabench/LLM-Leaderboard",
    technologies: ["React", "Python", "Flask", "PostgreSQL", "AWS", "Supabase"],
  },
  {
    title: "ChatApp",
    description:
      "Real-time chat application with instant messaging, typing indicators, and read receipts. Built with WebSockets for live updates.",
    githubUrl: "https://github.com/Samaya-Anwar/SOEN341-project",
    technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind"],
  },
  
  
];

export const EXPERIENCES: Experience[] = [
  {
    title: "Infrastructure Engineering Intern – Cloud Systems",
    company: "Shopify",
    period: "Sep 2025 - Present",
    description: "Working on cloud infrastructure and systems at Shopify's Montreal office.",
    highlights: [
      "Cut investigation time by automating an internal workflow; reduced 2+ hr steps to ~15-20 min",
      "Orchestrated safe GKE cluster decommission/replace; validated workloads and staged rollouts to limit disruption",
      "Reduced recovery time by executing rollbacks, config corrections, and dependency coordination during incidents"
    ],
  },
  {
    title: "Research Assistant – Software Developer",
    company: "Concordia Information Security Research Lab",
    period: "May 2025 - Aug 2025",
    description: "Built analytics tools and optimized database performance for security research.",
    highlights: [
      "Built an analytics dashboard in React + Flask; cut query-to-visual latency significantly",
      "Optimized PostgreSQL with normalized schema and targeted indexing; improved query time under load",
      "Hardened access to research endpoints with scoped routes; reduced defect rework across the pipeline"
    ],
  },
  {
    title: "Software Engineering Intern – PLM",
    company: "Bombardier",
    period: "Sep 2024 - May 2025",
    description: "Developed validation tools and automated processes for Product Lifecycle Management.",
    highlights: [
      "Developed a Python-based validation tool to ensure dataset consistency, reducing data errors by 60%",
      "Automated internal processes using Python, Azure, and Selenium, significantly reducing manual work effort",
      "Organized a scientific activity for 'Les filles en sciences' as part of the Women in Engineering program"
    ],
  },
  {
    title: "Technical Support & Digital Offer Agent",
    company: "Desjardins Insurance",
    period: "May 2023 - Aug 2024",
    description: "Provided technical support and managed incident tracking for digital platforms.",
    highlights: [
      "Prioritized and escalated incidents in Jira; decreased time to first engineering action by ~35%",
      "Resolved user issues via structured troubleshooting; lowered repeat contacts by ~20% and raised CSAT"
    ],
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
