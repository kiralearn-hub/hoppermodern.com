import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import PageShell from "../components/PageShell";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const cases = [
  {
    tag: "BFSI · Fortune 500",
    title: "From low cSAT to top-quartile in 9 months.",
    challenge: "A global BFSI leader was burning ₹crores on training with flat customer satisfaction and rising attrition in frontline.",
    intervention: "Full KiraFix™ engagement — Organisational Gap Analysis, ADDIE-based simulation curriculum, manager-cascaded accountability, CEO townhall launch.",
    metrics: [
      { v: "+32%", l: "Customer Satisfaction" },
      { v: "−24%", l: "Frontline Attrition" },
      { v: "9 mo", l: "Time to top-quartile" },
    ],
  },
  {
    tag: "Telecom · India + APAC",
    title: "Employee engagement reborn through modern learning.",
    challenge: "300+ hours of legacy instructor-led training. eSAT scores in single digits. Managers couldn't see the link between L&D and their numbers.",
    intervention: "Migration to GenAI-personalised journeys, 70:20:10 architecture, manager enablement program with 90-day reviews tied to CEO scorecards.",
    metrics: [
      { v: "+41%", l: "Employee eSAT" },
      { v: "3.2×", l: "Course completion" },
      { v: "₹14Cr", l: "Estimated ROI / year" },
    ],
  },
  {
    tag: "BPO · Global",
    title: "L&D from cost-centre to profit-centre.",
    challenge: "CEO of a global BPO had written off L&D as overhead. Skill gaps were the real reason behind missed SLA targets in three regions.",
    intervention: "Fractional CLO engagement — rebuilt the L&D operating model, introduced game-based learning, Six Sigma Performance Consulting on top SLAs.",
    metrics: [
      { v: "+18 pts", l: "SLA performance" },
      { v: "2.4×", l: "Internal mobility" },
      { v: "Profit", l: "L&D status shift" },
    ],
  },
];

const insights = [
  {
    pub: "CEO Insights Magazine",
    title: "Seema Bassi: Helping Organizations Shape the Workforce of the Future Through Strategic Learning & eLearning Solutions",
    blurb: "An exclusive feature on Hopper Modern's positioning, the No.1 challenge CEOs face from L&D, and the playbook behind enterprise turnarounds.",
    href: "#",
    tag: "Founder Interview",
  },
  {
    pub: "Comeback Club · Herkey",
    title: "AI at Work: Using Google Tools to Power Your Career Comeback",
    blurb: "A confidence-building masterclass on AI in the modern workplace — practical tools, not influencer theatre.",
    href: "https://herkey.com",
    tag: "Masterclass",
  },
  {
    pub: "International Women's Day Feature",
    title: "Women Founders Building the Future of Entrepreneurship",
    blurb: "Featured alongside India's leading women founders driving the next wave of enterprise innovation.",
    href: "#",
    tag: "Feature",
  },
  {
    pub: "Hopper Insights",
    title: "Why your L&D function isn't a profit-centre yet (and how to fix it in 90 days).",
    blurb: "A field guide for CEOs and CHROs ready to stop running training-hour theatre. Diagnostic checklist included.",
    href: "#",
    tag: "Field Guide",
  },
];

export default function CaseStudies() {
  return (
    <PageShell>
      {/* HERO */}
      <section data-testid="cases-hero" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-16 md:pb-20">
          <Reveal>
            <p className="kf-overline mb-6">— Proof of work</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[8rem] leading-[0.92] tracking-[-0.02em] max-w-5xl">
              Numbers we <em className="not-italic text-[var(--kf-orange)]">made move.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-10 text-lg md:text-xl font-light text-[var(--kf-gray)] max-w-3xl leading-relaxed">
              Case briefs from KiraFix™ engagements across BFSI, Telecom and BPO. Names are kept confidential at our clients&apos; request, but the metrics are not embellished.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CASES */}
      <section data-testid="cases-list" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pb-24 md:pb-36">
          <StaggerGroup className="space-y-10 md:space-y-14">
            {cases.map((c, i) => (
              <StaggerItem key={c.title}>
                <article data-testid={`case-detail-${i}`} className="bg-[var(--kf-bg-alt)] border-t-2 border-[var(--kf-orange)] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-7">
                    <span className="kf-overline">{c.tag}</span>
                    <h2 className="font-serif text-3xl md:text-5xl font-light mt-5 leading-[1.05]">{c.title}</h2>
                    <div className="mt-8 space-y-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--kf-gray)] mb-2">The Challenge</p>
                        <p className="text-[var(--kf-ink-soft)] leading-relaxed">{c.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-[var(--kf-gray)] mb-2">The Intervention</p>
                        <p className="text-[var(--kf-ink-soft)] leading-relaxed">{c.intervention}</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-5 lg:border-l border-[var(--kf-line-strong)] lg:pl-10 flex flex-col justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[var(--kf-gray)] mb-6">Outcomes</p>
                      <div className="space-y-8">
                        {c.metrics.map((m) => (
                          <div key={m.l} className="border-b border-[var(--kf-line)] pb-5">
                            <div className="font-serif font-light text-5xl md:text-6xl text-[var(--kf-orange)] leading-none">{m.v}</div>
                            <div className="mt-2 text-sm text-[var(--kf-gray)]">{m.l}</div>
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

      {/* INSIGHTS / FEATURES */}
      <section data-testid="cases-insights" className="bg-[var(--kf-bg-alt)] kf-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">— Insights &amp; press</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight">
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

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {insights.map((it, i) => (
              <StaggerItem key={it.title}>
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  data-testid={`insight-card-${i}`}
                  className="block bg-[var(--kf-bg)] p-8 md:p-10 h-full border border-[var(--kf-line)] hover:border-[var(--kf-orange)] transition-colors duration-500 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="kf-overline">{it.tag}</span>
                    <ExternalLink size={16} className="text-[var(--kf-gray)] group-hover:text-[var(--kf-orange)] transition-colors" />
                  </div>
                  <p className="mt-4 text-xs font-mono-acc tracking-[0.18em] uppercase text-[var(--kf-gray)]">{it.pub}</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-normal mt-3 leading-tight">{it.title}</h3>
                  <p className="mt-4 text-[var(--kf-gray)] leading-relaxed">{it.blurb}</p>
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
            <p className="kf-overline mb-6">— Your turn</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-[1.02] tracking-tight">
              Ready to be the next number on this page?
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <Link to="/contact" data-testid="cases-cta-contact" className="kf-btn-primary mt-10">
              Book a Discovery Call <ArrowUpRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
