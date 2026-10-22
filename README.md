# Creative Gifting

A simple one-page website for Mom's homemade gift-packing business. It shows our products with
photos and prices, and lets customers reach us on WhatsApp or by phone. That's all it needs to do.

## How it works
- **The website** is plain HTML, CSS and a little JavaScript. There's nothing to install or build.
- **Products and shop details** live in two small files, `content/products.json` and `content/settings.json`.
  The page reads them and shows them.
- **Mom edits** those files from her phone with [Pages CMS](https://pagescms.org), which gives her a
  simple form. She logs in with a link sent to her email, so she doesn't need a GitHub account.
- **Hosting** is on Cloudflare Pages (free). Every time Mom taps Save, the site updates in about a minute.
- **Undo:** every change is saved in GitHub's history, so any mistake can be reversed.

## Who does what
| Mom | Me (the developer) |
|---|---|
| Add / hide products, change prices and photos | Look and layout of the site |
| Update phone, WhatsApp, Instagram, about text | Domain, hosting, fixing anything that breaks |

## Costs
| Item | Cost |
|---|---|
| `.in` domain | about ₹500–900 a year (check the renewal price, not just the first-year offer) |
| Hosting (Cloudflare Pages) | free |
| Editing (Pages CMS) | free |
| Instagram, WhatsApp Business, Google Business Profile | free |

## Files
```
README.md        this file
PLAN.md          the steps to get the site live
MOM_GUIDE.md     how Mom updates the site from her phone
GROW.md          free ways to get customers (Instagram, WhatsApp, Google)
CLAUDE.md        instructions for Claude Code when working on this repo
content/         products.json and settings.json (what Mom edits)
images/          product and banner photos used by the site
assets-inbox/    raw photos and logo before they're picked and resized
```

The earlier, much bigger plan (Next.js, database, OTP login and so on) was dropped on purpose.
It's still in git history at commit `68c506e` if it's ever needed.
