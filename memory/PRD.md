# KiraFix / Hopper Modern — PRD

## Original Problem Statement
> Build a landing page and a 4 page website on "transforming underperforming enterprises to hi-performing with KiraFix (Innovation + Modern Learning + AI) Solutions model" The Founder Seema Bassi, EdTech SDSU, former VP & Learning Leader with Fortune 500s for 25 years has been transforming struggling organizations with low eSAT, cSAT with her innovative modern learning solutions.

User-provided: LinkedIn `/in/seemabassi-hopper`, Instagram `Hopper_Learning`, Web `www.hoppermodern.com`. Brand palette: **deep electric orange + medium gray**.

## Architecture
- **Stack**: FastAPI (backend, /api prefix) + React 19 (frontend, react-router) + MongoDB (motor) + Tailwind + shadcn UI + framer-motion + react-fast-marquee + sonner toasts.
- **5 routes**: `/`, `/about`, `/kirafix`, `/case-studies`, `/contact`.
- **No 3rd-party integrations**; contact + newsletter persisted to Mongo collections `contact_inquiries` and `newsletter_signups`.
- **Typography**: Cormorant Garamond (display serif) + Manrope (body) + JetBrains Mono (mono accents).
- **Brand tokens** in `index.css`: `--kf-orange: #FF4A0F`, `--kf-bg: #FAFAF8`, `--kf-ink: #161616`, `--kf-gray: #6B6B6B`.

## User Personas
1. **CEO / CHRO** of an underperforming Fortune 500/large enterprise — looking to fix L&D ROI.
2. **CLO / Head of L&D** — wants a Fractional CLO or turnaround partner.
3. **Press / event organisers** — booking Seema for masterclasses, interviews.
4. **Inbound talent / aspiring CLOs** — newsletter subscribers, comeback-club masterclass attendees.

## Core Requirements (Static)
- Editorial, executive-grade aesthetic (NOT generic SaaS).
- Brand identity: KiraFix™ by Hopper Modern; honour user-provided socials.
- Seema's photo + bio with Top 10 CLO '23 badge prominent.
- Contact form must store inquiries; "Book Discovery Call" must be the primary CTA on every page.
- Mobile responsive, accessibility-conscious data-testids on all interactive elements.

## What's Been Implemented — 2026-06-23
- ✅ 5-page editorial site live and responsive.
- ✅ Home: Hero, credibility marquee (GE/Aviva/Rio Tinto/HCL etc), stats, KiraFix 3 pillars, founder spotlight (Seema photo), case studies preview.
- ✅ About: portrait hero, philosophy drop-cap essay, career timeline (1994 → today), credentials grid, media features (Masterclass + IWD).
- ✅ KiraFix Model page: 4 phases (Diagnose / Design / Deploy / Compound), accordion of 6 services, deliverables checklist.
- ✅ Case Studies: 3 detailed transformation cards (BFSI, Telecom, BPO) + 4 insight cards.
- ✅ Contact: split-screen "Let's transform" + full form with inquiry_type select, persisted to MongoDB.
- ✅ Dark editorial footer with big "Let's Talk", newsletter signup, LinkedIn/Insta/Web links.
- ✅ Backend endpoints: `GET /api/`, `GET /api/health`, `POST/GET /api/contact`, `POST /api/newsletter` (idempotent).
- ✅ 100% backend + 100% frontend testing_agent_v3 pass on iteration 1.

## Prioritized Backlog
**P1 — Next features**
- [ ] Email notification on contact submit (Resend integration) so Seema is alerted immediately.
- [ ] Admin auth + `/admin` view of inquiries (currently `GET /api/contact` is unauthenticated — TODO before public launch).
- [ ] Real client-logo SVGs in the credibility marquee once approved.
- [ ] Replace 3 case-study briefs with real Seema-approved metrics & client names (or keep anonymised).

**P2 — Polish**
- [ ] Add `aria-expanded` on services accordion buttons (a11y).
- [ ] Move logging.basicConfig above route handlers in `server.py` (readability).
- [ ] Migrate `created_at` storage from ISO string → native BSON datetime for index/sort.
- [ ] Lock CORS_ORIGINS to production hostnames before launch.
- [ ] Insights page → real CMS or markdown-based blog so Seema can publish without code deploys.
- [ ] Open Graph / SEO meta tags per route, sitemap.xml, favicon.

**P3 — Growth**
- [ ] Lead-magnet PDF gated by email (e.g., "The 90-day L&D Turnaround Checklist").
- [ ] Calendly embed on Contact page for self-serve Discovery Call booking.
- [ ] Analytics (PostHog/GA4).
- [ ] Multi-language (English / Hindi) for India-first audience.

## Next Tasks (immediate)
1. Decide on email notification provider (Resend) and admin auth approach.
2. Replace placeholder case-study copy with Seema-approved content.
3. Add Open Graph meta + favicon before public launch.
