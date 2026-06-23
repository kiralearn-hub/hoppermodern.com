import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import PageShell from "../components/PageShell";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const phases = [
  {
    code: "PHASE_01",
    title: "Diagnose",
    body: "Organisational Gap Analysis grounded in Six Sigma + Research + Performance Improvement tools. We sit with the CEO and CXOs to find why the unit is missing CSAT / eSAT / productivity — not where the org chart says it should be.",
    bullets: ["Stakeholder interviews", "CSAT / eSAT diagnostics", "L&D maturity audit", "Performance baseline"],
  },
  {
    code: "PHASE_02",
    title: "Design",
    body: "A Strategic Learning Framework aligned to performance goals — built on AI-based learning methodologies. GenAI-personalised journeys, intelligent tutoring, business simulations, game-based learning and the 70:20:10 architecture, engineered on ADDIE.",
    bullets: ["AI-personalised journeys", "Intelligent tutoring", "Business simulations", "Manager enablement"],
  },
  {
    code: "PHASE_03",
    title: "Deploy",
    body: "The CEO kicks off the launch with a townhall. Leaders cascade to managers. Managers commit to 90-day performance reviews. The Change Acceleration Process keeps the mindset shift moving top-down.",
    bullets: ["CEO townhall launch", "Manager accountability", "Change Acceleration", "Communication cadence"],
  },
  {
    code: "PHASE_04",
    title: "Compound",
    body: "Real-time performance dashboards. CSAT, eSAT and productivity tied to learning actions. We hand over to your team — or stay on as Fractional CLO for 12–18 months until the system fully owns itself.",
    bullets: ["Performance dashboards", "Quarterly business reviews", "Knowledge transfer", "Exit-ready handoff"],
  },
];

const services = [
  {
    title: "Fractional CLO",
    body: "Senior leadership embedded in your underperforming unit on a 12 to 18-month engagement. We rebuild how the business unit performs, mentor your senior bench, then exit when the CSAT / eSAT / productivity numbers are flowing.",
  },
  {
    title: "Performance Turnaround",
    body: "End-to-end KiraFix™ engagement for underperforming units. Diagnose. Redesign. Deploy AI-based learning. Cascade accountability. Measure performance lift quarter-on-quarter.",
  },
  {
    title: "AI-Based Modern Learning",
    body: "Move from instructor-led training to GenAI-personalised journeys, intelligent tutoring, business simulations and game-based learning. The shift Seema led at HCL and GE — adapted to your stack.",
  },
  {
    title: "Performance Consulting",
    body: "Six Sigma + Gap Analysis applied to the people problem. We solve the real performance issue behind the symptoms — never 'check the box' on training hours.",
  },
  {
    title: "GenAI in Learning",
    body: "Embed AI inside the business unit's performance system: skill-gap detection, adaptive content sequencing, real-time coaching nudges, manager risk dashboards on CSAT, eSAT, SLAs.",
  },
  {
    title: "Change Acceleration",
    body: "Townhall launches, leader cascades, manager accountability rituals. The mindset shift that makes AI-based learning actually stick — and the performance numbers move.",
  },
];

function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div data-testid="services-accordion" className="border-t border-[var(--kf-line-strong)]">
      {items.map((it, i) => {
        const isOpen = open === i;
        return (
          <div key={it.title} className="border-b border-[var(--kf-line-strong)]">
            <button
              data-testid={`service-toggle-${i}`}
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full py-7 md:py-9 flex items-center justify-between text-left gap-6 group"
            >
              <div className="flex items-baseline gap-6 md:gap-8">
                <span className="font-mono-acc text-[10px] tracking-[0.22em] text-[var(--kf-gray)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`font-serif text-2xl md:text-4xl font-medium leading-tight transition-colors tracking-[-0.02em] ${isOpen ? "text-[var(--kf-orange)]" : "text-[var(--kf-ink)] group-hover:text-[var(--kf-orange)]"}`}>{it.title}</h3>
              </div>
              <div className={`shrink-0 w-9 h-9 rounded-sm border flex items-center justify-center transition-colors ${isOpen ? "border-[var(--kf-orange)] text-[var(--kf-orange)] bg-[rgba(255,87,34,0.12)]" : "border-[var(--kf-line-strong)] text-[var(--kf-ink)]"}`}>
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </div>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="md:pl-[4.5rem] max-w-3xl">
                  <p className="text-[var(--kf-gray)] text-base md:text-lg leading-relaxed">{it.body}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function KiraFix() {
  return (
    <PageShell>
      {/* HERO */}
      <section data-testid="kirafix-hero" className="relative overflow-hidden bg-[var(--kf-bg)]">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <Reveal>
            <p className="kf-overline mb-8 flex items-center gap-3"><span className="kf-dot" />THE METHODOLOGY</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] tracking-[-0.035em] max-w-5xl text-[var(--kf-ink)]">
              KiraFix<sup className="text-2xl md:text-4xl ml-1">™</sup>
              <br />
              <span className="text-[var(--kf-gray)]">Innovation.</span> Modern Learning. <span className="italic">AI.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-10 text-lg md:text-xl font-light text-[var(--kf-gray)] max-w-3xl leading-relaxed">
              The trademarked Performance Turnaround framework. A four-phase approach built from 25+ years inside Fortune 500 BFSI, BPO and Telecom turnarounds — now powered by AI to make underperforming business units perform.
            </p>
          </Reveal>
        </div>
      </section>

      {/* PHASES */}
      <section data-testid="kirafix-phases" className="kf-on-dark relative overflow-hidden">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />
        <div className="absolute -bottom-32 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--kf-orange)] opacity-[0.10] blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">// THE 4 PHASES</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                  Diagnose. Design.<br />Deploy. <span className="text-[var(--kf-orange)]">Compound.</span>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.18}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  Most consulting engagements end at deployment. KiraFix™ doesn&apos;t. We measure the business unit&apos;s performance lift, hand it over running self-sufficiently, and stay accountable for the CSAT, eSAT and productivity numbers long after the kick-off slide deck has gone cold.
                </p>
              </Reveal>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--kf-line)]">
            {phases.map((p, i) => (
              <StaggerItem key={p.code}>
                <article data-testid={`phase-${i}`} className="bg-[var(--kf-bg-card)] p-8 md:p-12 h-full relative overflow-hidden group hover:bg-[var(--kf-bg-raised)] transition-colors duration-500">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono-acc text-[10px] tracking-[0.2em] uppercase text-[var(--kf-orange)]">{p.code}</span>
                    <span className="font-serif font-medium text-6xl text-[var(--kf-ink)] opacity-[0.06] leading-none tracking-[-0.04em]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-5xl font-medium mt-3 text-[var(--kf-ink)] tracking-[-0.025em]">{p.title}</h3>
                  <p className="mt-5 text-[var(--kf-gray)] leading-relaxed text-sm md:text-base">{p.body}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[var(--kf-ink-soft)]">
                        <span className="mt-1.5 kf-dot" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* SERVICES */}
      <section data-testid="kirafix-services" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">// SOLUTIONS MENU</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                  How we engage.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.18}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  Pick what you need. We can run the full KiraFix™ Performance Turnaround, or plug into a single capability where the gap is most acute. Every engagement is led personally by Seema and her senior L&amp;D bench.
                </p>
              </Reveal>
            </div>
          </div>
          <Accordion items={services} />
        </div>
      </section>

      {/* DELIVERABLES */}
      <section data-testid="kirafix-deliverables" className="kf-on-dark relative overflow-hidden">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[var(--kf-orange)] opacity-[0.08] blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kf-overline mb-6">// WHAT YOU WALK AWAY WITH</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif font-medium text-4xl md:text-5xl leading-tight tracking-[-0.03em] mb-8 text-[var(--kf-ink)]">
                A high-performing function that runs itself.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Link to="/contact" data-testid="kirafix-cta-contact" className="kf-btn-primary mt-2">
                Map your turnaround <ArrowUpRight size={14} />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <ul className="space-y-1">
              {[
                "A measurable lift in CSAT, eSAT and productivity KPIs",
                "An operating rhythm the business unit can run independently",
                "AI-based modern learning stack: ADDIE + 70:20:10 + GenAI",
                "Manager-led accountability rituals that don't die in month three",
                "Quarterly performance dashboards leadership actually opens",
                "A mentored senior L&D bench, ready to lead post-handoff",
              ].map((d, i) => (
                <Reveal key={d} delay={0.05 + i * 0.04}>
                  <li className="flex items-start gap-5 py-5 border-b border-[var(--kf-line)]">
                    <span className="font-mono-acc text-[11px] text-[var(--kf-orange)] mt-1 shrink-0 tracking-[0.1em]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-base md:text-lg text-[var(--kf-ink-soft)]">{d}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
