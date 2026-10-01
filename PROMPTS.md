# Prompts — copy, paste, go

## How to use
1. Open the project folder in VS Code and start Claude Code. It reads CLAUDE.md automatically.
2. Start every phase in a NEW session (clear the old one) and switch to PLAN mode first.
3. Paste the MASTER PROMPT once, in Phase 1. For later phases paste only that phase's prompt.
4. Read the plan Claude gives. Ask questions. Only then say "approved, go ahead".
5. After each task ask: "Explain what you just built as if I'm new to this, then update docs/LEARN."
6. Use the strongest model (Opus) for planning, auth, security and design review; a cheaper model
   is fine for routine pages once the plan is approved. Check /model in Claude Code.
7. Never paste real passwords or API keys into chat. Keys go in .env only.

---

## MASTER PROMPT (Phase 1 kickoff)
```
You are the lead engineer, security reviewer and design partner for "Creative Gifting", a premium
Indian wedding/occasion gift-packing business. I am the owner's child. I am a beginner, I will
operate the website, and I want to understand everything you build. My mother runs the business and
will manage content ONLY from her phone, so her admin experience matters as much as the public site.

Read, in this order: CLAUDE.md, docs/PROJECT_BRIEF.md, docs/ADMIN_FOR_MOM.md,
docs/BRAND_AND_DESIGN.md, docs/TASKS.md, and look at assets-inbox/ (list files only, do not
open large media). Do NOT write application code yet.

Deliver, in this order, then stop and wait for my approval:
1. A summary of what you understood, max 15 bullets, in plain language.
2. Conflicts, ambiguities and risks you found (e.g. login friction vs security, free-tier hosting
   terms, anything missing from my brief), each with your recommended answer.
3. Your answers/recommendations for decisions D1-D10 and why.
4. A proposed outline of docs/ARCHITECTURE.md and the Prisma data model.
5. A list of exactly what you need from me (accounts, assets, facts) before Phase 2.
6. A plain-language explanation of how the whole system fits together, so I can learn it.

Operating rules: work phase by phase from docs/TASKS.md; plan before code; ask when unsure; keep
replies concise; teach as you go (docs/LEARN); never invent business facts; security and mobile
usability for a non-technical user are non-negotiable.
```

## Phase prompts

### Phase 1 — after you approve the master plan
```
Approved. Write docs/ARCHITECTURE.md, the Prisma schema draft (no migration yet), the route list,
and ADRs for stack, hosting, analytics and auth. Verify current pricing and commercial-use terms
for the hosting, database, image and email providers before recommending. Add a threat list for
login, uploads and the enquiry form. End with the questions you still need answered.
```

### Phase 2 — Foundation + holding page
```
Phase 2 from docs/TASKS.md. Plan first (files, commands, order), wait for my OK, then build.
Scaffold the project, tooling, design tokens, database + seed, env validation, CI, and the
one-page holding site with WhatsApp and call buttons. Show me how to run it and deploy it.
Write docs/LEARN/phase-2.md explaining each piece for a beginner.
```

### Phase 3 — Admin authentication
```
Phase 3. Implement the 2-step login exactly per docs/PROJECT_BRIEF.md section 6 (include D1 if I
approved it). Plan first. Write tests before or with the code. Then run a security review of the
whole flow and list anything you would still worry about. Explain each security measure in plain
language in docs/LEARN/phase-3.md so I can describe it to someone else.
```

### Phase 4 — Admin CMS for mom
```
Phase 4. Build the mobile-first admin per docs/ADMIN_FOR_MOM.md, one flow at a time in this order:
shell + home tiles, Add New Work, Enquiries, Banner, Contact details, Reviews, More (menu/text).
After each flow, give me the exact steps to test it on my phone and wait for my feedback.
Use plain words, big targets, undo and Trash. Follow the Mom Test.
```

### Phase 5 — Public website
```
Phase 5. Build the public site per docs/BRAND_AND_DESIGN.md using the real brand tokens. Start with
the layout and the Home page, show me, then Portfolio and item pages, then About/Contact/form.
Content comes from the database/admin, with [PLACEHOLDER] text where facts are missing.
Design for 375px first. Make it feel like a luxury brand, not a template.
```

### Phase 6 — Polish
```
Phase 6. Add motion (reduced-motion safe), SEO, structured data, Open Graph, accessibility fixes,
and performance tuning to reach Lighthouse mobile >= 90 on every public page. Add Playwright E2E
tests for the four key journeys. Then review the whole codebase and propose things to delete or
simplify. Report the before/after scores.
```

### Phase 7 — Mom test and handover
```
Phase 7. Give me the Mom Test script, a checklist for installing the PWA on her phone, a script for
three 30-second help videos, and write docs/RUNBOOK.md (deploy, backups and restore, rotate secrets,
update dependencies, what to do if the site is down). Keep it beginner friendly.
```

## Everyday prompts
- "Explain this file to me like I'm new. What would break if I deleted it?"
- "Before you change anything: what files will you touch and why?"
- "Review my last commit for bugs, security issues and anything confusing."
- "Make it look more premium: suggest 5 specific changes, ranked by impact, don't change code yet."
- "Test this on a 375px screen and tell me what looks wrong."
- "I got this error: <paste>. Explain it simply, then propose the smallest fix."
- "Summarise where we are, what is done, what is next, in 10 lines, then I will clear the session."
