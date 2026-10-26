/**
 * Single source of truth for portfolio content, derived from the résumé.
 * NOTE: Social URLs are best-guess placeholders — update them to the real handles.
 */

import {
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiJavascript,
  SiPython,
  SiCplusplus,
  SiMysql,
  SiRedis,
  SiDocker,
  SiGit,
  SiSpringboot,
  SiOpenjdk,
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiStorybook,
  SiFirebase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { TbSitemap, TbApi, TbTopologyStar3, TbRobot } from "react-icons/tb";

export const profile = {
  name: "Kartikay Gupta",
  firstName: "Kartikay",
  initials: "KG",
  roles: ["Full-Stack Developer", "Software Engineer", "Frontend Engineer"],
  title: "Full-Stack Software Engineer",
  location: "Pune, Maharashtra, India",
  email: "kartikg052@gmail.com",
  phone: "+91 74896 57221",
  phoneRaw: "+917489657221",
  tagline:
    "I build fast, scalable products end to end — React interfaces, Node.js APIs, Spring Boot microservices and data-rich dashboards.",
  about: [
    "I'm a software engineer who loves turning complex requirements into clean, scalable products — with a focus on frontend architecture, performance, authentication and data-rich dashboards. Right now I'm a Full Stack Developer + AI at micro1.ai, where I've shipped 48+ features on Feather, their internal platform, and built the component library behind 7+ internal products.",
    "Before that, I led frontend development for a multi-sport analytics platform, designed real-time Spring Boot microservices, built a centralized OAuth 2.0 identity provider, and shipped Node.js APIs for an academic platform. When I’m not shipping features, you’ll find me on LeetCode — 1000+ problems solved, a peak rating of 1831, and a Smart India Hackathon National Finalist run to show for it.",
  ],
  resumeUrl: "/Kartikay_Gupta_Resume.pdf?v=5",
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
  { value: 2, suffix: "+", label: "Years of experience" },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: "code",
    skills: [
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "Java", icon: SiOpenjdk, color: "#E76F00" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
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
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#663399" },
      { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "server",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "REST APIs", icon: TbApi, color: "#10B981" },
      { name: "Microservices", icon: TbTopologyStar3, color: "#F59E0B" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#FF4438" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools & Cloud",
    icon: "tool",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "System Design", icon: TbSitemap, color: "#8B5CF6" },
      { name: "AI Agents", icon: TbRobot, color: "#EC4899" },
    ],
  },
];

export const experiences = [
  {
    company: "micro1.ai",
    role: "Full Stack Developer + AI",
    location: "Remote",
    period: "Mar 2026 — Present",
    current: true,
    summary:
      "Shipping full-stack features on Feather, micro1's internal platform, and the shared component library behind 7+ internal products.",
    points: [
      "Built 48+ features for Feather, an internal platform, using React, Node.js, Redux, Tailwind CSS and MySQL.",
      "Improved the platform with responsive UI, reusable task templates and validation, performance enhancements, rate-limiting middleware and database locking for concurrent requests.",
      "Created a reusable component library with React, TypeScript, Shoelace, Tailwind CSS and Storybook to support 7+ internal products and improve UI consistency.",
    ],
    tech: ["React", "Node.js", "Redux", "MySQL", "TypeScript", "Storybook"],
  },
  {
    company: "ZaarviQ",
    role: "Web Development Engineer II",
    location: "Remote",
    period: "Sep 2025 — Mar 2026",
    current: false,
    summary:
      "Owned both backend microservices and the frontend for TrainingSets — a B2C multi-sport analytics platform built on large, real-time activity datasets.",
    points: [
      "Designed Spring Boot microservices and WebSocket-based communication for real-time athlete–coach messaging, with modular services for low-latency message handling.",
      "Built a centralized OAuth 2.0 identity provider using Spring Security and Spring Authorization Server, enabling SSO and JWT-based authentication across platform services.",
      "Led frontend development of TrainingSets, a multi-sport analytics platform, delivering 40+ physiological metrics and 50+ visualizations using React and Apache ECharts.",
      "Owned low-level design for WorkoutStudio and PlanBuilder, defining component hierarchies, state flows and API integration layers — reduced feature development time by 25%.",
    ],
    tech: [
      "Spring Boot",
      "WebSockets",
      "OAuth 2.0",
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
      "Built client-facing React apps, Node.js APIs for the Gurukul academic platform, and marketing pages for an international trade event.",
    points: [
      "Built and optimized a client-facing React application with Tailwind CSS and Redux; applied code splitting, lazy loading, memoization and bundle optimization to improve page performance.",
      "Developed Node.js REST APIs and MySQL data logic for Gurukul, supporting assignments, feedback, test announcements, student groups and professor–student requests.",
      "Created marketing landing pages and 12 case-study pages for the ITSA trade event in Germany using HTML, CSS, Bootstrap and JavaScript.",
    ],
    tech: ["React", "Redux", "Tailwind CSS", "Node.js", "MySQL", "Performance"],
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
    detail: "CGPA 8.25 / 10",
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
