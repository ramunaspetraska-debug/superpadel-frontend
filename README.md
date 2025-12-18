# Superpadel Frontend

Modern, production-ready frontend for the Superpadel tournament platform. Built with React 18, Vite, TypeScript, Tailwind CSS, and React Router with a dark-first, mobile-friendly UI.

## Features
- Mobile-first layout with sticky top nav and mobile bottom nav
- Pages: Home, Tournaments list, Tournament details, and 404
- Mock tournament data with typed models and reusable UI components
- Axios instance wired for future backend (env-driven `VITE_API_URL`)
- Tailwind CSS theme with premium gradients and dark mode toggle
- Ready for Railway: zero backend required to run/build

## Stack
- React 18 + Vite + TypeScript
- Tailwind CSS + Heroicons + clsx
- React Router
- Axios
- ESLint + Prettier defaults

## Getting started
```bash
npm install
npm run dev   # http://localhost:5173
```

Build for production:
```bash
npm run build
```

## Environment
Create a `.env` file (or set in Railway) using the example below:
```
VITE_API_URL=https://api.superpadel.dev
```
If `VITE_API_URL` is not provided, the app falls back to typed mock data.

## Project structure
```
src/
  assets/
  components/      // Buttons, cards, nav, badges
  data/            // Mock tournaments
  hooks/           // Theme toggler
  layouts/         // Root layout with nav/footer
  pages/           // Home, Tournaments, Details, 404
  services/        // Axios client + API helpers
  types/           // Shared TypeScript models
  utils/           // Format helpers
```

## Services & data
All API access flows through `src/services/api.ts`. When no backend is configured, it returns mock tournaments from `src/data/mockTournaments.ts` with a short simulated delay, so UI feels real without a server.

## Deployment (Railway-ready)
- Commands: `npm install`, `npm run build`, `npm run preview`
- Expose port `5173` for preview or let Railway use the static `dist/` output with a static site buildpack.

## Design notes
- Default dark theme with gradients, glassmorphism cards, and subtle shadows
- Responsive grids and stacked sections for mobile
- Accessible focus states and semantic markup
