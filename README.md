# My Personal Portfolio Website

This repository contains the source code for my personal portfolio website. It's designed to showcase my skills and projects, and provide a way for others to connect with me. Built with modern web technologies, it features a responsive design, smooth navigation, and a clean, dark-themed user interface.

---

## 🚀 Features

* **Responsive Navbar:** A sticky navigation bar that adapts to different screen sizes, including a burger menu for mobile.
* **Active Section Highlighting:** Automatically highlights the current section in the navigation bar as the user scrolls.
* **Smooth Scroll Navigation:** Clicking on navigation links smoothly scrolls the page to the corresponding section.
* **Hero Section:** An engaging introduction to the portfolio.
* **About Me Section:** A detailed overview of my background, interests (like reading and coding), and aspirations in frontend development.
* **Skills Section:** A visually appealing display of my technical skills using modern SVG icons and descriptions.
* **Projects Section:** A grid layout showcasing my personal projects, designed for easy future expansion.
* **Contact Section:** Simplified contact options with direct links for email and phone (with hover bubbles) and social media profiles.
* **Global Styling:** Utilizes CSS variables for consistent theming and spacing throughout the site.
* **Type Safety:** Built with TypeScript for enhanced code quality and maintainability.

---

## 🛠️ Technologies Used

* **SvelteKit:** The robust web framework for building modern, performant web applications with Svelte.
* **Svelte 5 (with Runes):** The reactive UI framework powering the components.
* **TypeScript:** For type-safe JavaScript.
* **CSS:** For styling, leveraging CSS variables for global theming.
* **SVG:** For lightweight and scalable icons.

---

## 🎨 Project Structure and Customization

This portfolio's content and appearance are managed through its Svelte components and global CSS. Here's how you can easily customize it:

* **Content:**
    * Edit text in `About.svelte`, `Skills.svelte`, `Projects.svelte`, and `Contact.svelte` to reflect your personal details and content.
    * Update the `skills` array in `src/lib/components/Skills.svelte` with your specific technical stack.
    * Update the `projects` array in `src/lib/components/Projects.svelte` with your project details and links.
    * Modify `contactInfo` and `socialLinks` in `src/lib/components/Contact.svelte` with your personal contact and social media details.
    * Adjust the `sections` array in `src/routes/+layout.svelte` to match your desired navigation items and section IDs.
* **Theming:**
    * Adjust CSS variables in `src/app.css` to change colors, fonts, spacing, and shadows globally. Key variables include `--color-primary`, `--color-primary-accent`, `--color-background-main`, `--color-background-elevated`, and `--color-text-main`.
* **Icons:**
    * The `Skills.svelte` component loads SVG icons from the `static/svgs` folder. Ensure your SVG files are the correct and desired designs.

---

## 💡 Future Enhancements

* **Project Filtering/Categories:** Add options to filter projects by technology or type.
* **Dark/Light Mode Toggle:** Implement a user-controlled theme switcher.
* **Animations:** Incorporate more subtle animations for an even more dynamic feel.
* **Blog/Articles Section:** Add a section for sharing thoughts or technical articles.
* **Backend Integration for Contact Form:** Implement a serverless function or backend endpoint to handle contact form submissions, instead of just logging to console.
