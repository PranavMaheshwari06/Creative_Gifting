# Plan

Three small steps. Don't add anything that isn't on this list until the site is live and Mom is
using it.

## Step 0: Collect the basics (no code, 1–2 days)
- [ ] Decide the name shown on the site and a one-line tagline
- [ ] Buy the `.in` domain (any registrar is fine, or Cloudflare Registrar if it offers `.in`)
- [ ] Logo, if we have one (any square image is fine for now)
- [ ] 10–20 good product photos in `assets-inbox/` (daylight, plain background; see tips in GROW.md)
- [ ] For each product: name, price (or "starting from"), one or two lines of description
- [ ] Phone number, WhatsApp number, Instagram link, area we serve, working hours
- [ ] 3–4 lines about Mom and how the business started, plus a photo of her if she's happy with that
- [ ] Set up WhatsApp Business and Instagram (see GROW.md). These don't need to wait for the website.

## Step 1: Build the page (1 weekend)
- [ ] `index.html`, `style.css`, `app.js`: one mobile-first page with these sections:
      1. Header: logo, name, WhatsApp button
      2. Banner photo and tagline
      3. Products: photo, name, price, description, and an "Ask on WhatsApp" button that opens
         WhatsApp with "Hi, I'm interested in <product name>" already typed
      4. About Mom
      5. Contact: Call, WhatsApp, Instagram, area, hours
- [ ] `app.js` reads `content/settings.json` and `content/products.json` and shows only products
      where `show` is `true`
- [ ] Resize photos to about 1200px wide before adding them, so the page loads fast
- [ ] Page title, description and share image, so links look good on WhatsApp
- [ ] Put the site on Cloudflare Pages (connect the GitHub repo, no build command), then add the domain
- [ ] Check it on a real phone

**Done when:** the site opens on the domain on a phone, shows real products, and the WhatsApp button works.

## Step 2: Hand editing over to Mom (1 evening)
- [ ] Add `.pages.yml` (Pages CMS settings) with two sections: **Products** and **Shop details**
- [ ] Open app.pagescms.org, connect this repo, invite Mom's email as a collaborator
- [ ] Sit with Mom while she adds a product, changes a price and hides a product, all on her phone
- [ ] Save the Pages CMS link to her phone's home screen
- [ ] Fill in anything missing in MOM_GUIDE.md based on what confused her

**Done when:** Mom can do the three tasks above on her own.

## Later, only if we actually need it
- A contact form (a free service such as Web3Forms, so we don't need a server)
- Category filter buttons (once there are more than ~15 products)
- A Hindi version
- Google Business Profile reviews shown on the site
