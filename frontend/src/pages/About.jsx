import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin } from "lucide-react";
import PageShell from "../components/PageShell";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const SEEMA = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/t3634s6x_SeemaBassi.jpeg";
const MASTERCLASS = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/061l3ufb_Masterclass1.jpg";
const IWD = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/i043284t_1772950700896.jpeg";

const timeline = [
  { year: "Aviva Life Insurance", title: "VP — Organizational Development & Corporate Learning", body: "Former VP leading OD and enterprise-wide corporate learning across the insurance business." },
  { year: "Aegis BPO", title: "VP — Training", body: "Held VP of Training, scaling learning operations across BPO delivery centers." },
  { year: "Rio Tinto", title: "APAC Learning Advisor", body: "Served as Learning Advisor across the APAC region for the global mining and metals leader." },
  { year: "GE Capital · Genpact", title: "Learning Leader", body: "Drove the Learning function inside GE Capital (Genpact), accelerating the move to scalable eLearning." },
  { year: "2020", title: "Launched Hopper Modern AI Performance Solutions", body: "Founded the firm as a Fractional CLO practice for organizations needing senior expertise without full-time headcount." },
  { year: "2023", title: "Top 10 CLO of the Year", body: "Recognised by CEO Insights for measurable enterprise performance turnarounds." },
];

const trackRecord = [
  {
    label: "Strategic Leadership",
    body: "Former VP of OD & Corporate Learning at Aviva Life Insurance and VP of Training at Aegis BPO.",
  },
  {
    label: "Global Execution",
    body: "Served as APAC Learning Advisor for Rio Tinto and Learning Leader at GE Capital (Genpact). Navigated APAC, US and Europe markets.",
  },
  {
    label: "Operational Scale",
    body: "Held P&L responsibility and managed teams of up to 100 professionals across multiple cost centers.",
  },
  {
    label: "Innovation",
    body: "Certified in EdTech (SDSU) and PMP, currently integrating GenAI into instructional design for modern workforces.",
  },
];

const howIHelp = [
  {
    label: "L&D Turnarounds",
    body: "Auditing and restructuring underperforming training functions.",
  },
  {
    label: "Scalable Content Strategy",
    body: "Moving from Instructor-Led Training to eLearning / GenAI-driven models — a shift I successfully led inside Fortune 500 enterprises.",
  },
  {
    label: "Performance Consulting",
    body: "Using Six Sigma and Gap Analysis to solve actual business problems, not just 'check the box' on training hours.",
  },
];

const credentials = [
  "Certified Independent Director",
  "EdTech — SDSU",
  "PMP Certified",
  "Six Sigma Practitioner",
  "IIMB Women Start-up Program",
  "CEO Insights Magazine",
  "Top 10 CLO of 2023",
  "30+ years in Learning & OD",
];

export default function About() {
  return (
    <PageShell>
      {/* HERO */}
      <section data-testid="about-hero" className="relative overflow-hidden bg-[var(--kf-bg)]">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kf-overline mb-8 flex items-center gap-3"><span className="kf-dot" />THE FOUNDER</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.92] tracking-[-0.035em] text-[var(--kf-ink)]">
                Seema <span className="text-[var(--kf-orange)]">Bassi.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 font-mono-acc text-[11px] tracking-[0.22em] uppercase text-[var(--kf-gray)]">
                FOUNDER · CHIEF LEARNING OFFICER · HOPPER MODERN
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 text-lg md:text-xl font-light text-[var(--kf-gray)] leading-relaxed max-w-2xl">
                A global L&amp;D leader with 30 years of corporate experience and 22 years inside Fortune 500 learning &amp; organisational development. Recognised among the Top 10 Chief Learning Officers of 2023 by CEO Insights.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="kf-img-frame aspect-[4/5] relative kf-img-grayscale">
                <img src={SEEMA} alt="Seema Bassi" style={{ objectPosition: '50% 88%', transform: 'scale(1.18)', transformOrigin: 'center 70%' }} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section data-testid="about-philosophy" className="kf-on-dark relative overflow-hidden">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--kf-orange)] opacity-[0.10] blur-[140px] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <Reveal>
            <p className="kf-overline mb-8">// IN HER OWN WORDS</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] mb-12 text-[var(--kf-ink)]">
              I bridge the gap between Learning and <span className="text-[var(--kf-orange)]">Organizational Performance.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="kf-dropcap font-serif text-xl md:text-2xl leading-relaxed text-[var(--kf-ink-soft)]">
              My name is Seema Bassi. With 30 years of experience transforming workforce capability as a function head and business leader, I bridge the gap between Learning and Organizational Performance. Having held P&amp;L responsibility and managed teams of up to 100 professionals, I understand that Learning &amp; Development is not a cost center — it is a competitive advantage.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-[var(--kf-gray)]">
              I am a <span className="text-[var(--kf-ink)] font-semibold">Learning Leader &amp; Organizational Strategist</span> who has scaled functions for Fortune 500 giants and navigated complex global markets — APAC, US and Europe. My background combines the agility of a Founder with the operational discipline of a corporate veteran.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--kf-gray)]">
              Through Hopper Modern AI Performance Solutions, I act as a <em>&ldquo;Fractional CLO&rdquo;</em> for organizations that need high-level expertise without the full-time headcount — building the system, mentoring the team, moving the performance numbers, and stepping out when the unit runs itself.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TRACK RECORD */}
      <section data-testid="about-track-record" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">// MY TRACK RECORD</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                  The receipts.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.16}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  Four pillars under three decades of work — Strategic Leadership, Global Execution, Operational Scale and Innovation.
                </p>
              </Reveal>
            </div>
          </div>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--kf-line-strong)]">
            {trackRecord.map((t, i) => (
              <StaggerItem key={t.label}>
                <div data-testid={`track-${i}`} className="bg-[var(--kf-bg)] p-8 md:p-10 h-full">
                  <p className="font-mono-acc text-[10px] uppercase tracking-[0.22em] text-[var(--kf-ink)]">{String(i + 1).padStart(2, "0")} // {t.label}</p>
                  <p className="font-serif text-2xl md:text-3xl font-medium mt-4 leading-tight text-[var(--kf-ink)] tracking-[-0.02em]">{t.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* HOW I HELP */}
      <section data-testid="about-how-i-help" className="kf-on-dark relative overflow-hidden">
        <div className="absolute inset-0 kf-grid-bg opacity-100 pointer-events-none" />
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full bg-[var(--kf-orange)] opacity-[0.08] blur-[140px] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">// HOW I HELP</p>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                  Advisory · eLearning · AI programs.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-6">
              <Reveal delay={0.16}>
                <p className="text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                  Through Hopper Modern AI Performance Solutions, I act as a <em>&ldquo;Fractional CLO&rdquo;</em> for organizations that need high-level expertise without the full-time headcount. I specialize in:
                </p>
              </Reveal>
            </div>
          </div>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--kf-line)]">
            {howIHelp.map((h, i) => (
              <StaggerItem key={h.label}>
                <div data-testid={`help-${i}`} className="bg-[var(--kf-bg-card)] p-8 md:p-10 h-full">
                  <p className="font-mono-acc text-[10px] uppercase tracking-[0.22em] text-[var(--kf-orange)]">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium mt-4 leading-tight text-[var(--kf-ink)] tracking-[-0.02em]">{h.label}</h3>
                  <p className="mt-4 text-[var(--kf-gray)] leading-relaxed">{h.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* TIMELINE */}
      <section data-testid="about-timeline" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="kf-overline mb-6">// CAREER ARC</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[0.98] tracking-[-0.03em] text-[var(--kf-ink)]">
                  Three decades.<br />The roles.
                </h2>
              </Reveal>
            </div>
          </div>
          <StaggerGroup className="space-y-0">
            {timeline.map((t, i) => (
              <StaggerItem key={i}>
                <div data-testid={`timeline-${i}`} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-t border-[var(--kf-line)] hover:bg-[var(--kf-bg-deep)] transition-colors duration-300 px-3 -mx-3 group">
                  <div className="md:col-span-3">
                    <div className="font-mono-acc text-[11px] tracking-[0.18em] uppercase text-[var(--kf-orange)]">{t.year}</div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-xl md:text-2xl font-medium leading-tight text-[var(--kf-ink)] tracking-[-0.02em]">{t.title}</h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[var(--kf-gray)] leading-relaxed text-sm md:text-base">{t.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section data-testid="about-credentials" className="kf-on-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="kf-overline mb-6">// CREDENTIALS &amp; AFFILIATIONS</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-medium text-4xl md:text-5xl mb-14 max-w-3xl leading-tight tracking-[-0.03em] text-[var(--kf-ink)]">
              The receipts behind the work.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--kf-line)]">
            {credentials.map((c, i) => (
              <StaggerItem key={c}>
                <div data-testid={`credential-${i}`} className="bg-[var(--kf-bg-card)] p-6 md:p-8 h-full flex items-end min-h-[130px] hover:bg-[var(--kf-bg-raised)] transition-colors">
                  <p className="font-serif text-lg md:text-xl leading-tight text-[var(--kf-ink)] tracking-[-0.02em]">{c}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MEDIA */}
      <section data-testid="about-media" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="kf-overline mb-6">// IN THE PRESS &amp; ON STAGE</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-medium text-4xl md:text-5xl mb-14 max-w-3xl leading-tight tracking-[-0.03em] text-[var(--kf-ink)]">
              Sharing the playbook with the world.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <Reveal>
              <div className="kf-img-frame aspect-[4/3]">
                <img src={MASTERCLASS} alt="AI Masterclass" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl mt-6 leading-tight text-[var(--kf-ink)] tracking-[-0.02em] font-medium">AI &amp; You: Staying Relevant in the Future Workplace</h3>
              <p className="mt-3 text-[var(--kf-gray)] text-sm md:text-base">Comeback Club Masterclass — AI at Work, Using Google Tools to Power Your Career Comeback.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="kf-img-frame aspect-[4/3]">
                <img src={IWD} alt="Women Founders Feature" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl mt-6 leading-tight text-[var(--kf-ink)] tracking-[-0.02em] font-medium">Women Founders Building the Future of Entrepreneurship</h3>
              <p className="mt-3 text-[var(--kf-gray)] text-sm md:text-base">International Women&apos;s Day Special — featured among India&apos;s leading women founders.</p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-16 flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/seemabassi-hopper" target="_blank" rel="noreferrer" data-testid="about-linkedin-btn" className="kf-btn-ghost">
                <Linkedin size={14} /> Connect on LinkedIn
              </a>
              <Link to="/contact" data-testid="about-contact-btn" className="kf-btn-primary">
                Work with Seema <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
