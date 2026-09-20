<h1 align="center">Welcome to Muhammad Mahfooz Ul Haq's Portfolio</h1>

## Software Engineer Portfolio

A modern single-page portfolio built with **Next.js, TypeScript, Tailwind CSS, and a terminal-inspired dark design system**.

This portfolio belongs to **Muhammad Mahfooz Ul Haq** and showcases software engineering skills, technical proficiency, education, professional experience, selected projects, and contact information.

## Sections

* Summary and hero profile
* Skills and engineering capabilities
* Proficiency
* Education
* Work experience
* Projects
* GitHub profile
* LinkedIn profile
* Contact information

## Getting Started

These instructions will help you run the project locally for development and testing.

### Requirements

Make sure you have the following installed:

```bash
Node.js v18 or higher
npm v9 or higher
```

You can download Node.js from:

https://nodejs.org/

## How To Use

### 1. Clone the repository

```bash
git clone https://github.com/Mahfoozdev/Mahfooz.git
```

### 2. Go into the project directory

```bash
cd Mahfooz
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the local site

Open:

```text
http://localhost:3000
```

## Available Scripts

### Development

```bash
npm run dev
```

Runs the Next.js development server.

### Production Build

```bash
npm run build
```

Builds the application for production.

### Production Server

```bash
npm run start
```

Starts the production server after creating a production build.

### Lint

```bash
npm run lint
```

Runs ESLint checks.

### Tests

```bash
npm run test
```

Runs the Vitest test suite.

## Editing Portfolio Content

Most portfolio content is managed from the `data/` directory.

```text
data/
├── hero.ts
├── skills.ts
├── proficiency.ts
├── education.ts
├── experience.ts
├── projects.ts
└── social.ts
```

### Main data files

* `data/hero.ts` — greeting, title, summary, resume link, and statistics
* `data/skills.ts` — technical skills, skill groups, capabilities, and icons
* `data/proficiency.ts` — technical proficiency information
* `data/education.ts` — education history
* `data/experience.ts` — professional work experience
* `data/projects.ts` — featured projects
* `data/social.ts` — email and social media links

Page sections are composed in:

```text
app/page.tsx
```

SEO metadata is configured in:

```text
app/layout.tsx
```

## Technologies Used

* [Next.js](https://nextjs.org/)
* [React](https://react.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Framer Motion](https://www.framer.com/motion/)
* [Radix UI](https://www.radix-ui.com/)
* [lucide-react](https://lucide.dev/)
* [Iconify](https://icon-sets.iconify.design/)
* [Vitest](https://vitest.dev/)

## Deployment

This project is designed to be deployed using **Vercel**.

The recommended deployment workflow is:

```text
GitHub
   ↓
Vercel
   ↓
npm install
   ↓
npm run build
   ↓
Production deployment
```

You do **not** need to commit the `.next` directory to GitHub.

The `.next` directory is a generated build directory and is created automatically when:

```bash
npm run build
```

is executed.

If the project uses Next.js static export with:

```ts
output: "export"
```

the generated static files are placed in the `out/` directory.

Generated build directories such as `.next` and `out` should normally remain excluded from Git.

## Vercel Deployment

To deploy this project:

1. Push the source code to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Select the project.
5. Vercel detects Next.js automatically.
6. Vercel runs the production build.
7. The resulting application is deployed.

Typical build command:

```bash
npm run build
```

## Design System

The interface follows a terminal-inspired dark visual direction with:

* Dark backgrounds
* Monospace typography
* Hard borders
* Terminal-style spacing
* Orange accent colors
* Responsive layouts
* Motion effects powered by Framer Motion

The visual system is implemented throughout the application using Tailwind CSS.

## Social Links

### GitHub

https://github.com/Mahfoozdev

### LinkedIn

https://www.linkedin.com/in/muhammad-mahfooz-ul-haq-09391b411

### Email

[mahfoozdoit@gmail.com](mailto:mahfoozdoit@gmail.com)

## Author

**Muhammad Mahfooz Ul Haq**

Software Engineer

* GitHub: [Mahfoozdev](https://github.com/Mahfoozdev)
* LinkedIn: [Muhammad Mahfooz Ul Haq](https://www.linkedin.com/in/muhammad-mahfooz-ul-haq-09391b411)
* Email: [mahfoozdoit@gmail.com](mailto:mahfoozdoit@gmail.com)
