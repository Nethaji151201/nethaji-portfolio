# Nethaji - Personal Developer Portfolio

A modern, responsive, and performance-optimized personal portfolio website built with React, Vite, and Tailwind CSS.

## 🚀 Quick Start Guide

Follow these steps to get the project running on your local machine.

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### 2. Installation
Open your terminal in the project directory (`nethaji-portfolio`) and run the following command to install all necessary dependencies:

```bash
npm install
```

### 3. Running the Development Server
To start the application locally, run:

```bash
npm run dev
```
*(Note: Do not use `npm run serve` as this is a Vite project. Always use `npm run dev` for development).*

After running the command, open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

---

## 🗺️ Project Roadmap & Customization Guide

This project is designed to be easily customizable. All your personal data is isolated in the `src/constants/` directory.

### Step 1: Update Your Personal Information
Go to `src/constants/personalInfo.js`. Here you can change your:
* Name and Title
* Contact details (Email, Phone, Location)
* About Me text
* Social Media links (GitHub, LinkedIn, Twitter, etc.)

### Step 2: Update Your Technical Skills
Go to `src/constants/skills.jsx` to update your skills.
* You can add, remove, or modify skill categories (e.g., Frontend, Backend).
* Simply edit the `items` array to list your specific technologies.

### Step 3: Showcase Your Projects
Go to `src/constants/projects.js` to add your portfolio items.
* For each project, provide a `title`, `description`, `image` URL, `techStack` array, and links.
* The application will automatically render project cards based on this data.

### Step 4: Add Your Work Experience
Go to `src/constants/experience.js` to update your work history or education.
* Provide your `role`, `company`, `duration`, and key `highlights`.

### Step 5: Tweak the Theme (Optional)
* **Colors:** The primary color scheme is controlled via Tailwind CSS. If you want to change the primary color (currently a shade of blue/sky), modify the `primary` color palette inside `tailwind.config.js`.
* **Dark Mode:** Dark mode is fully implemented and works out-of-the-box. It respects system preferences and can be toggled manually via the navigation bar.

---

## 🏗️ Building for Production

When you are ready to deploy your portfolio (e.g., to Vercel, Netlify, or GitHub Pages), create an optimized production build:

```bash
npm run build
```

To test the production build locally before deploying:

```bash
npm run preview
```

## 📁 Folder Structure Overview

```text
src/
 ├── components/       # UI Components (Navbar, Hero, About, etc.)
 │    └── common/      # Reusable UI pieces (Cards, Buttons, Section Titles)
 ├── constants/        # All your personal data (The single source of truth)
 ├── hooks/            # Custom React Hooks (e.g., useTheme)
 ├── pages/            # Page layouts (Home.jsx)
 ├── utils/            # Helper functions
 ├── App.jsx           # Main Application Wrapper
 ├── main.jsx          # React Entry Point
 └── index.css         # Global Styles & Tailwind Directives
```
