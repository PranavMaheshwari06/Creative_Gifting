# Brand & Design Direction

## Positioning
Not "a packing shop". A luxury presentation house for the most emotional moments of an Indian
family: the trousseau a mother has dreamed about, the shagun that says "you are family", the first
gift for a newborn. The website must make a visitor feel: "these people will make my family look
beautiful and I can trust them with something precious."

Tagline candidates (pick one in Phase 0): "Packed with love. Presented with grandeur." /
"Where every gift becomes an heirloom." / "The art of the beautiful gift."

Tone of voice: warm, refined, family-first, confident. Never pushy or discount-led. A little Hindi
vocabulary is welcome where natural (shagun, trousseau, tilak, roka, sagai, mehendi, sangeet,
godh bharai, vidaai) because the audience uses these words daily.

## Visual identity (starting point; refine with the real logo)
- Palette: ivory #FAF6EF (background), deep maroon #5B1A2B (primary), antique gold #B8923A (accent),
  deep emerald #0F4C45 (secondary), blush #F3D9D6 (soft sections), warm charcoal #2A2320 (text).
  Adjust to harmonise with the actual logo. Gold is for accents only, never large flat areas.
- Type: Cormorant Garamond (headings, elegant serif) + a clean sans (Jost or DM Sans) for body.
  Load Noto Sans/Serif Devanagari for Hindi. Use font-display: swap and subset fonts.
- Motifs: very subtle jali/paisley line patterns as section backgrounds (SVG, 4-6% opacity),
  ribbon-and-bow dividers, thin gold hairlines. No clip-art, no stock-looking icons.
- Photography direction (guide for mom and for Instagram): natural window light, top-down flat lays,
  close-ups of silk, zari, ribbons, hands tying a bow, finished trays on a neutral surface.
  Consistent warm tone. One hero object per frame.
- Logo: square logo supplied later. Use it in header (small), footer, favicon, PWA icon, and as
  the Open Graph fallback. Build with a placeholder that is swappable from admin.

## "Not boring" checklist (design and motion)
- Hero: full-bleed banner slideshow or a muted looping video of hands packing, with a poster image,
  elegant headline, two buttons: "Request a Quote" and "WhatsApp Us".
- Gentle scroll-reveal on sections; subtle parallax on hero only; image hover zoom; ribbon
  "unwrap" micro-animation on the quote button (CSS, lightweight).
- Gallery: masonry grid, sticky category chips, fast search, lightbox with swipe, deep links, share.
- Smooth scrolling, scroll-snap carousels on mobile for testimonials/occasions.
- Every animation must be GPU-friendly (transform/opacity), disabled under prefers-reduced-motion,
  and must never push Lighthouse mobile below 90. Beauty that loads slowly loses customers.
- Real photos beat effects. If forced to choose, polish the photos and typography first.

## Page structure
Global: sticky header (logo, configurable menu, "Request a Quote"); mobile sticky bottom bar with
Call | WhatsApp | Request a Quote; footer with contact, social, privacy link.

Home:
1. Hero (banner/video, headline, 2 CTAs)
2. Occasion tiles: Wedding Trousseau, Shagun & Return Gifts, Baby & Newborn, Festive, Corporate,
   Custom Packaging (each links to a filtered gallery)
3. Featured work (admin-chosen, masonry)
4. How it works: Share your vision -> We design & quote -> Handcrafted packing -> Delivered with care
5. Process strip: short looping clips/photos of the craft
6. Testimonials carousel (only real ones, with permission)
7. Trust row (real numbers only, e.g. years in business; omit if unsure)
8. Instagram strip (links to the profile; a photo grid that the admin curates)
9. Closing CTA with a short enquiry form

Portfolio: filters + search + masonry + lightbox. Item page /portfolio/[slug]: gallery, description,
category chips, "Enquire about this design" button that pre-fills the form with the item name.
About: the founder's story (this is the brand's biggest differentiator — real photo, real voice),
values, craft process.
Contact: enquiry form (Name, Phone, Email, Occasion Type, Occasion Date, Message + consent),
WhatsApp, click-to-call, address/service area, hours, map link.
Also: Privacy Policy, 404 page, thank-you state after enquiry.

## Content rules
Write real, specific copy. Mark anything unknown as [PLACEHOLDER: what is needed]. No lorem ipsum,
no invented numbers or testimonials. Alt text on every image. Each page has a unique title and
meta description.

## Technical design rules
Design tokens in Tailwind config (colours, spacing, radius, shadows) so a rebrand is a one-file change.
Next/Image with WebP/AVIF, responsive sizes, blur placeholders. Admin-uploaded images are resized and
optimised on upload. Test on a mid-range Android phone over slow 4G, not just on a laptop.
