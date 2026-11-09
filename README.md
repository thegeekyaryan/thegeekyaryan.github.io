# ARYAN SINGH — PERSONAL PORTFOLIO

> **Curiosity into code. Ideas into reality.**

A personal portfolio built to bring together software, design, experimentation, and the things I'm curious about.

[**Explore the live website ↗**](https://thegeekyaryan.github.io/)

---

## 01 — Overview

This repository contains the source code for my personal portfolio website, designed and developed from scratch.

The idea was to create something beyond a conventional portfolio — an interactive digital space that reflects how I approach development: curiosity first, fundamentals first, and continuous experimentation.

The visual direction is intentionally minimal. A monochromatic palette, oversized typography, fine borders, carefully timed transitions, and custom canvas animations create an experience that feels more like a digital editorial than a traditional developer portfolio.

Built without a frontend framework, component library, or build system.

## 02 — Design Direction

The website follows a minimal, typography-led visual language.

- **Monochromatic palette** — Black, white, and carefully balanced grey tones.
- **Typography** — Big Shoulders Display, Krona One, and JetBrains Mono.
- **Layout** — Large editorial headings, structured grids, thin dividers, and generous spacing.
- **Motion** — Smooth transitions, scroll-based reveals, interactive elements, and subtle movement.
- **Interaction** — A custom cursor, alternate light/dark presentation, and responsive navigation.

The goal is to keep the interface expressive without making it visually overwhelming.

## 03 — Built With

| Technology | Implementation |
|:---|:---|
| HTML5 | Semantic structure and content |
| CSS3 | Layout, responsive design, transitions and animations |
| Vanilla JavaScript | Interactions, DOM manipulation and dynamic behaviour |
| Canvas API | Procedural visuals and interactive animations |
| Google Fonts | Custom typography |
| Git & GitHub | Version control and hosting |
| GitHub Pages | Website deployment |

### Why Vanilla JavaScript?

I wanted direct control over the interface and its behaviour without introducing unnecessary dependencies.

The website uses native browser capabilities, custom CSS, and JavaScript to handle its animations and interactions.

No React, Next.js, Tailwind CSS, npm packages, or compilation step is required.

## 04 — Inside the Experience

The portfolio is organised into several sections, each serving a different purpose.

| Section | Description |
|:---|:---|
| Hero | Animated introduction, typography, and interactive visual |
| About | Background, interests, and development approach |
| Expertise | Frontend, backend, AI, data, and cloud technologies |
| How I Work | A four-stage approach: Understand, Plan, Build, Ship |
| Principles | The ideas that guide my development process |
| Focus | Current interests and areas of exploration |
| Location | Interactive globe with Delhi highlighted |
| Lab | An interactive particle grid responding to pointer movement |
| Elsewhere | Links to my developer profiles |
| Contact | Contact information and message interface |

### A Few Technical Details

Some of the visual elements are implemented directly using the Canvas 2D API rather than external animation libraries.

- **Hero visual:** A procedurally generated, rotating dotted sphere with pointer-responsive movement.
- **Interactive lab:** A particle grid where dots react to pointer movement and spring back to their original positions.
- **Globe:** A rotating dotted Earth visual with Delhi marked.
- **Contact background:** Animated wave patterns rendered on canvas.
- **Footer:** Procedural ridge-line animation with interactive typography.
- **Scroll interactions:** Intersection Observer-based reveals, active navigation states, and a reading progress indicator.
- **Preloader:** An animated numerical loading sequence.
- **Theme:** A negative mode that switches the monochromatic colour scheme.

Motion is also adapted for users who prefer reduced animations through `prefers-reduced-motion`.

## 05 — Project Structure

The project intentionally keeps its implementation lightweight.

```text
thegeekyaryan.github.io/
│
├── index.html
│   ├── HTML structure
│   ├── Embedded CSS
│   └── Embedded JavaScript
│
└── README.md
```

The website is currently implemented in a single HTML file, keeping the structure simple and deployment straightforward.

## 06 — Run Locally

You can run the portfolio locally without installing any dependencies.

**1. Clone the repository**

```bash
git clone https://github.com/thegeekyaryan/thegeekyaryan.github.io.git
```

**2. Enter the project directory**

```bash
cd thegeekyaryan.github.io
```

**3. Start a local server**

```bash
python3 -m http.server 8000
```

**4. Open in your browser**

```text
http://localhost:8000
```

Alternatively, you can open `index.html` directly in a browser.

## 07 — Deployment

This project is hosted through GitHub Pages.

The repository follows the GitHub Pages user-site naming convention:

```text
thegeekyaryan.github.io
```

The published website is available at:

[https://thegeekyaryan.github.io/](https://thegeekyaryan.github.io/)

Changes pushed to the configured publishing branch are deployed through GitHub Pages.

## 08 — Philosophy

A few principles behind this project:

- Fundamentals over unnecessary abstractions.
- Functionality before decoration.
- Experimentation as a way to learn.
- Thoughtful interactions over excessive animation.
- Simple architecture with room to evolve.
- Build something, learn from it, and make it better.

This portfolio is also an ongoing experiment. It will continue to evolve as I learn, build, and explore new ideas.

## 09 — Connect

If you have an interesting idea, a project, an opportunity, or simply want to talk about technology, feel free to reach out.

| Platform | Link |
|:---|:---|
| GitHub | [@thegeekyaryan](https://github.com/thegeekyaryan) |
| LinkedIn | [Aryan Singh](https://www.linkedin.com/in/aryan-singh-a7b715413/) |
| LeetCode | [@thegeekyaryan](https://leetcode.com/u/thegeekyaryan/) |
| Email | [thegeekyaryan@gmail.com](mailto:thegeekyaryan@gmail.com) |
| Website | [thegeekyaryan.github.io](https://thegeekyaryan.github.io/) |

---

<div align="center">

**DESIGNED & DEVELOPED BY ARYAN SINGH**

*Curiosity into code. Ideas into reality.*

© 2026 Aryan Singh. All rights reserved.

</div>
