# CLAUDE.md — Creative Gifting

## What this is
Marketing website + mobile-first admin for "Creative Gifting", a premium Indian wedding and occasion
gift-packing business (trousseau, shagun, newborn, festive, corporate, custom packaging).
Read docs/PROJECT_BRIEF.md before any work.

## The three people
- Visitors: affluent Indian families, wedding planners, NRIs, corporate buyers. Mostly on phones.
  The site must build trust fast and move them to WhatsApp / enquiry.
- Admin = the owner's mother. Non-technical. Uses ONLY her phone. Every admin feature must pass the
  "Mom test" in docs/ADMIN_FOR_MOM.md.
- Developer = the owner's child. Beginner who wants to understand everything. Teach as you build.

## Stack (change only via an ADR in docs/adr/)
Next.js (App Router) + TypeScript (strict) + Tailwind + shadcn/ui, Prisma + PostgreSQL, Zod,
Cloudinary (images/video), Resend (email), Vitest + Playwright, GitHub Actions CI.

## Working rules
1. Plan first. For anything bigger than one file: state the plan, wait for my approval.
2. Follow docs/TASKS.md phase by phase. Never start the next phase until the current phase's
   "Done when" items are met and I say "go".
3. Small commits (conventional messages), one feature per branch, tests with the feature.
4. Teach-me rule: after each task, append a plain-language note to docs/LEARN/phase-N.md
   (what we built, why, how the files connect, how to run it, what could break).
   Add every new term to docs/LEARN/GLOSSARY.md. No unexplained jargon, ever.
5. Record important decisions in docs/adr/NNN-title.md (context, decision, why; max 10 lines).
6. If a requirement is unclear, ASK. Never guess on auth, data model, or deleting data.
7. Be economical: short replies, don't repeat the plan, don't re-read files already in context,
   read only the files you need, never scan node_modules/.next.
8. Do not invent facts for the website: no fake testimonials, stats, awards, prices, or addresses.
   Use clearly marked [PLACEHOLDER] text that is easy to find (grep "[PLACEHOLDER").

## Non-negotiables
- Security: hashed passwords (Argon2), hashed OTPs, rate limiting, CSRF protection, HttpOnly+Secure
  cookies, Zod validation on every server input, upload type/size checks, no secrets in git.
- Accessibility: WCAG AA contrast, 44px minimum tap targets, keyboard + screen-reader friendly,
  respect prefers-reduced-motion.
- Performance (public pages, mobile): Lighthouse >= 90 for Performance, Accessibility,
  Best Practices, SEO. Hero image <= 200 KB WebP; hero video <= 3 MB muted loop with poster.
- Privacy: privacy policy page + consent checkbox on the enquiry form (India's DPDP Act 2023).
- Mobile first: design and test at 375px width first, then scale up.

## Folder layout
src/app/(public)/...        public pages
src/app/(admin)/admin/...   mom's admin (PWA)
src/app/api/...             route handlers
src/components/{ui,public,admin}
src/lib/{db,auth,email,images,validation,settings}
prisma/{schema.prisma,seed.ts}
public/brand/               logo + banners (placeholders until real files arrive)
docs/                       specs, ADRs, LEARN notes

## Commands (fill in during Phase 2)
dev: npm run dev | test: npm test | e2e: npm run e2e | lint: npm run lint | db: npx prisma migrate dev
