# Kartikay Gupta — Portfolio

A modern, animated, fully-responsive developer portfolio built from Kartikay Gupta's résumé.
Dark-first design with a light theme toggle, smooth scroll-reveal animations, and a polished
glassmorphism aesthetic.

![Stack](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?logo=bootstrap&logoColor=white)

## ✨ Features

- **Dark / light theme** with a one-click toggle (dark by default), persisted to `localStorage`.
- **Animated hero** — typewriter role cycling, orbiting tech-stack ring, animated gradient name.
- **Scroll-reveal animations** throughout (Framer Motion `whileInView`).
- **Animated count-up stats**, sticky **scroll-spy navbar**, top **scroll-progress bar**, and a
  **back-to-top** button.
- **Sections**: Hero · Stats · About · Skills · Experience (timeline) · Projects · Achievements ·
  Education · Contact (working `mailto:` form) · Footer.
- **Fully responsive** — verified from 360px mobile up to large desktops, with a mobile drawer menu.
- **Accessible**: semantic landmarks, focus-visible rings, `prefers-reduced-motion` support, ARIA labels.

## 🧱 Tech stack

| Concern        | Choice                                                   |
| -------------- | -------------------------------------------------------- |
| Framework      | React 18 + Vite 5                                        |
| Styling        | Tailwind CSS 3 (primary) + Bootstrap 5 (grid/components) |
| Animation      | Framer Motion                                            |
| Icons          | react-icons (Simple Icons, Feather, Font Awesome)        |
| Language       | JavaScript (JSX)                                         |

> **Tailwind + Bootstrap together:** Bootstrap ships many `!important` utilities (`.bg-white`,
> `.text-white`, `.border`, spacing, …) that collide with equally-named Tailwind utilities.
> To keep Tailwind authoritative, `important: true` is set in `tailwind.config.js`. Bootstrap's
> grid (`Row`/`Col`) and components remain untouched because they aren't overlaid with Tailwind
> utility classes.

## 🚀 Getting started

```bash
# install
npm install

# start the dev server (http://localhost:5173)
npm run dev

# production build → dist/
npm run build

# preview the production build locally
npm run preview
```

## 🗂️ Project structure

```
src/
├─ main.jsx                # entry — imports Bootstrap CSS then Tailwind
├─ App.jsx                 # composes all sections
├─ index.css              # Tailwind layers + design system + Bootstrap reconciliation
├─ data/portfolio.js      # ← single source of truth (all résumé content lives here)
├─ hooks/                 # useTheme, useTypewriter, useActiveSection, useCountUp
├─ lib/motion.js          # shared Framer Motion variants
└─ components/            # Navbar, Hero, Stats, About, Skills, Experience,
                          # Projects, Achievements, Contact, Footer, + helpers
```

## ✏️ Customising

All content is centralised in **`src/data/portfolio.js`** — edit that one file to update text,
skills, experience, projects, achievements, stats, and links.

Social links (`profile.social`) point to the real GitHub / LinkedIn / LeetCode profiles.

> ⚠️ The only remaining placeholders are each project's **Live** demo URL (currently `#`) in the
> `projects` array — set those to the deployed links when available.

To swap the résumé download, replace `public/Kartikay_Gupta_Resume.pdf`.

## 🎨 Theming

Brand colours, fonts, shadows and keyframes live in `tailwind.config.js` under `theme.extend`.
The accent palette is an indigo → violet → cyan gradient; change `colors.brand` / `colors.accent`
to re-skin the whole site.
