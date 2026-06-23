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
  { year: "GE · Aviva · Rio Tinto", title: "VP & Learning Leader", body: "Held Fortune 500 L&D leadership across three global icons. Drove modern learning, change acceleration, performance consulting." },
  { year: "2020", title: "Founded Hopper Modern", body: "Vision: make L&D a profit-making unit by closing the CEO's No.1 challenge — business impact from learning." },
  { year: "2023", title: "Top 10 CLO of the Year", body: "Recognised by CEO Insights for measurable enterprise turnarounds." },
  { year: "2024+", title: "KiraFix™ launched", body: "Trademarked the enterprise performance turnaround methodology — Innovation + Modern Learning + AI." },
];

const credentials = [
  "Certified Independent Director",
  "EdTech — San Diego State University (SDSU)",
  "PMP Certified",
  "Six Sigma Practitioner",
  "IIMB Women Start-up Program",
  "Featured in CEO Insights Magazine",
  "Top 10 CLO of 2023",
  "30+ years in Learning & OD",
];

export default function About() {
  return (
    <PageShell>
      {/* HERO */}
      <section data-testid="about-hero" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="kf-overline mb-6">— The Founder</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-[-0.02em]">
                Seema <em className="not-italic text-[var(--kf-orange)]">Bassi.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 font-mono-acc text-xs tracking-[0.2em] uppercase text-[var(--kf-gray)]">
                Founder · Chief Learning Officer · Hopper Modern Innovative Learning Solutions
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
              <div className="kf-img-frame aspect-[4/5] relative">
                <img src={SEEMA} alt="Seema Bassi portrait" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / BIO */}
      <section data-testid="about-philosophy" className="bg-[var(--kf-bg-alt)] kf-grain">
        <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 md:py-36">
          <Reveal>
            <p className="kf-overline mb-8">— Philosophy</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight mb-12">
              &ldquo;Don&apos;t check the box on training hours. Solve the actual business problem.&rdquo;
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="kf-dropcap font-serif text-xl md:text-2xl leading-relaxed text-[var(--kf-ink-soft)]">
              For three decades, Seema has sat across the table from CEOs who knew their L&amp;D function was bleeding budget without moving the numbers. Some had a fixed mindset. Some couldn&apos;t sell the change internally. All of them needed someone who could diagnose the gap, design the system, and stay accountable for the ROI.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 text-lg leading-relaxed text-[var(--kf-gray)]">
              That work — Organisational Gap Analysis on top of Six Sigma rigor, ADDIE-based modern learning design, Learning ROI measurement, Change Acceleration cascades from the CEO down — is now codified as <span className="text-[var(--kf-orange)] font-semibold">KiraFix™</span>. It&apos;s the same playbook Seema used to launch a new OD strategy at a Fortune 500 BFSI client, to migrate 300+ ILT hours to eLearning at HCL, and to grow GenAI-driven instructional design across modern workforces today.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-lg leading-relaxed text-[var(--kf-gray)]">
              She also serves as a <em>Fractional CLO</em> — for organisations that need top-tier learning leadership for 12 to 18 months, not for life. The system gets built. The team gets mentored. The numbers move. Then she steps out.
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
                <p className="kf-overline mb-6">— Career arc</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif font-light text-4xl md:text-6xl leading-[0.98] tracking-tight">
                  Thirty years.<br />Three continents.<br />Countless turnarounds.
                </h2>
              </Reveal>
            </div>
          </div>
          <StaggerGroup className="space-y-2">
            {timeline.map((t, i) => (
              <StaggerItem key={i}>
                <div data-testid={`timeline-${i}`} className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 border-t border-[var(--kf-line)] hover:bg-[var(--kf-bg-alt)] transition-colors duration-500 px-3 -mx-3 group">
                  <div className="md:col-span-3">
                    <div className="font-mono-acc text-xs tracking-[0.18em] uppercase text-[var(--kf-orange)]">{t.year}</div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-serif text-2xl md:text-3xl font-normal leading-tight">{t.title}</h3>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-[var(--kf-gray)] leading-relaxed">{t.body}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CREDENTIALS GRID */}
      <section data-testid="about-credentials" className="bg-[var(--kf-bg-alt)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="kf-overline mb-6">— Credentials &amp; affiliations</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-light text-4xl md:text-5xl mb-14 max-w-3xl leading-tight">
              The receipts behind the work.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--kf-line)]">
            {credentials.map((c, i) => (
              <StaggerItem key={c}>
                <div data-testid={`credential-${i}`} className="bg-[var(--kf-bg-alt)] p-6 md:p-8 h-full flex items-end min-h-[140px]">
                  <p className="font-serif text-xl md:text-2xl leading-tight">{c}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* MEDIA / FEATURED IN */}
      <section data-testid="about-media" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24 md:py-32">
          <Reveal>
            <p className="kf-overline mb-6">— In the press &amp; on stage</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-serif font-light text-4xl md:text-5xl mb-14 max-w-3xl leading-tight">
              Sharing the playbook with the world.
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <Reveal>
              <div className="kf-img-frame aspect-[4/3]">
                <img src={MASTERCLASS} alt="AI &amp; You — Career Comeback Masterclass" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 leading-tight">AI &amp; You: Staying Relevant in the Future Workplace</h3>
              <p className="mt-3 text-[var(--kf-gray)]">Comeback Club Masterclass. AI at Work — Using Google Tools to Power Your Career Comeback.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="kf-img-frame aspect-[4/3]">
                <img src={IWD} alt="Women Founders Building the Future of Entrepreneurship" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 leading-tight">Women Founders Building the Future of Entrepreneurship</h3>
              <p className="mt-3 text-[var(--kf-gray)]">International Women&apos;s Day Special — featured among India&apos;s leading women founders.</p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="mt-16 flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/seemabassi-hopper" target="_blank" rel="noreferrer" data-testid="about-linkedin-btn" className="kf-btn-ghost">
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
              <Link to="/contact" data-testid="about-contact-btn" className="kf-btn-primary">
                Work with Seema <ArrowUpRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
