import { LucideIcon } from "lucide-react";

export interface Interest {
  icon: LucideIcon;
  title: string;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  githubUrl: string;
  technologies: string[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
}

export type Theme = "light" | "dark";
