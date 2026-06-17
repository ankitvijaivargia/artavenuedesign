# Art Avenue — Design House

The storefront for **Art Avenue**, a luxury design house curating handcrafted furniture, rugs, lighting, décor and objects — made by hand in India, made to last for generations.

This is a **Vite + React** implementation of the approved Claude Design handoff. The brand's design system (warm-ivory canvas, stone neutrals, a single muted-bronze accent, Cormorant Garamond display serif + Jost UI sans) is preserved exactly via the original token CSS and component library.

## Pages

A single-page app with in-memory routing covers the full clickable site:

- **Home** — hero, signature collections, shop-by-room, editorial bands
- **Collection** — discovery + merchandising grid (Furniture, Rugs, etc.)
- **Product** — three conversion-optimized PDP templates: furniture, rug, and cushion
- **Trade & Design** — designer/architect/hospitality application
- **Custom & Bespoke** — flagship design-studio landing
- **Material & Finish Library** — data-driven material reference

## Run locally

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

Requires Node 18+.

## Deploying to GitHub Pages

A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and publishes on every push to `main`.

1. In the repo: **Settings -> Pages -> Build and deployment -> Source: GitHub Actions**.
2. Push to `main` — the site builds and deploys automatically.

The build uses a relative asset base, so it works from a project path (`/<repo>/`), the repo root, or a custom domain without changes.

## Notes & caveats

- **Imagery** is rendered as on-brand warm placeholder blocks. Drop in licensed photography to replace them.
- **Typefaces** (Cormorant Garamond + Jost) are documented substitutions from Google Fonts. Swap in licensed brand faces for production.
- **Leads** (consultations, sample requests, trade applications) currently open pre-filled WhatsApp messages. Repoint to a form/CRM endpoint for production.

---

© 2026 Art Avenue Design House. Handcrafted in India.
