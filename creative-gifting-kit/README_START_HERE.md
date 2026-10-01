# Creative Gifting — Starter Kit (read me first)

## What this kit is
A set of instruction files. You drop them into an empty project folder, open it in VS Code with the
Claude Code extension, and Claude builds the website phase by phase while teaching you how it works.
No application code is in here yet; this is the blueprint.

```
creative-gifting-kit/
  README_START_HERE.md        <- this file
  CLAUDE.md                   <- Claude's standing instructions (it reads this automatically)
  docs/
    PROJECT_BRIEF.md          <- what we are building and why, auth spec, decisions to make
    BRAND_AND_DESIGN.md       <- luxury look & feel, pages, motion
    ADMIN_FOR_MOM.md          <- the phone-first admin and the "Mom Test"
    TASKS.md                  <- phases, checklists, "Done when" criteria
    PROMPTS.md                <- master prompt + one prompt per phase (copy/paste)
    MARKETING_PLAN.md         <- Instagram, WhatsApp, Google, 90-day plan (for you)
  assets-inbox/               <- put logo, banners, photos, videos, inspiration here
  public/brand/               <- final logo/banners end up here
```

## How the finished system works (plain English)
- The website is written with Next.js. It prepares pages quickly so phones and Google love it.
- Tailwind + shadcn/ui = the styling toolkit that keeps the design consistent.
- PostgreSQL = the database, the filing cabinet: portfolio items, enquiries, settings, reviews.
- Prisma = the translator between our code and the database.
- Cloudinary = stores photos/videos and resizes them for each phone.
- Resend = sends the OTP code and "new enquiry" emails.
- Vercel = the host, the shop premises where the site lives. GitHub = the version history/undo button.
- Claude Code = your engineer. CLAUDE.md = its standing instructions.

Flows:
1. Visitor on phone -> opens site -> pages come from Vercel, data from the database, pictures from
   Cloudinary.
2. Visitor sends the enquiry form -> saved in the database -> email to mom -> shows in her admin.
3. Mom opens the installed admin icon on her phone -> logs in (password + captcha + email code, or
   trusted phone) -> adds photos -> they appear on the website within seconds.

## One-time setup
1. Install: VS Code, Node.js (LTS), Git. Add the Claude Code extension in VS Code.
2. Create an empty folder "creative-gifting", copy this kit's contents into it.
3. In a terminal there: `git init`, commit, then create a private GitHub repo and push.
4. Open the folder in VS Code, start Claude Code, switch to Plan mode.
5. Paste the MASTER PROMPT from docs/PROMPTS.md. Follow docs/TASKS.md from there.
(For exact menu names and commands check Claude Code's current documentation: docs.claude.com.)

## Working routine
Plan mode -> paste phase prompt -> read the plan -> approve -> test on your phone -> ask Claude to
explain -> commit -> clear the session -> next phase. Small steps, always.

## Golden rules
- Never paste passwords or API keys into the chat. They live in a .env file that is never committed.
- Test on a real phone, not only on a laptop.
- Commit after every working task so you can always go back.
- If you don't understand something, ask "explain like I'm new". That is the point of this project.
- Don't ask for everything in one prompt. Phase by phase gives better, cheaper, safer results.

## Rough running costs (verify current pricing; free tiers may be enough early on)
Domain: roughly Rs 700-1,500 a year. Hosting: a business site should plan for a paid plan (many free
tiers forbid commercial use). Database, images and email: free tiers usually cover this scale at first.
Instagram and WhatsApp Business: free. Paid ads: optional, start small.

## Honest expectations
Part-time, a beginner with Claude can plausibly finish in about 4-6 weeks. The hard parts are not
typing code: they are collecting good photos, writing real content, and testing with mom.
Great photos and consistent Instagram will do more for the business than any animation. Start
Instagram this week, even before the site exists.

## Do today (before any code)
1. Create the Instagram account and post your best 9-12 photos (see docs/MARKETING_PLAN.md section 4).
2. Set up WhatsApp Business with a greeting and a catalogue.
3. Pick the domain, collect assets into assets-inbox/, and answer the decisions in PROJECT_BRIEF.md.
