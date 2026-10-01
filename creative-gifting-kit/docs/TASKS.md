# Task List & Phases

Rule: finish a phase, check every "Done when" item, commit, then start a fresh Claude session
for the next phase. Estimated effort is for part-time work by a beginner using Claude Code.

## Phase 0 — Preparation (owner, no coding) ~ 3-4 days
- [ ] Final brand name, tagline, domain name (check availability; buy it)
- [ ] Accounts: GitHub, Vercel (or chosen host), Postgres provider, Cloudinary, Resend, Google
      Business Profile, Instagram, WhatsApp Business, Plausible/GA4 (decide)
- [ ] Assets into assets-inbox/: square logo (SVG or PNG >= 1024px); 3-5 banner images (landscape
      >= 2400x1200) + a vertical crop for phones; 30-40 best photos in folders per occasion;
      5-10 vertical videos (10-20 s); founder photo + 150-word story
- [ ] Facts: phone, WhatsApp number, email, address/service area, working hours, social links,
      5+ real testimonials with written permission, price positioning, lead times
- [ ] Gather 5 reference websites you love into assets-inbox/inspiration/ (screenshots + one line
      on what you like). Reference, not templates: templates fight the custom admin and look generic.
- [ ] Answer decisions D1-D10 in docs/PROJECT_BRIEF.md section 7
- [ ] Install VS Code, Node.js LTS, Git, Claude Code extension; create GitHub repo (private)
Done when: all folders filled, decisions written, repo created, tools run.

## Phase 1 — Spec & architecture (Claude, no app code) ~ 1 day
- [ ] Claude reads all docs; returns understanding, risks, recommended answers
- [ ] docs/ARCHITECTURE.md (diagram in text, data flow, folder structure, environments)
- [ ] Final Prisma schema draft; API/route list; ADRs for stack, hosting, analytics, auth approach
- [ ] Security threat list for login, uploads, enquiry form
- [ ] Verify current pricing/terms for hosting, DB, images, email
Done when: owner reads and approves ARCHITECTURE.md and can explain the data flow back in own words.

## Phase 2 — Foundation + holding page ~ 1 weekend
- [ ] Next.js + TS strict + Tailwind + shadcn/ui, ESLint, Prettier, Husky pre-commit
- [ ] Design tokens (colours, fonts) from BRAND_AND_DESIGN.md
- [ ] Prisma + Postgres, first migration, seed (categories, sample content marked [PLACEHOLDER])
- [ ] .env.example, env validation with Zod; secrets never committed
- [ ] GitHub Actions: lint, type-check, test on every push
- [ ] Deploy preview to Vercel; custom domain; HTTPS
- [ ] One-page holding site: logo, line, WhatsApp + call buttons, Instagram link
Done when: holding page is live on the domain, CI green, the owner can run the project locally.

## Phase 3 — Admin authentication (highest risk, do early) ~ 1 weekend
- [ ] Captcha service, password check (Argon2), OTP issue/verify (spec: PROJECT_BRIEF section 6)
- [ ] Rate limiting + lockouts, audit log, session cookie, logout, trusted phone (D1)
- [ ] Email sending via Resend with a plain, clear OTP email
- [ ] Route protection for all /admin and admin API routes
- [ ] Tests: wrong password, wrong/expired/reused OTP, lockout, captcha reuse, CSRF, unauthenticated access
- [ ] Run /security-review and fix findings
Done when: every test passes, a manual attack checklist is ticked, owner understands each step of the flow.

## Phase 4 — Admin CMS, mobile-first ~ 2 weekends
- [ ] PWA shell: install icon, home with 5 big tiles, bottom nav, English/Hindi toggle
- [ ] Categories; Add/Edit/Hide/Trash works with multi-photo upload (resize, WebP, rotate, progress)
- [ ] Banner/hero editor with crop guide; text, menu, contact, social links
- [ ] Enquiries inbox: status, notes, call + WhatsApp buttons, CSV export, email + push alerts
- [ ] Testimonials manager
- [ ] Undo, drafts, friendly errors
Done when: Mom Test tasks 2-7 pass on a real phone.

## Phase 5 — Public website ~ 2 weekends
- [ ] Global layout, header, sticky mobile action bar, footer
- [ ] Home (all 9 sections), Portfolio (filters, search, masonry, lightbox), item page, About, Contact
- [ ] Enquiry form with Zod validation, honeypot, rate limit, consent, thank-you state, email alert
- [ ] WhatsApp (wa.me with prefilled message) and tel: links everywhere; event tracking
- [ ] Privacy Policy and 404 pages
Done when: a stranger can find work, filter it and send an enquiry on a phone in under 2 minutes.

## Phase 6 — Polish: motion, SEO, speed, accessibility ~ 1 weekend
- [ ] Scroll reveals, hero motion, micro-interactions (reduced-motion safe)
- [ ] sitemap, robots, Open Graph images, LocalBusiness JSON-LD, titles/meta, alt text
- [ ] Lighthouse mobile >= 90 on all public pages; test on a mid-range Android on slow 4G
- [ ] Accessibility audit (keyboard, screen reader basics, contrast, tap targets)
- [ ] End-to-end tests (Playwright) for: gallery filter, enquiry submit, admin login, add work
- [ ] Final /security-review and a "delete anything unnecessary" pass
Done when: all scores met, E2E green, no [PLACEHOLDER] left that is visible to the public.

## Phase 7 — Mom Test and handover ~ 2-3 days
- [ ] Run the 7-task Mom Test with mom; fix the screens, repeat
- [ ] Install PWA on her phone; save login; record 3 help videos; set up "Need help?" button
- [ ] Backup plan (database backups on; monthly CSV export reminder); document how to restore
- [ ] docs/RUNBOOK.md: how to deploy, rotate secrets, update dependencies, what to do if the site is down
Done when: mom completes all tasks unaided and you can explain the system to someone else.

## Phase 8 — Launch and grow ~ ongoing
- [ ] Final content review, domain check, Google Search Console, analytics goals
- [ ] Update Instagram bio, GBP, WhatsApp profile; announce launch reel
- [ ] Weekly: review enquiries source report; monthly: dependency updates, backup test
- [ ] v2 ideas: WhatsApp Business API alerts, Hindi public site, Instagram feed sync, price estimator,
      blog/gifting guides for SEO, online payment for advances, multi-language

## Definition of Done (every task)
Works on a 375px phone and desktop; tests added/updated; lint + type-check pass; no secrets in git;
LEARN note written; committed with a clear message.
