# Jad Al Hassan Portfolio

## Commands

- `npm run dev` - run locally
- `npm run build` - production build
- `npm run test:links` - validate all external links used in `src/` and `public/`
- `npm run deploy` - run link checks, build, and deploy `dist` using `gh-pages`

## Deployment Base Path

This project is configured for GitHub Pages at:

- `https://jadalhassan.github.io/Resume/`

If your repo/page name changes, update:

- `vite.config.js` (`base`)
- `index.html` (`canonical`, `og:url`, social image URLs, JSON-LD `url`)
- `public/sitemap.xml`
- `public/robots.txt`
- `public/404.html` and `public/resume*.html` redirects

## Analytics

Analytics are optional and loaded only when env vars are set.

1. Copy `.env.example` to `.env`
2. Set one or both:
   - `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
   - `VITE_PLAUSIBLE_DOMAIN=your-domain.com`

Tracked events include resume clicks, contact clicks, GitHub/LinkedIn/email/phone interactions, and project link clicks.
