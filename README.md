# WIMSS — Startup Journey 2026 One-Pager

A single-page mentor site for **WIMSS** (Where Is My Staff & Stuff) — real-time operational visibility for industrial sites.

Built with **React**, **Vite**, and **Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for deployment

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to any static host (GitHub Pages, Netlify, Vercel, etc.).

## Weekly updates

Edit **`src/content/siteContent.js`** only:

1. Add a new object at the **top** of the `weeklyUpdates` array.
2. Update traction, ask, or other sections in the same file as needed.

No component changes required for routine content updates.

## Brand

- **Navy** (`--brand-navy`): `#11213a` — sampled from `public/wimss-logo.png` (not `#07243B`)
- **Accent**: `#B45210`
- Product names: **WIMSS Workforce**, **WIMSS Assets**
- Colors live in `src/index.css` (`:root` and `@theme`)

## Logo assets

- `public/wimss-logo.png` — original brand file (navy background)
- `public/wimss-logo-white.png` — white logo + tagline only (transparent background for hero/header)

## Hero background photo

- Path: **`src/assets/hero-background.png`** — your shipyard / industrial yard image (imported in `Hero.jsx`).
- To change the hero: replace that file with a new image (same filename) or update the import in `Hero.jsx`.
- No stock images are bundled; use your own photography for production.

## Company

InnoTrain Oy · [info@innotrain.fi](mailto:info@innotrain.fi)
