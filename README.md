# Veda Technology - Business & Services Website

A modern, responsive, and high-performance business website representing **Veda Technology**—an enterprise digital services and technology career organization. 

The website showcases Veda Technology's technology training programs, industrial internship pathways, IT & digital services, company vision, interactive FAQ center, dynamic spotlight search, and customer inquiry workflows.

---

## 🌟 Key Features & Deliverables

### 1. 🚀 Homepage & Hero Experience
- **High-Impact Hero Section**: Dynamic technology badge with live pulse indicator, bold headline, dual CTAs, and trust assurance badges.
- **Interactive Terminal / Dashboard Visual**: Displays simulated live code execution, uptime metrics, and real-time alumni stats.
- **Live Animated Stats Counter**: `IntersectionObserver`-powered counter animating metrics (15,000+ Alumni, 180+ Enterprise Projects, 65+ Partners, 96% Career Success).
- **Infinite Tech Stack Marquee**: Continuous scrolling marquee showcasing industry stacks (React, Next.js, TypeScript, Node.js, Python, AWS, Docker, Kubernetes, etc.).

### 2. 🏢 About Veda Technology
- **Corporate Mission & Vision**: Glassmorphism cards with glowing gradients and custom iconography.
- **Core Values & Impact Guarantee**: Detailing practical lab work, production workflows, 1-on-1 mentorship, and verified certifications.

### 3. 🎓 Technology Programs & Training
- **Interactive Category Filtering**: Real-time filtering across `All Programs`, `Full-Stack Web`, `Cloud & DevOps`, `AI & Data Science`, `Cybersecurity`, and `Mobile App Dev`.
- **Rich Program Cards**: Badges for difficulty level, duration, training mode, core technologies, syllabus previews, and direct enrollment triggers.
- **Dynamic Syllabus Modal**: Interactive modal displaying complete weekly curriculum modules, prerequisites, and digital credential details.

### 4. 💼 IT & Digital Services
- **Full Spectrum Capabilities**: Custom Software Development, Cloud & DevOps Infrastructure, AI/GenAI Solutions, UI/UX Product Design, Cybersecurity Audits, and IT Consulting.
- **Interactive Category Filter**: Easily switch service verticals with zero page reload.
- **Agile Delivery Process Flow**: Visual 4-stage workflow (Discovery & Scoping → Architecture & UI/UX → Agile Sprints → Deploy & Support).
- **Proposal & Quote Flow**: 1-click modal prefill to request enterprise estimates.

### 5. 🎯 Industrial Internship Pathways
- **Career Accelerator Tracks**: Full-Stack Development, Cloud & DevOps, Data Science & AI Research, and UI/UX Design.
- **Internship Perks & Roadmap**: Live client sprint participation, 1-on-1 lead mentorship, performance-based stipend opportunities, and Pre-Placement Offer (PPO) opportunities.
- **Direct Application Modal**: Built-in modal form with automatic track selection.

### 6. 🔍 Global Spotlight Search (`Ctrl + K`)
- Instant fuzzy search across all courses, services, internships, and FAQs with live jump-to section navigation and keyboard shortcuts (`Ctrl+K` to open, `ESC` to close).

### 7. ❓ Interactive FAQ Accordion
- **Category Filter Pills**: Filter questions by `General`, `Programs`, `Internships`, or `Services`.
- **Live Search Bar**: Type keywords (e.g. "placement", "stipend", "cloud") for instant matching.
- **Smooth Expand/Collapse**: Keyboard accessible and optimized with ARIA attributes.

### 8. ⭐ Testimonials & Client Reviews
- Real-world reviews from program alumni, interns, and enterprise business partners with star ratings and career transitions.

### 9. 📩 Contact & Consultation Hub
- **Direct Contact Cards**: Corporate address, email channels, phone support lines, and business hours.
- **Client-Side Validated Form**: Real-time validation for Name, Email, Phone, Interest Area, and Message with error state handling.
- **Custom Toast Feedback**: Non-blocking toast notification upon inquiry submission.

### 10. 🌓 Dark / Light Theme Switcher
- Seamless dark and light mode toggle with smooth color transitions and persistence in `localStorage`.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<dialog>`), OpenGraph meta tags, and JSON-LD schema markup.
- **CSS3 (Vanilla)**:
  - Custom CSS Design System with CSS variables (`--bg-primary`, `--primary`, `--gradient-primary`, etc.).
  - Responsive layout built with **CSS Grid** & **Flexbox**.
  - Modern Glassmorphism (`backdrop-filter: blur(16px)`), micro-animations, and custom scrollbar styling.
- **JavaScript (Vanilla ES6+)**:
  - Clean modular architecture (`js/data.js` for data store, `js/main.js` for UI controllers).
  - DOM manipulation, event delegation, `IntersectionObserver` for animated counters, keyboard event listeners, and form validation.
- **Zero External Dependencies**: Runs entirely offline or online in any modern web browser without heavy framework build steps.

---

## 📁 Project Structure

```text
Veda Techno/
├── index.html              # Main semantic HTML5 document with SEO & schema
├── css/
│   ├── style.css           # Design tokens, CSS variables, resets & typography
│   ├── components.css      # Header, Hero, Cards, Accordion, Modals, Forms & Toasts
│   └── responsive.css      # Media queries, mobile drawer, tablet & desktop rules
├── js/
│   ├── data.js             # Structured dataset (programs, services, FAQs, stats)
│   └── main.js             # Interactive controller (themes, filters, modals, validation)
└── README.md               # Project documentation
```

---

## 🚀 How to Run Locally

Because the project is built with pure web standards (HTML5, CSS3, ES6 JavaScript):

1. **Option 1: Direct File Open**
   - Double-click `index.html` in your file explorer to open it directly in Google Chrome, Microsoft Edge, Mozilla Firefox, or Safari.

2. **Option 2: Live Server (VS Code / Python / Node)**
   - Using Python:
     ```bash
     python -m http.server 8000
     ```
     Then open `http://localhost:8000` in your browser.
   - Using Node.js `npx serve`:
     ```bash
     npx serve .
     ```

---

## 📱 Responsive Breakpoints

The design is engineered to provide an optimal experience across all viewports:
- **Mobile (Small / Portrait)**: `320px - 480px`
- **Mobile (Large / Landscape)**: `481px - 767px`
- **Tablets & iPads**: `768px - 1023px`
- **Desktops & Laptops**: `1024px - 1439px`
- **Ultra-Wide Screens**: `1440px+`

---

## ♿ Accessibility & SEO Best Practices

- **Semantic Landmark Elements**: Clear document outline with single `<h1>` and structured `<h2>`/`<h3>` hierarchy.
- **Screen Reader Support**: `.sr-only` utility classes, `aria-expanded`, `aria-label`, and `role="dialog"` attributes.
- **Rich Meta Data**: OpenGraph (`og:title`, `og:image`, `og:description`), Twitter Card tags, and Schema.org `Organization` JSON-LD structured data.
- **Keyboard Navigation**: Full keyboard accessibility for modals, search shortcuts (`Ctrl+K`), and navigation links.

---

## 📄 License & Attribution

Designed and developed for **Veda Technology Business & Services Website**. All rights reserved © 2026.
