import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin } from "lucide-react";
import PageShell from "../components/PageShell";
import { Reveal, StaggerGroup, StaggerItem } from "../components/Reveal";

const SEEMA = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/t3634s6x_SeemaBassi.jpeg";
const MASTERCLASS = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/061l3ufb_Masterclass1.jpg";
const IWD = "https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/i043284t_1772950700896.jpeg";

const timeline = [
  { year: "1994", title: "Career launched in corporate L&D", body: "Began a 30-year journey shaping learning across BFSI, BPO, Telecom." },
  { year: "HCL", title: "DGM — 5 cost centers, 100-person team", body: "Led the shift from Instructor-Led Training to scalable eLearning at enterprise scale." },
  { year: "GE · Aviva · Rio Tinto", title: "VP & Learning Leader", body: "Fortune 500 L&D leadership across three global icons. Drove performance turnarounds, modern learning rollouts, change acceleration." },
  { year: "2020", title: "Founded Hopper Modern", body: "Vision: turn underperforming units into high-performing, high-CSAT functions via AI-based modern learning." },
  { year: "2023", title: "Top 10 CLO of the Year", body: "Recognised by CEO Insights for measurable enterprise performance turnarounds." },
  { year: "2024+", title: "KiraFix™ launched", body: "Trademarked the Performance Turnaround framework — making underperforming business units perform via Innovation, Modern Learning and AI." },
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
            <p className="kf-overline mb-8">// PHILOSOPHY</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-medium text-4xl md:text-6xl leading-[1.02] tracking-[-0.03em] mb-12 text-[var(--kf-ink)]">
              &ldquo;Don&apos;t check the box on training hours. Move the performance number.&rdquo;
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="kf-dropcap font-serif text-xl md:text-2xl leading-relaxed text-[var(--kf-ink-soft)]">
              For three decades, Seema has sat across the table from CEOs whose business units were underperforming — flat CSAT, low eSAT, missed productivity targets, ballooning attrition. Most had thrown money at training without ever asking the harder question: why isn&apos;t the business unit performing? That question is where KiraFix™ starts.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-[var(--kf-gray)]">
              The KiraFix™ framework — Organisational Gap Analysis on top of Six Sigma rigor, AI-based modern learning as a performance lever, real-time CSAT/eSAT/productivity measurement, Change Acceleration cascades from the CEO down — has now turned around entire business units across Fortune 500 BFSI, BPO and Telecom. <span className="text-[var(--kf-orange)] font-semibold">It&apos;s the same playbook</span> Seema used to launch a new OD strategy at a Fortune 500 BFSI client, migrate 300+ ILT hours to AI-personalised eLearning at HCL, and embed GenAI-driven instructional design in modern workforces today.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--kf-gray)]">
              She also serves as a <em>Fractional CLO</em> — for organisations that need top-tier learning leadership for 12 to 18 months, not for life. The system gets built. The team gets mentored. The performance numbers move. Then she steps out.
            </p>
          </Reveal>
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
                  Thirty years.<br />Three continents.<br />Countless turnarounds.
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
