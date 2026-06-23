import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  "GE",
  "Aviva",
  "Rio Tinto",
  "Aegis BPO",
  "Fortune 500 BFSI",
  "Fortune 500 BPO",
  "Telecom Leaders",
  "CEO Insights Featured",
  "Top 10 CLO '23",
  "EdTech · SDSU",
];

export default function CredibilityMarquee() {
  return (
    <section
      data-testid="credibility-marquee"
      className="bg-[var(--kf-bg-raised)] py-6 kf-marquee-mask border-y border-[var(--kf-line-strong)] kf-on-dark"
    >
      <Marquee speed={36} gradient={false} pauseOnHover>
        {items.map((it, i) => (
          <div className="kf-logo-strip-item" key={i}>
            <span className="kf-logo-strip-dot" />
            <span>{it}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}
