# Minimal Living Studio

A premium, responsive, GitHub Pages-ready website for a minimalist living and modern home inspiration brand. The experience is built as a refined digital showroom with editorial sections, smooth motion, and a lightweight interactive 3D room scene.

## Tech Stack

- Vite
- React
- TypeScript
- Three.js
- React Three Fiber
- Drei
- Framer Motion
- Tailwind CSS
- Lucide React

## Features

- Sticky responsive navigation with mobile menu
- Full-screen brand hero with interactive 3D room preview
- Clickable 3D showroom objects with design notes
- WebGL fallback content and suspense loading state
- Category cards for the full minimalist home environment
- Minimalist living principles with accessible icon cards
- Room inspiration panels with visual mockups, textures, palettes, and styling notes
- Product inspiration cards without checkout or pricing
- Scroll-reveal storytelling with reduced-motion support
- Design journal preview section
- Newsletter form with client-side validation and success message
- Dynamic footer year
- Static-site friendly GitHub Pages deployment workflow

## Run Locally

```bash
npm install
npm run dev
```

Vite will print a local URL, usually `http://localhost:5173`.

## Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Deploy to GitHub Pages

This project includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Push the repository to GitHub.
2. In GitHub, open **Settings > Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to the `main` branch or run the workflow manually.

## Vite Base Path Note

Open `vite.config.ts` before deploying.

```ts
base: '/',
```

Use `/` for a GitHub user or organization site, such as `username.github.io`.

For a project site, change it to the repository name:

```ts
base: '/minimal-living-studio/',
```

This ensures JavaScript and CSS assets load correctly from GitHub Pages.

## Future Improvements

- Add CMS-backed journal articles
- Add optional saved moodboards
- Add richer room presets for bedroom, kitchen, and living spaces
- Add analytics for category interest
- Add compressed local image assets or curated product photography
