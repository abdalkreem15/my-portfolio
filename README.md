# My Personal Portfolio Website

This repository contains the source code for my personal portfolio website, designed to showcase my skills, projects, and provide a way for others to connect with me. Built with modern web technologies, it features a responsive design, smooth navigation, and a clean, dark-themed user interface.

## 🚀 Features

* **Responsive Navbar:** A sticky navigation bar that adapts to different screen sizes, including a burger menu for mobile.
* **Active Section Highlighting:** Automatically highlights the current section in the navigation bar as the user scrolls.
* **Smooth Scroll Navigation:** Clicking on navigation links smoothly scrolls the page to the corresponding section.
* **Hero Section:** An engaging introduction to the portfolio owner.
* **About Me Section:** A detailed overview of my background, interests (like reading and coding), and aspirations in frontend development.
* **Skills Section:** Visually appealing display of technical skills using modern SVG icons and descriptions.
* **Projects Section:** A grid layout to showcase personal projects, with placeholders for live demos and GitHub repositories. Designed for easy expansion with more projects.
* **Contact Section:** Simplified contact options with direct links for email and phone (with hover bubbles) and social media profiles.
* **Global Styling:** Utilizes CSS variables for consistent theming and spacing.
* **Type Safety:** Built with TypeScript for enhanced code quality and maintainability.

## 🛠️ Technologies Used

* **SvelteKit:** The robust web framework for building modern, performant web applications with Svelte.
* **Svelte 5 (with Runes):** The reactive UI framework powering the components.
* **TypeScript:** For type-safe JavaScript.
* **CSS:** For styling, leveraging CSS variables for theming.
* **SVG:** For lightweight and scalable icons.

## 📂 Project Structure

my-portfolio/
├── .svelte-kit/              # SvelteKit build artifacts (automatically generated)
├── node_modules/             # Project dependencies
├── src/
│   ├── app.css               # Global CSS styles and variables
│   ├── lib/                  # Library code (reusable components, stores, types)
│   │   ├── components/
│   │   │   ├── About.svelte  # About Me section component
│   │   │   ├── Contact.svelte# Contact section component
│   │   │   ├── Hero.svelte   # Hero section component
│   │   │   ├── Navbar.svelte # Navigation bar component
│   │   │   ├── Projects.svelte# Projects section component
│   │   │   └── Skills.svelte # Skills section component
│   │   ├── stores/
│   │   │   └── activeSectionStore.ts # Svelte writable store for active section
│   │   └── types/
│   │       └── layout.ts     # TypeScript interface for layout data (if used)
│   ├── routes/               # SvelteKit routes
│   │   ├── +layout.svelte    # Main layout component (global scroll logic, Navbar rendering)
│   │   ├── +layout.ts        # Layout data loading (provides 'sections' data)
│   │   └── +page.svelte      # Main page component (integrates all sections)
├── static/                   # Static assets (images, favicon, SVG icons)
│   └── svgs/                 # Your custom SVG icons (e.g., html5.svg, css3.svg)
├── .gitignore
├── package.json
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md                 # This file!


## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js) or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/my-portfolio.git](https://github.com/your-username/my-portfolio.git)
    cd my-portfolio
    ```
2.  **Install NPM packages:**
    ```bash
    npm install
    # or if you use Yarn:
    # yarn install
    ```
3.  **Place your SVG icons:**
    * Create a folder named `svgs` inside the `static` directory: `my-portfolio/static/svgs/`
    * Place your `html5.svg`, `css3.svg`, `javascript.svg`, and `svelte.svg` files (or similar names) into this `static/svgs/` folder. Ensure the content of these SVG files is clean and doesn't contain duplicate `fill` or `stroke` attributes within the `<path d="..." />` elements.

### Running the Development Server

To run the project in development mode:

```bash
npm run dev
# or if you use Yarn:
# yarn dev