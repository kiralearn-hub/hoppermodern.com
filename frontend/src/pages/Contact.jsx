import React, { useState } from "react";
import { ArrowUpRight, Linkedin, Instagram, Globe, Mail, CheckCircle2 } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import PageShell from "../components/PageShell";
import { Reveal } from "../components/Reveal";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const inquiryTypes = [
  { value: "discovery_call", label: "Book a Discovery Call" },
  { value: "fractional_clo", label: "Fractional CLO Engagement" },
  { value: "ld_turnaround", label: "L&D Turnaround" },
  { value: "general", label: "General Enquiry" },
  { value: "media", label: "Press / Media" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    inquiry_type: "discovery_call",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSubmitted(true);
      toast.success("Thank you. Seema's team will respond within 1 business day.");
    } catch (err) {
      toast.error("Could not send. Please email hello@hoppermodern.com directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageShell>
      <section data-testid="contact-hero" className="bg-[var(--kf-bg)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 md:pt-36 pb-20 md:pb-28 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT — Pitch */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kf-overline mb-6">— Let&apos;s talk</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.02em]">
                Let&apos;s transform your <em className="not-italic text-[var(--kf-orange)]">organisation.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="mt-8 text-lg font-light text-[var(--kf-gray)] leading-relaxed">
                Tell us where your L&amp;D function is leaking value. A 30-minute Discovery Call with Seema or a senior partner. No deck. No sales pitch. Just a diagnostic conversation.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-12 space-y-5">
                <div className="flex items-center gap-3 text-[var(--kf-ink-soft)]">
                  <Mail size={16} className="text-[var(--kf-orange)]" />
                  <a href="mailto:hello@hoppermodern.com" className="kf-link" data-testid="contact-email-link">hello@hoppermodern.com</a>
                </div>
                <div className="flex items-center gap-3 text-[var(--kf-ink-soft)]">
                  <Globe size={16} className="text-[var(--kf-orange)]" />
                  <a href="https://www.hoppermodern.com" target="_blank" rel="noreferrer" className="kf-link" data-testid="contact-web-link">hoppermodern.com</a>
                </div>
                <div className="flex items-center gap-3 text-[var(--kf-ink-soft)]">
                  <Linkedin size={16} className="text-[var(--kf-orange)]" />
                  <a href="https://www.linkedin.com/in/seemabassi-hopper" target="_blank" rel="noreferrer" className="kf-link" data-testid="contact-linkedin-link">/in/seemabassi-hopper</a>
                </div>
                <div className="flex items-center gap-3 text-[var(--kf-ink-soft)]">
                  <Instagram size={16} className="text-[var(--kf-orange)]" />
                  <a href="https://instagram.com/Hopper_Learning" target="_blank" rel="noreferrer" className="kf-link" data-testid="contact-instagram-link">@Hopper_Learning</a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-14 border-t border-[var(--kf-line)] pt-8">
                <p className="kf-overline mb-3">— Operating</p>
                <p className="font-serif text-2xl leading-tight">Gurgaon, India · Engagements delivered globally.</p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="bg-[var(--kf-bg-alt)] p-8 md:p-12 border border-[var(--kf-line)]">
                {submitted ? (
                  <div data-testid="contact-success" className="py-16 text-center">
                    <CheckCircle2 size={56} strokeWidth={1.25} className="text-[var(--kf-orange)] mx-auto" />
                    <h2 className="font-serif text-4xl md:text-5xl font-light mt-6 leading-tight">Thank you.</h2>
                    <p className="mt-4 text-[var(--kf-gray)] max-w-md mx-auto leading-relaxed">
                      Your enquiry is in. Seema&apos;s team will respond within 1 business day with available Discovery Call slots.
                    </p>
                    <button
                      data-testid="contact-reset-btn"
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", company: "", role: "", inquiry_type: "discovery_call", message: "" });
                      }}
                      className="kf-btn-ghost mt-10"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} data-testid="contact-form" className="space-y-1">
                    <p className="kf-overline mb-6">— Discovery enquiry</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1">
                      <div className="pt-2">
                        <label className="text-xs uppercase tracking-[0.18em] text-[var(--kf-gray)]">Full name *</label>
                        <input
                          data-testid="contact-name-input"
                          className="kf-field"
                          required
                          value={form.name}
                          onChange={update("name")}
                          placeholder="Your name"
                        />
                      </div>
                      <div className="pt-2">
                        <label className="text-xs uppercase tracking-[0.18em] text-[var(--kf-gray)]">Work email *</label>
                        <input
                          data-testid="contact-email-input"
                          type="email"
                          className="kf-field"
                          required
                          value={form.email}
                          onChange={update("email")}
                          placeholder="you@company.com"
                        />
                      </div>
                      <div className="pt-2">
                        <label className="text-xs uppercase tracking-[0.18em] text-[var(--kf-gray)]">Company</label>
                        <input
                          data-testid="contact-company-input"
                          className="kf-field"
                          value={form.company}
                          onChange={update("company")}
                          placeholder="Organisation"
                        />
                      </div>
                      <div className="pt-2">
                        <label className="text-xs uppercase tracking-[0.18em] text-[var(--kf-gray)]">Your role</label>
                        <input
                          data-testid="contact-role-input"
                          className="kf-field"
                          value={form.role}
                          onChange={update("role")}
                          placeholder="CEO, CHRO, CLO..."
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <label className="text-xs uppercase tracking-[0.18em] text-[var(--kf-gray)]">I&apos;m interested in</label>
                      <select
                        data-testid="contact-inquiry-type"
                        className="kf-field"
                        value={form.inquiry_type}
                        onChange={update("inquiry_type")}
                      >
                        {inquiryTypes.map((t) => (
                          <option key={t.value} value={t.value}>{t.label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="pt-6">
                      <label className="text-xs uppercase tracking-[0.18em] text-[var(--kf-gray)]">What&apos;s going on in your L&amp;D function? *</label>
                      <textarea
                        data-testid="contact-message-input"
                        required
                        rows={4}
                        className="kf-field resize-none"
                        value={form.message}
                        onChange={update("message")}
                        placeholder="Low eSAT? Low cSAT? L&D function under review? Tell us where to look first."
                      />
                    </div>

                    <div className="pt-8 flex flex-wrap items-center gap-4">
                      <button
                        type="submit"
                        data-testid="contact-submit-btn"
                        disabled={loading}
                        className="kf-btn-primary"
                      >
                        {loading ? "Sending..." : (<>Send enquiry <ArrowUpRight size={16} /></>)}
                      </button>
                      <p className="text-xs text-[var(--kf-gray)] max-w-xs">
                        By submitting, you agree to be contacted by Hopper Modern. No spam — ever.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
