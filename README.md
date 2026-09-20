# KITONGA-ICT — website

Modern, minimal marketing site for KITONGA-ICT (Nairobi digital-services bureau; print partner Brirop Digital Cyber). Every order routes to WhatsApp.

## Design system v2 — "Soft & Lime"
- Light off-white surfaces with soft lilac/lime gradient glow; one dark charcoal "Print & Apparel" studio section with lime `#c8f560` accent.
- Fonts: Plus Jakarta Sans (display) + Inter (text). 22–36 px radii, pill buttons, bento grid.
- New logo: geometric K with lime chevron (`public/static/brand/mark.svg`, `mark-light.svg`, favicon).
- Motion: reveal on scroll, animated counters, logo marquee, expanding division panel, hover lifts. Honours `prefers-reduced-motion`.

## Pages
| Path | Purpose |
|---|---|
| `/` | Hero + bento (2 client video loops, stats), portal marquee, 8 division cards → inline sub-service panel, dark Print & Apparel studio, 3 reasons, work grid, WhatsApp request form |
| `/services` (`#slug`) | Full directory: sticky division rail, live search, WhatsApp button per row |
| `/portfolio` | Filterable work grid with lightbox (keyboard nav) and "order similar" |
| `/api/health`, `/api/directory` | Hono worker endpoints |
| anything else | `public/404.html` (real 404) |

## Content
All content lives in `public/static/js/data.js`: `KITONGA` (phone `254715927114`, email, hours, partner), `CATEGORIES` (8 divisions with `tint`, `summary`, `detail`, `portals`), `SERVICES` (61 with price/turnaround), `PORTFOLIO` (12). `main.js` renders everything client-side.

## Media
- `static/media/tee-loop.mp4` (0.66 MB) — cropped, denoised 16 s loop from the client's heat-press t-shirt video (text overlays cropped out).
- `static/media/press-loop.mp4` (1.7 MB) — certificate printing loop.
- Stills from both videos in `static/images/portfolio/`; other photos are CC-licensed.

## Develop
```bash
npm run build && pm2 start ecosystem.config.cjs   # or pm2 restart webapp
curl localhost:3000
```
Inner pages share the header/footer from `index.html` (regenerate with the Python snippet in git history if the chrome changes).

## Deploy
Cloudflare Pages (Hono worker + static assets). No KV/triggers used. Not yet deployed — choose hosted or own-account deploy.

Last updated: 2026-09-03 (revision 2, modern redesign).
