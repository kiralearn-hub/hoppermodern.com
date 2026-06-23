import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import PageShell from "../components/PageShell";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const cases = [
  {
    tag: "BFSI / FORTUNE 500",
    title: "Underperforming frontline → top-quartile CSAT in 9 months.",
    challenge: "A global BFSI leader was burning ₹crores on training with flat customer satisfaction and rising attrition in frontline. CSAT had been underperforming peer benchmarks for 4 quarters.",
    intervention: "Full KiraFix AI™ Performance Turnaround — Organisational Gap Analysis, ADDIE-based AI simulation curriculum, manager-cascaded accountability, CEO townhall launch.",
    metrics: [
      { v: "+32%", l: "Customer Satisfaction" },
      { v: "−24%", l: "Frontline Attrition" },
      { v: "9 mo", l: "To top-quartile CSAT" },
    ],
  },
  {
    tag: "TELECOM / INDIA + APAC",
    title: "Disengaged unit reborn through AI-based learning.",
    challenge: "300+ hours of legacy instructor-led training. eSAT scores in single digits. Managers couldn't see the link between L&D and their performance numbers.",
    intervention: "Migration to GenAI-personalised journeys, intelligent tutoring, 70:20:10 architecture, manager enablement program with 90-day performance reviews tied to CEO scorecards.",
    metrics: [
      { v: "+41%", l: "Employee eSAT" },
      { v: "3.2×", l: "Course completion" },
      { v: "+18%", l: "Unit productivity" },
    ],
  },
  {
    tag: "BPO / GLOBAL",
    title: "Underperforming SLAs → high-performing function.",
    challenge: "CEO of a global BPO had written off L&D as overhead. Skill gaps were the real reason behind missed SLA targets in three regions. Three quarters of underperformance.",
    intervention: "Fractional CLO engagement — rebuilt the business unit's operating rhythm, introduced AI-based business simulations and game-based learning, Six Sigma Performance Consulting on top SLAs.",
    metrics: [
      { v: "+18 pts", l: "SLA performance" },
      { v: "2.4×", l: "Internal mobility" },
      { v: "Top 5", l: "Regional ranking" },
    ],
  },
];

const insights = [
  {
    pub: "CEO INSIGHTS MAGAZINE",
    title: "Seema Bassi: Helping Organizations Shape the Workforce of the Future Through Strategic Learning & eLearning Solutions",
    blurb: "An exclusive feature on Hopper Modern's positioning, the No.1 challenge CEOs face from L&D, and the playbook behind enterprise performance turnarounds.",
    href: "#",
    tag: "FOUNDER INTERVIEW",
  },
  {
    pub: "COMEBACK CLUB · HERKEY",
    title: "AI at Work: Using Google Tools to Power Your Career Comeback",
    blurb: "A confidence-building masterclass on AI in the modern workplace — practical AI-based learning methodologies, not influencer theatre.",
    href: "https://herkey.com",
    tag: "MASTERCLASS",
  },
  {
    pub: "INTERNATIONAL WOMEN'S DAY",
    title: "Women Founders Building the Future of Entrepreneurship",
    blurb: "Featured alongside India's leading women founders driving the next wave of enterprise innovation.",
    href: "#",
    tag: "FEATURE",
  },
  {
    pub: "HOPPER INSIGHTS",
    title: "Why your unit isn't high-performing yet (and how to fix it in 90 days).",
    blurb: "A field guide for CEOs and CHROs ready to stop running training-hour theatre. Diagnostic checklist included.",
    href: "#",
    tag: "FIELD GUIDE",
  },
];

export default function CaseStudies() {
  return (
    <PageShell>
      {/* HERO */}
      <section data-testid="cases-hero" className="relative overflow-hidden bg-[var(--kf-bg)]">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 md:pt-40 pb-16 md:pb-24">
          <Reveal>
            <p className="kf-overline mb-8 flex items-center gap-3"><span className="kf-dot" />PROOF OF PERFORMANCE</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-[-0.035em] max-w-5xl text-[var(--kf-ink)]">
              Numbers we <span className="text-[var(--kf-orange)]">made move.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-10 text-lg md:text-xl font-light text-[var(--kf-gray)] max-w-3xl leading-relaxed">
              Case briefs from KiraFix AI™ Performance Turnarounds across BFSI, Telecom and BPO. Client names are kept confidential at our partners&apos; request, but the metrics are not embellished.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASES */}
      <section data-testid="cases-list" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-32">
          <StaggerGroup className="space-y-8 md:space-y-10">
            {cases.map((c, i) => (
              <StaggerItem key={c.title}>
                <article data-testid={`case-detail-${i}`} className="bg-[var(--kf-bg-card)] border border-[var(--kf-line-strong)] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10 hover:border-[var(--kf-orange)] transition-colors duration-500 kf-on-dark">
                  <div className="lg:col-span-7">
                    <span className="kf-overline">{c.tag}</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-medium mt-5 leading-[1.05] tracking-[-0.025em] text-[var(--kf-ink)]">{c.title}</h2>
                    <div className="mt-8 space-y-5">
                      <div>
                        <p className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[var(--kf-gray)] mb-2">// THE CHALLENGE</p>
                        <p className="text-[var(--kf-ink-soft)] leading-relaxed text-sm md:text-base">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[var(--kf-gray)] mb-2">// THE INTERVENTION</p>
                        <p className="text-[var(--kf-ink-soft)] leading-relaxed text-sm md:text-base">{c.intervention}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 lg:border-l border-[var(--kf-line-strong)] lg:pl-10 flex flex-col justify-between">
                    <div>
                      <p className="font-mono-acc text-[10px] uppercase tracking-[0.2em] text-[var(--kf-orange)] mb-6">// OUTCOMES</p>
                      <div className="space-y-7">
                        {c.metrics.map((m) => (
                          <div key={m.l} className="border-b border-[var(--kf-line)] pb-5">
                            <div className="font-serif font-medium text-5xl md:text-6xl text-[var(--kf-orange)] leading-none tracking-[-0.04em]">{m.v}</div>
                            <div className="mt-2 text-[10px] font-mono-acc uppercase tracking-[0.18em] text-[var(--kf-gray)]">{m.l}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* INSIGHTS */}
      <section data-testid="cases-insights" className="kf-on-dark relative overflow-hidden">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />
        <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[var(--kf-orange)] opacity-[0.10] blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">// INSIGHTS &amp; PRESS</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                  Featured thinking.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.16}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  Field guides, magazine features and masterclasses from Seema and the Hopper Modern team. Practitioners only — no recycled LinkedIn content.
                </p>
              </Reveal>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--kf-line)]">
            {insights.map((it, i) => (
              <StaggerItem key={it.title}>
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-testid={`insight-card-${i}`}
                  className="block bg-[var(--kf-bg-card)] p-8 md:p-10 h-full hover:bg-[var(--kf-bg-raised)] transition-colors duration-500 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="kf-overline">{it.tag}</span>
                    <ExternalLink size={14} className="text-[var(--kf-gray)] group-hover:text-[var(--kf-orange)] transition-colors" />
                  </div>
                  <p className="mt-4 text-[10px] font-mono-acc tracking-[0.18em] uppercase text-[var(--kf-gray)]">{it.pub}</p>
                  <h3 className="font-serif text-xl md:text-2xl font-medium mt-3 leading-tight tracking-[-0.02em] text-[var(--kf-ink)]">{it.title}</h3>
                  <p className="mt-4 text-[var(--kf-gray)] leading-relaxed text-sm md:text-base">{it.blurb}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--kf-bg)]">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
          <Reveal>
            <p className="kf-overline mb-6">// YOUR TURN</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] text-[var(--kf-ink)]">
              Ready to be the next number on this page?
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <Link to="/contact" data-testid="cases-cta-contact" className="kf-btn-primary mt-10">
              Book a Discovery Call <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
