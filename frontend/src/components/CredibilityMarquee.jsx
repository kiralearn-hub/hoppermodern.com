import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  "GE",
  "Aviva",
  "Rio Tinto",
  "HCL",
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
      className="kf-logo-strip bg-[var(--kf-bg)] py-7 kf-marquee-mask"
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
