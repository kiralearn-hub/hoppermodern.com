import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Sparkles, Brain, Lightbulb } from "lucide-react";
import PageShell from "../components/PageShell";
import CredibilityMarquee from "../components/CredibilityMarquee";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const SEEMA = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/t3634s6x_SeemaBassi.jpeg";
const HERO_BG = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzl8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBsZWFkZXJzaGlwJTIwbWVldGluZ3xlbnwwfHx8fDE3ODIyNDIzMjZ8MA&ixlib=rb-4.1.0&q=85";

const pillars = [
  {
    num: "01",
    title: "Innovation",
    icon: Lightbulb,
    body:
      "We don't 'check the box' on training hours. We use Six Sigma, Gap Analysis, and Organizational Diagnostics to solve the actual business problem behind your eSAT and cSAT decline.",
  },
  {
    num: "02",
    title: "Modern Learning",
    icon: Sparkles,
    body:
      "Shift your workforce from instructor-led inertia to engaging eLearning, game-based learning, and the 70:20:10 model. Built on the ADDIE framework, measured by Learning ROI.",
  },
  {
    num: "03",
    title: "AI",
    icon: Brain,
    body:
      "GenAI-driven instructional design, intelligent learning paths, and AI workplace masterclasses. Modern learners deserve modern infrastructure — and so do your CEOs.",
  },
];

const stats = [
  { value: "30+", label: "Years global L&D leadership" },
  { value: "25+", label: "Fortune 500 transformations" },
  { value: "Top 10", label: "CLO of 2023" },
  { value: "5 cost centers", label: "Scaled at HCL alone" },
];

const cases = [
  {
    tag: "BFSI · Fortune 500",
    title: "From low cSAT to top-quartile in 9 months.",
    metric: "+32%",
    metricLabel: "Customer Satisfaction",
    blurb: "Re-engineered the L&D operating model, rolled out a competency-based simulation curriculum, and embedded measurement into every learning intervention.",
  },
  {
    tag: "Telecom · India + APAC",
    title: "Employee engagement reborn through modern learning.",
    metric: "+41%",
    metricLabel: "Employee eSAT",
    blurb: "Replaced 300+ hours of legacy ILT with bite-sized, GenAI-personalised journeys. Manager accountability driven by townhall cascades from the CEO.",
  },
];

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
      <section
        data-testid="home-hero"
        className="relative overflow-hidden bg-[var(--kf-bg)]"
      >
        <div className="absolute inset-0 -z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--kf-bg)] via-[var(--kf-bg)]/85 to-[var(--kf-bg)]" />
          <img
            src={HERO_BG}
            alt=""
            className="w-full h-full object-cover opacity-[0.13]"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-40 pb-24 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-9">
              <Reveal>
                <p className="kf-overline mb-8">— KiraFix™ · Enterprise Performance Turnaround</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-[-0.02em] text-[var(--kf-ink)]">
                  Transforming <em className="not-italic text-[var(--kf-orange)]">underperforming</em> enterprises into{" "}
                  <span className="italic font-normal">high-performing</span> ones.
                </h1>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-10 text-lg md:text-xl font-light leading-relaxed text-[var(--kf-gray)] max-w-2xl">
                  Built on three decades inside GE, Aviva, Rio Tinto and HCL. Powered by Innovation, Modern Learning &amp; AI. Designed for CEOs who refuse to accept a low-impact L&amp;D function.
                </p>
              </Reveal>
              <Reveal delay={0.28}>
                <div className="mt-12 flex flex-wrap items-center gap-4">
                  <Link to="/contact" data-testid="hero-cta-primary" className="kf-btn-primary">
                    Book a Discovery Call <ArrowUpRight size={16} />
                  </Link>
                  <Link to="/kirafix" data-testid="hero-cta-secondary" className="kf-btn-ghost">
                    Explore the KiraFix™ Model <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-3 hidden lg:block">
              <Reveal delay={0.35}>
                <div className="kf-vertical">
                  Innovation · Modern Learning · AI
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
                <div className="font-serif font-light text-5xl md:text-6xl text-[var(--kf-ink)] tracking-tight leading-none">{s.value}</div>
                <div className="mt-3 text-sm text-[var(--kf-gray)] max-w-[180px]">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* KIRAFIX PILLARS */}
      <section data-testid="home-pillars" className="bg-[var(--kf-bg-alt)] kf-grain">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">— The KiraFix™ Model</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight">
                  Three pillars. <br />
                  <em className="not-italic text-[var(--kf-orange)]">One</em> turnaround.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.2}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  KiraFix™ is the framework Seema Bassi has refined over 25 years of Fortune 500 transformations. It diagnoses the real performance gap, redesigns the learning operating system, and embeds AI so the gains compound — not evaporate after the rollout.
                </p>
              </Reveal>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((p) => {
              const Icon = p.icon;
              return (
                <StaggerItem key={p.num}>
                  <div data-testid={`pillar-${p.num}`} className="relative bg-[var(--kf-bg)] border border-[var(--kf-line)] p-8 md:p-10 h-full overflow-hidden group hover:border-[var(--kf-orange)] transition-colors duration-500">
                    <div className="absolute -top-6 -right-4 kf-pillar-num pointer-events-none">{p.num}</div>
                    <Icon size={28} strokeWidth={1.25} className="text-[var(--kf-orange)] relative" />
                    <h3 className="font-serif text-3xl md:text-4xl font-normal mt-6 relative">{p.title}</h3>
                    <p className="mt-4 text-[var(--kf-gray)] relative leading-relaxed">{p.body}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* FOUNDER SPOTLIGHT */}
      <section data-testid="home-founder" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="kf-img-frame aspect-[4/5] relative">
                <img src={SEEMA} alt="Seema Bassi — Founder &amp; Chief Learning Officer" />
                <div className="absolute bottom-5 left-5 bg-[var(--kf-orange)] text-white px-3 py-1 text-[11px] uppercase tracking-[0.18em] font-semibold">
                  Top 10 CLO &apos;23
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kf-overline mb-6">— Meet the Founder</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight">
                Seema Bassi
              </h2>
              <p className="mt-2 text-[var(--kf-gray)] font-mono-acc text-xs tracking-[0.18em] uppercase">Founder &amp; Chief Learning Officer · Hopper Modern</p>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 font-serif text-2xl md:text-3xl font-light italic leading-snug text-[var(--kf-ink)]">
                &ldquo;Business impact from L&amp;D is the No.1 challenge for CEOs globally. KiraFix™ exists to close that gap — permanently.&rdquo;
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="mt-8 text-[var(--kf-gray)] leading-relaxed text-lg max-w-2xl">
                Certified Independent Director · 30+ years in L&amp;D · Ex-VP at GE, Aviva &amp; Rio Tinto · DGM HCL (5 cost centers, 100-strong team) · EdTech, SDSU · PMP · IIMB Women Start-up Program · Fractional CLO to organizations who need senior expertise without the headcount.
              </p>
            </Reveal>
            <Reveal delay={0.34}>
              <Link to="/about" data-testid="founder-cta-about" className="inline-flex items-center gap-2 mt-8 kf-link text-base font-medium">
                Read the full story <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section data-testid="home-cases" className="bg-[var(--kf-bg-alt)] kf-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <Reveal>
                <p className="kf-overline mb-5">— Proven transformation</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight max-w-2xl">
                  Numbers we made move.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <Link to="/case-studies" data-testid="cases-cta-all" className="kf-btn-ghost">
                All Case Studies <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {cases.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article data-testid={`case-card-${i}`} className="bg-[var(--kf-bg)] border-t-2 border-[var(--kf-orange)] p-8 md:p-10 h-full flex flex-col">
                  <span className="kf-overline text-[var(--kf-gray)] !text-[var(--kf-gray)]">{c.tag}</span>
                  <h3 className="font-serif text-3xl md:text-4xl font-normal mt-4 leading-tight">{c.title}</h3>
                  <p className="mt-4 text-[var(--kf-gray)] leading-relaxed">{c.blurb}</p>
                  <div className="mt-auto pt-8 flex items-end justify-between border-t border-[var(--kf-line)]">
                    <div>
                      <div className="font-serif font-light text-6xl text-[var(--kf-orange)] leading-none">{c.metric}</div>
                      <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[var(--kf-gray)]">{c.metricLabel}</div>
                    </div>
                    <ArrowUpRight size={28} strokeWidth={1.25} className="text-[var(--kf-ink)]" />
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
