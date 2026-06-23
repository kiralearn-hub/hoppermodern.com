import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, Plus, Minus } from "lucide-react";
import PageShell from "../components/PageShell";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const AI_IMG = "https://images.unsplash.com/photo-1683064325134-3acfdef9c6d7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzR8MHwxfHNlYXJjaHwzfHxhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBpbm5vdmF0aW9uJTIwcGF0dGVybnxlbnwwfHx8fDE3ODIyNDIzMjV8MA&ixlib=rb-4.1.0&q=85";
const OFFICE = "https://images.unsplash.com/photo-1724906019868-93ad2c79414f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwwfHx8fDE3ODIyNDIzMjV8MA&ixlib=rb-4.1.0&q=85";

const phases = [
  {
    code: "Phase 01",
    title: "Diagnose",
    body: "An Organisational Gap Analysis grounded in Six Sigma + Research + Performance Improvement tools. We sit with the CEO and CXOs to find where the L&D function is actually leaking value — not where the org chart says it should be.",
    bullets: ["Stakeholder interviews", "eSAT / cSAT diagnostics", "L&D maturity audit", "ROI baseline"],
  },
  {
    code: "Phase 02",
    title: "Design",
    body: "A Strategic Learning Framework aligned to organisational goals. Innovative modern eLearning built on the ADDIE model. 70:20:10 architecture. Game-based learning, high-end business simulations, GenAI-personalised journeys.",
    bullets: ["ADDIE-based curriculum", "Modern learning UX", "GenAI instructional design", "Manager enablement"],
  },
  {
    code: "Phase 03",
    title: "Deploy & Cascade",
    body: "The CEO kicks off the launch with a townhall. Leaders cascade to managers. Managers commit to 90-day result reviews. Change Acceleration Process keeps the mindset shift moving from the top down.",
    bullets: ["CEO townhall launch", "Manager accountability", "Change Acceleration", "Communication cadence"],
  },
  {
    code: "Phase 04",
    title: "Measure & Compound",
    body: "Org-wide measurement of Learning ROI. Bottom-line impact tied to L&D actions. Then we hand over to your team — or stay on as Fractional CLO for 12–18 months until the system fully owns itself.",
    bullets: ["Learning ROI dashboards", "Quarterly business reviews", "Knowledge transfer", "Exit-ready handoff"],
  },
];

const services = [
  {
    title: "Fractional CLO",
    body: "High-level CLO expertise on a 12 to 18-month engagement. We build (or rebuild) the L&D function, mentor your senior L&D leaders, then exit when the system is operational and ROI is flowing.",
  },
  {
    title: "L&D Turnaround",
    body: "Audit and restructure underperforming training functions. End the 'training-hours theatre.' Turn L&D from cost-centre into profit-centre.",
  },
  {
    title: "Scalable Content Strategy",
    body: "Move from instructor-led training to eLearning, GenAI-driven personalisation, business simulations and game-based learning. The shift Seema led at HCL and GE — adapted to your stack.",
  },
  {
    title: "Performance Consulting",
    body: "Six Sigma + Gap Analysis applied to the people problem. We solve the real business issue behind the symptoms, not 'check the box' on training hours.",
  },
  {
    title: "GenAI in Learning",
    body: "Integrate GenAI into instructional design and modern workforce upskilling. Practical AI masterclasses tailored to enterprise, not influencer hype.",
  },
  {
    title: "Change Acceleration",
    body: "Townhall launches, leader cascades, manager accountability. The mindset shift that makes the training stick — and the numbers move.",
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
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full py-7 md:py-9 flex items-center justify-between text-left gap-6 group"
            >
              <div className="flex items-baseline gap-6 md:gap-8">
                <span className="font-mono-acc text-xs tracking-[0.2em] text-[var(--kf-gray)]">{String(i + 1).padStart(2, "0")}</span>
                <h3 className={`font-serif text-3xl md:text-5xl font-light leading-tight transition-colors ${isOpen ? "text-[var(--kf-orange)]" : "text-[var(--kf-ink)] group-hover:text-[var(--kf-orange)]"}`}>{it.title}</h3>
              </div>
              <div className={`shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${isOpen ? "border-[var(--kf-orange)] text-[var(--kf-orange)]" : "border-[var(--kf-line-strong)] text-[var(--kf-ink)]"}`}>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <div
              className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <div className="md:pl-[5.5rem] max-w-3xl">
                  <p className="text-[var(--kf-gray)] text-lg leading-relaxed">{it.body}</p>
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
      <section data-testid="kirafix-hero" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28">
          <Reveal>
            <p className="kf-overline mb-6">— The Methodology</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[8rem] leading-[0.92] tracking-[-0.02em] max-w-5xl">
              KiraFix<sup className="text-2xl md:text-4xl ml-1">™</sup>
              <br />
              Innovation. <em className="not-italic">Modern Learning.</em> <span className="text-[var(--kf-orange)]">AI.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-10 text-lg md:text-xl font-light text-[var(--kf-gray)] max-w-3xl leading-relaxed">
              The trademarked enterprise performance turnaround model. A four-phase operating system built from 25+ years inside Fortune 500 BFSI, BPO, and Telecom turnarounds — and now powered by GenAI.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BIG IMAGE BREAK */}
      <section className="bg-[var(--kf-bg)]">
        <div className="max-w-[100rem] mx-auto px-6 md:px-10">
          <Reveal>
            <div className="kf-img-frame aspect-[16/7] md:aspect-[21/8]">
              <img src={AI_IMG} alt="Abstract technology &amp; innovation" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* THE 4 PHASES */}
      <section data-testid="kirafix-phases" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">— The 4 phases</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight">
                  Diagnose. Design.<br />Deploy. <em className="not-italic text-[var(--kf-orange)]">Compound.</em>
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.18}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  Most consulting engagements end at deployment. KiraFix™ doesn&apos;t. We measure the business impact, hand over a self-sustaining L&amp;D operating system, and stay accountable for the ROI — long after the kick-off slide deck has gone cold.
                </p>
              </Reveal>
            </div>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {phases.map((p, i) => (
              <StaggerItem key={p.code}>
                <article data-testid={`phase-${i}`} className="bg-[var(--kf-bg-alt)] p-8 md:p-12 h-full relative overflow-hidden border border-[var(--kf-line)] hover:border-[var(--kf-orange)] transition-colors duration-500">
                  <div className="flex items-baseline justify-between">
                    <span className="font-mono-acc text-xs tracking-[0.2em] uppercase text-[var(--kf-orange)]">{p.code}</span>
                    <span className="font-serif font-light text-7xl text-[var(--kf-line)] leading-none">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl font-normal mt-2">{p.title}</h3>
                  <p className="mt-5 text-[var(--kf-gray)] leading-relaxed">{p.body}</p>
                  <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-[var(--kf-ink-soft)]">
                        <span className="mt-2 w-1 h-1 bg-[var(--kf-orange)] shrink-0" />
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

      {/* SERVICES ACCORDION */}
      <section data-testid="kirafix-services" className="bg-[var(--kf-bg-alt)] kf-grain">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">— Solutions menu</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight">
                  How we engage.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.18}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  Pick what you need. We can run the full KiraFix™ turnaround, or plug into a single capability where the gap is most acute. Every engagement is led personally by Seema and her senior L&amp;D bench.
                </p>
              </Reveal>
            </div>
          </div>
          <Accordion items={services} />
        </div>
      </section>

      {/* DELIVERABLES SPLIT */}
      <section data-testid="kirafix-deliverables" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="kf-img-frame aspect-[4/3]">
                <img src={OFFICE} alt="Modern corporate office interior" />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal>
              <p className="kf-overline mb-6">— What you walk away with</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="font-serif font-light text-4xl md:text-5xl leading-tight tracking-tight mb-8">
                A learning function that pays for itself — and then some.
              </h2>
            </Reveal>
            <ul className="space-y-5">
              {[
                "A measurable lift in eSAT, cSAT and business KPIs",
                "An L&D operating model your team can run independently",
                "A modern learning stack: ADDIE + 70:20:10 + GenAI",
                "Manager-led accountability rituals that don't die in month three",
                "Quarterly Learning ROI dashboards leadership actually opens",
                "A mentored senior L&D bench, ready to lead post-handoff",
              ].map((d, i) => (
                <Reveal key={d} delay={0.1 + i * 0.05}>
                  <li className="flex items-start gap-4 py-4 border-b border-[var(--kf-line)]">
                    <span className="font-mono-acc text-xs text-[var(--kf-orange)] mt-1">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-lg text-[var(--kf-ink-soft)]">{d}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={0.4}>
              <Link to="/contact" data-testid="kirafix-cta-contact" className="kf-btn-primary mt-10">
                Map your turnaround <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
