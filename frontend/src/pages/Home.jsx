import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Cpu, Brain, Activity } from "lucide-react";
import PageShell from "../components/PageShell";
import CredibilityMarquee from "../components/CredibilityMarquee";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const SEEMA = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/t3634s6x_SeemaBassi.jpeg";

const pillars = [
  {
    num: "01",
    code: "PILLAR.INNOVATION",
    title: "Innovation",
    icon: Activity,
    body:
      "Diagnose first. Six Sigma, Organisational Gap Analysis and Performance Improvement tools find the real reason your unit is missing CSAT, eSAT and productivity targets — not a training-hours band-aid.",
  },
  {
    num: "02",
    code: "PILLAR.MODERN_LEARNING",
    title: "Modern Learning",
    icon: Cpu,
    body:
      "AI-based learning methodologies replace stale ILT. GenAI-personalised journeys, intelligent tutoring, business simulations, game-based learning and 70:20:10 — engineered on ADDIE, measured by performance lift.",
  },
  {
    num: "03",
    code: "PILLAR.AI",
    title: "AI",
    icon: Brain,
    body:
      "AI agents inside the learning OS. Skill-gap detection per rep, adaptive content sequencing, real-time coaching nudges and manager dashboards that flag risk before CSAT drops.",
  },
];

const stats = [
  { value: "30+", label: "Years global L&D leadership" },
  { value: "25+", label: "Fortune 500 transformations" },
  { value: "Top 10", label: "CLO of 2023" },
  { value: "5×", label: "Cost centers scaled at HCL" },
];

const cases = [
  {
    tag: "BFSI / Fortune 500",
    title: "Underperforming frontline → top-quartile CSAT in 9 months.",
    metric: "+32%",
    metricLabel: "Customer Satisfaction",
    blurb: "Re-engineered the L&D operating model with AI-based learning journeys and ADDIE-driven simulations. Manager-cascaded accountability did the rest.",
  },
  {
    tag: "Telecom / India + APAC",
    title: "Disengaged unit reborn through AI-led learning.",
    metric: "+41%",
    metricLabel: "Employee eSAT",
    blurb: "Replaced 300+ hours of legacy ILT with GenAI-personalised journeys. Real-time skill diagnostics. Manager 90-day reviews tied to the CEO scorecard.",
  },
];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section data-testid="home-hero" className="relative overflow-hidden bg-[var(--kf-bg)]">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-44 pb-24 md:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal>
                <p className="kf-overline mb-8 flex items-center gap-3">
                  <span className="kf-dot" />
                  KIRAFIX™ // ENTERPRISE PERFORMANCE TURNAROUND
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="font-serif font-medium text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] tracking-[-0.035em] text-[var(--kf-ink)]">
                  Turning <span className="text-[var(--kf-orange)]">underperforming</span> units into
                  <br />
                  <span className="text-[var(--kf-gray)]">high-performing,</span> high-CSAT functions.
                </h1>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-10 text-lg md:text-xl font-light leading-relaxed text-[var(--kf-gray)] max-w-2xl">
                  KiraFix™ is the Performance Turnaround model. Innovation + AI-based Modern Learning + intelligent automation — engineered over three decades inside GE, Aviva, Rio Tinto and HCL, codified for CEOs and CXOs who refuse to keep tolerating low CSAT and low eSAT.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <Link to="/contact" data-testid="hero-cta-primary" className="kf-btn-primary">
                    Book a Discovery Call <ArrowUpRight size={14} />
                  </Link>
                  <Link to="/kirafix" data-testid="hero-cta-secondary" className="kf-btn-ghost">
                    The KiraFix™ Model <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3 hidden lg:block">
              <Reveal delay={0.36}>
                <div className="kf-vertical">
                  v1.0 // INNOVATION · MODERN LEARNING · AI
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <CredibilityMarquee />

      {/* STATS */}
      <section data-testid="home-stats" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((s, i) => (
            <Reveal delay={i * 0.05} key={s.label}>
              <div className="border-t border-[var(--kf-line-strong)] pt-5">
                <div className="font-serif font-medium text-5xl md:text-6xl text-[var(--kf-ink)] tracking-[-0.04em] leading-none">{s.value}</div>
                <div className="mt-3 text-xs uppercase tracking-[0.14em] text-[var(--kf-gray)] max-w-[200px] font-mono-acc">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PILLARS */}
      <section data-testid="home-pillars" className="kf-on-dark relative overflow-hidden">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[var(--kf-orange)] opacity-[0.10] blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">// THE KIRAFIX™ MODEL</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                  Three pillars. <br />
                  <span className="text-[var(--kf-orange)]">One</span> performance turnaround.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.2}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  KiraFix™ is the framework Seema Bassi has refined over 25 years of Fortune 500 performance turnarounds. It diagnoses why a unit is underperforming, rebuilds the learning operating system with AI-based methodologies, and embeds intelligence so the CSAT and eSAT lift compounds — not evaporates.
                </p>
              </Reveal>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--kf-line)]">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.num}>
                  <div data-testid={`pillar-${p.num}`} className="relative bg-[var(--kf-bg-card)] p-8 md:p-10 h-full overflow-hidden group hover:bg-[var(--kf-bg-raised)] transition-colors duration-500">
                    <div className="absolute -top-4 -right-3 kf-pillar-num pointer-events-none">{p.num}</div>
                    <div className="flex items-center justify-between relative">
                      <Icon size={26} strokeWidth={1.5} className="text-[var(--kf-orange)]" />
                      <span className="font-mono-acc text-[10px] tracking-[0.18em] text-[var(--kf-gray-mid)]">{p.code}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-medium mt-8 relative text-[var(--kf-ink)] tracking-[-0.02em]">{p.title}</h3>
                    <p className="mt-4 text-[var(--kf-gray)] relative leading-relaxed text-sm md:text-base">{p.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* FOUNDER */}
      <section data-testid="home-founder" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="kf-img-frame aspect-[4/5] relative kf-img-grayscale">
                <img src={SEEMA} alt="Seema Bassi" />
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-[var(--kf-bg)] border border-[var(--kf-ink)] px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] font-mono-acc text-[var(--kf-ink)]">
                  <span className="kf-dot" /> Top 10 CLO &apos;23
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kf-overline mb-6">// FOUNDER</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                Seema Bassi
              </h2>
              <p className="mt-2 text-[var(--kf-gray-mid)] font-mono-acc text-[11px] tracking-[0.18em] uppercase">Founder &amp; Chief Learning Officer · Hopper Modern</p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 font-serif text-2xl md:text-3xl font-light leading-snug text-[var(--kf-ink)] border-l-2 border-[var(--kf-orange)] pl-6">
                &ldquo;Performance is the language CEOs speak. KiraFix™ turns underperforming units into high-performing, high-CSAT functions — and keeps them there.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-8 text-[var(--kf-gray)] leading-relaxed text-base max-w-2xl">
                Certified Independent Director · 30+ years in L&amp;D · Ex-VP at GE, Aviva &amp; Rio Tinto · DGM HCL (5 cost centers, 100-strong team) · EdTech, SDSU · PMP · IIMB Women Start-up · Fractional CLO for organisations needing top-tier learning leadership without the full-time headcount.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <Link to="/about" data-testid="founder-cta-about" className="inline-flex items-center gap-2 mt-8 kf-link font-mono-acc text-xs uppercase tracking-[0.18em]">
                Read the full story <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CASES PREVIEW */}
      <section data-testid="home-cases" className="kf-on-dark relative overflow-hidden">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--kf-orange)] opacity-[0.08] blur-[120px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <Reveal>
                <p className="kf-overline mb-5">// PROOF OF PERFORMANCE</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)] max-w-2xl">
                  Numbers we made move.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <Link to="/case-studies" data-testid="cases-cta-all" className="kf-btn-ghost">
                All Case Studies <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article data-testid={`case-card-${i}`} className="relative bg-[var(--kf-bg-card)] border border-[var(--kf-line)] p-8 md:p-10 h-full flex flex-col group hover:border-[var(--kf-orange)] transition-colors duration-500">
                  <span className="kf-corner kf-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="kf-corner kf-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="kf-corner kf-corner-bl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="kf-corner kf-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="kf-overline">{c.tag}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium mt-4 leading-tight text-[var(--kf-ink)] tracking-[-0.02em]">{c.title}</h3>
                  <p className="mt-4 text-[var(--kf-gray)] leading-relaxed text-sm md:text-base">{c.blurb}</p>
                  <div className="mt-auto pt-8 flex items-end justify-between border-t border-[var(--kf-line)]">
                    <div>
                      <div className="font-serif font-medium text-5xl md:text-6xl text-[var(--kf-orange)] leading-none tracking-[-0.04em]">{c.metric}</div>
                      <div className="mt-2 text-[10px] font-mono-acc uppercase tracking-[0.18em] text-[var(--kf-gray)]">{c.metricLabel}</div>
                    </div>
                    <ArrowUpRight size={26} strokeWidth={1.5} className="text-[var(--kf-gray)] group-hover:text-[var(--kf-orange)] transition-colors" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
