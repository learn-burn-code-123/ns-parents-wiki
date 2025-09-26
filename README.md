# NS Parents Wiki

A clean, black-and-white React wiki for Network School parents. Deployed to Netlify.

## Tech
- Vite + React + React Router (SPA)
- No UI frameworks; custom black/white CSS

## Local Setup
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to Netlify
1. Push this repo to GitHub.
2. In Netlify, **New site from Git** → pick the repo.
3. Build command: `npm run build`  
   Publish directory: `dist`
4. Add redirect rule (already in `netlify.toml`) for SPA routing.

## Content Maintenance
- Edit files in `src/pages/` to update content.
- Keep external links current and test periodically.
- All styling lives in `src/styles.css` and must remain **black & white**.
