# KiraFix AI™ / Hopper Modern — PRD

## Original Problem Statement
> Build a landing page and a 4 page website on "transforming underperforming enterprises to hi-performing with KiraFix (Innovation + Modern Learning + AI) Solutions model" The Founder Seema Bassi, EdTech SDSU, former VP & Learning Leader with Fortune 500s for 25 years has been transforming struggling organizations with low eSAT, cSAT with her innovative modern learning solutions.

## Positioning (final)
- **Product**: KiraFix AI™ — a trademarked **Performance Turnaround framework** that makes underperforming **business units** perform.
- **NOT** a "learning operating system" or "L&D function fix". KiraFix AI™ is about the **entire business unit** — measured in CSAT, eSAT, productivity and ROI.
- **Levers**: Innovation + AI-based Modern Learning + AI. (Means to the end, not the destination.)
- **Parent brand**: Hopper Modern Innovative Learning Solutions.
- **Founder**: Seema Bassi (Top 10 CLO '23, Ex-VP GE/Aviva/Rio Tinto, EdTech SDSU, IIMB Women Start-up, Certified Independent Director).

## Visual Identity (final)
- **Palette**: Deep electric burnt orange `#E64A19` background dominant + warm dark-gray contrast bands `#2B2620` + warm cream `#F5EFE6` text on dark.
- **Display font**: Bricolage Grotesque (modern grotesque, distinctive personality).
- **Body font**: Inter Tight.
- **Mono accent**: JetBrains Mono (for overlines, codes, labels).
- **Aesthetic**: Modern, techno, sharp 4px corners, // mono labels, subtle grid pattern overlay, warm orange-tinted glow orbs on dark sections.

## Architecture
- **Stack**: FastAPI + React 19 + MongoDB + Tailwind + shadcn UI + framer-motion + react-fast-marquee + sonner.
- **5 routes**: `/`, `/about`, `/kirafix`, `/case-studies`, `/contact`.
- **Backend endpoints**: `/api/`, `/api/health`, `POST/GET /api/contact`, `POST /api/newsletter` (idempotent).

## Assets Integrated
- Hopper Modern orange brand logo — Footer "Parent Brand" banner
- Seema Bassi portrait — Home hero side panel, Home founder section, About page hero (all cropped to hide PowerPoint overlay)
- AI Masterclass screenshot — About > Press & On Stage
- IWD feature — About > Press & On Stage
- CEO Insights article content — woven into founder bio, philosophy quote, pillars

## What's Live — 2026-06-23
- 5-page editorial site, mobile responsive, all data-testids in place
- Contact form + Newsletter signup persisted to MongoDB
- 100% backend + 100% frontend testing_agent_v3 pass (iteration_1)
- Performance-turnaround narrative across all pages (no "learning OS" language)

## Backlog
**P1**
- Replace 3 placeholder case-study briefs with Seema-approved metrics/clients
- Add Resend (or similar) for instant email notification on Discovery Call enquiries
- Lock down `GET /api/contact` behind admin auth before public launch

**P2**
- Add aria-expanded on accordion (a11y polish — testing agent noted)
- Open Graph meta + favicon + sitemap before public launch
- Lock CORS_ORIGINS to production hostnames

**P3**
- Gated lead-magnet PDF ("The 90-Day Business Unit Turnaround Checklist")
- Calendly embed on Contact for self-serve Discovery Call booking
- Analytics (PostHog/GA4)
