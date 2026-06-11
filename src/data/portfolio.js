/**
 * Single source of truth for portfolio content, derived from the résumé.
 * NOTE: Social URLs are best-guess placeholders — update them to the real handles.
 */

import {
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiCplusplus,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiDocker,
  SiGit,
  SiGithub,
  SiSpringboot,
  SiSpringsecurity,
  SiStorybook,
  SiApacheecharts,
  SiFramer,
  SiReactquery,
  SiOpenai,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa6";

export const profile = {
  name: "Kartikay Gupta",
  firstName: "Kartikay",
  initials: "KG",
  roles: [
    "Frontend Engineer",
    "Full-Stack Developer",
    "React Specialist",
    "Competitive Programmer",
  ],
  title: "Frontend / Full-Stack Engineer",
  location: "Bengaluru, Karnataka, India",
  email: "kartikg052@gmail.com",
  phone: "+91 74896 57221",
  phoneRaw: "+917489657221",
  tagline:
    "I build fast, scalable products end to end — from real-time Spring Boot microservices to data-rich React dashboards with 50+ visualizations.",
  about: [
    "I'm a full-stack engineer who loves turning complex requirements into clean, scalable products. Over the past few years I've led UI architecture for a B2C sports-analytics platform, architected real-time Spring Boot microservices, shipped reusable component libraries used across 7+ products, and built secure OAuth 2.0 identity systems.",
    "I care deeply about performance, design detail and developer experience. When I’m not shipping features, you’ll find me on LeetCode — 1000+ problems solved, a peak rating of 1831, and a Smart India Hackathon National Finalist run to show for it.",
  ],
  resumeUrl: "/Kartikay_Gupta_Resume.pdf?v=2",
  social: {
    github: "https://github.com/Kartikay123",
    linkedin: "https://www.linkedin.com/in/kartikay-gupta-1498a7200/",
    leetcode: "https://leetcode.com/u/Kartikay123/",
    email: "mailto:kartikg052@gmail.com",
  },
};

export const stats = [
  { value: 1000, suffix: "+", label: "LeetCode problems solved" },
  { value: 1831, suffix: "", label: "Peak LeetCode rating" },
  { value: 65, suffix: "+", label: "Coding contests" },
  { value: 3, suffix: "", label: "Years of experience" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Java", icon: FaJava, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
      { name: "Apache ECharts", icon: SiApacheecharts, color: "#AA344D" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "server",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },

      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },

      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Infra",
    icon: "tool",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "OpenAI", icon: SiOpenai, color: "#10A37F" },
    ],
  },
];

export const experiences = [
  {
    company: "Micro1.AI",
    role: "Full Stack Developer",
    location: "Remote",
    period: "Mar 2026 — Jun 2026",
    current: true,
    summary:
      "Full-stack developer shipping interactive product features end to end, using AI-assisted workflows to accelerate delivery without trading away quality.",
    points: [
      "Delivered 52+ full-stack features built with React, Node.js, Express.js, Framer Motion and Tailwind CSS across interactive applications.",
      "Applied AI-assisted development workflows (Gemini, ChatGPT, Claude) to speed up delivery while ensuring code quality, performance optimization and responsive UI.",
    ],
    tech: ["React", "Node.js", "Express.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    company: "QMC Training Intelligence",
    role: "Web Development Engineer II",
    location: "Remote",
    period: "Sep 2025 — Mar 2026",
    current: false,
    summary:
      "Owned both backend microservices and the frontend for TrainingSets — a B2C multi-sport analytics platform built on large, real-time activity datasets.",
    points: [
      "Architected backend Spring Boot microservices enabling real-time athlete–coach communication over WebSockets — modular, horizontally scalable services with low-latency message handling.",
      "Integrated a centralized OAuth 2.0 Identity Provider with Spring Boot, Spring Security and Spring Authorization Server, enabling secure SSO and JWT-based auth across platform services.",
      "Led frontend of TrainingSets with React, JavaScript, Tailwind and Bootstrap — 40+ physiological metrics and 50+ data visualizations via high-performance Apache ECharts dashboards.",
      "Owned the LLD of WorkoutStudio and PlanBuilder — reusable component hierarchies, state flows and API integration layers that cut feature development time by 25%.",
    ],
    tech: [
      "Spring Boot",
      "WebSockets",
      "Spring Security",
      "React",
      "Apache ECharts",
    ],
  },
  {
    company: "Coriolis Technologies Pvt Ltd",
    role: "Software Engineer",
    location: "Pune, India",
    period: "Jun 2024 — Aug 2025",
    current: false,
    summary:
      "Built and optimized client-facing web apps and a shared component library powering a suite of internal products.",
    points: [
      "Developed and optimized a client-facing web app in React and Tailwind CSS with a modular, reusable component architecture; improved page-load performance via code splitting, lazy loading, memoization and bundle-size optimization — validated with Lighthouse and Chrome DevTools.",
      "Built a reusable component library for 7+ internal products using React, TypeScript, Shoelace, Tailwind and Storybook — improving UI consistency and cutting development time.",
      "Designed marketing landing pages and 12 case-study pages for the ITSA trade event (Germany) with HTML, CSS, Bootstrap and JavaScript.",
    ],
    tech: ["React", "Tailwind CSS", "TypeScript", "Storybook", "Performance"],
  },
];

export const projects = [
  {
    name: "JobTracker",
    blurb: "AI-assisted job-tracking platform",
    description:
      "A production job-tracking app with a drag-and-drop Kanban, period-over-period analytics and interview prep — supercharged with GPT-4o-mini.",
    points: [
      "20+ RESTful APIs secured with JWT, with drag-and-drop Kanban and period-over-period analytics.",
      "OpenAI GPT-4o-mini for resume-to-JD scoring (0–100), 15 tailored interview questions per session and evidence-based cover letters.",
      "Multi-stage Docker with CI/CD auto-deploys to Render + Vercel on every push.",
    ],
    tech: [
      "React.js",
      "React Query",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
    accent: "from-indigo-500 via-violet-500 to-fuchsia-500",
    featured: true,
    links: {
      live: "https://jobtracker-frontend-theta.vercel.app/login",
      github: "https://github.com/Kartikay123/jobtracker-frontend",
    },
  },
  {
    name: "Reservet",
    blurb: "Heritage e-ticketing platform",
    description:
      "An e-ticketing platform built during Smart India Hackathon that lets users buy e-tickets for historic places, monuments and museums across India.",
    points: [
      "Full-stack MVC architecture with 25 RESTful APIs connecting a React + Redux frontend to the database.",
      "Firebase authentication and responsive SCSS designs for a smooth booking flow.",
      "Built under hackathon pressure as a National Finalist team (top 5 of 125).",
    ],
    tech: ["React.js", "Redux", "Node.js", "Firebase", "MongoDB"],
    accent: "from-cyan-500 via-sky-500 to-blue-500",
    featured: true,
    links: {
      live: "https://reservet.netlify.app/",
      github: "https://github.com/Kartikay123/reservet",
    },
  },
];

export const achievements = [
  {
    title: "LeetCode Knight",
    detail: "Peak rating 1831 · 1000+ problems solved across 65+ contests.",
    icon: "trophy",
    metric: "1831",
  },
  {
    title: "SIH National Finalist",
    detail: "Smart India Hackathon 2022 — top 5 team among 125 teams.",
    icon: "medal",
    metric: "Top 5",
  },
  {
    title: "ACM-ICPC",
    detail: "All India Rank 1604 / 4992 teams · Kanpur Preliminary Round 2022.",
    icon: "award",
    metric: "AIR 1604",
  },
  {
    title: "Community & Open Source",
    detail:
      "Core member of Karwaan Society (1 yr) · Hacktoberfest 2021 contributor.",
    icon: "users",
    metric: "Mentor",
  },
];

export const education = [
  {
    school: "Jabalpur Engineering College",
    degree: "B.Tech · Computer Science and Engineering",
    period: "2020 — 2024",
    detail: "CGPA 8.24 / 10",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];
