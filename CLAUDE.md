# CLAUDE.md: Creative Gifting

A one-page website for a small, local, homemade gift-packing business run by the owner's mother.
Read README.md and PLAN.md before doing any work.

## Keep it simple (most important rule)
- Plain HTML, CSS and vanilla JS only. No frameworks, no npm, no build step, no database, no server code.
- Content comes from `content/settings.json` and `content/products.json`. Mom edits these through
  Pages CMS (`.pages.yml`), so keep their field names stable. If you rename a field, update `.pages.yml` too.
- Hosting is Cloudflare Pages (static files, no build command).
- Contact is WhatsApp (`https://wa.me/91<number>?text=...`) and `tel:` links. There's no form.
- Before adding anything not in PLAN.md, ask. The answer is usually "not yet".

## Rules
- Mobile first: check at 375px width. Make buttons big and easy to tap.
- Keep images small (resize to ~1200px wide, compress) and use `loading="lazy"` below the first screen.
- Never invent facts (prices, reviews, numbers, addresses). Use `[PLACEHOLDER: ...]` instead.
- The developer is learning. Explain changes briefly in plain words.

## Look
Bright and festive but tidy (inspired by confettigifts.in, thegiftstudio.com, thepackingcompany.in;
borrow layout ideas only, never their logos, text or photos). All colours are variables at the top of
`style.css`: cream background `#FFF8F1`, rani pink `#C2185B` (buttons, headings), plum `#6A1B9A`,
marigold `#F5A623` (small accents only, not text), pastel tiles blush/lavender/mint/butter.
Fonts: Playfair Display (headings) and Poppins (body) from Google Fonts. Rounded cards, pill buttons.
Animations stay light (fade-up on scroll, hover lift, slow hero zoom) and use only transform/opacity,
all switched off under `prefers-reduced-motion`.

## Test locally
`python3 -m http.server` in the repo folder, then open http://localhost:8000.
