import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Instagram, Globe, Mail } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      await axios.post(`${API}/newsletter`, { email });
      toast.success("You're in. Welcome to the Hopper insider circle.");
      setEmail("");
    } catch (err) {
      toast.error("Could not subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="site-footer" className="kf-on-dark text-[var(--kf-ink)] mt-24 border-t border-[var(--kf-line-strong)] relative overflow-hidden">
      <div className="absolute inset-0 kf-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[var(--kf-orange)] opacity-[0.07] blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-[var(--kf-line)]">
          <div className="lg:col-span-7">
            <p className="kf-overline mb-6">// LET&apos;S TRANSFORM TOGETHER</p>
            <h2 className="font-serif font-medium text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.96] tracking-tight">
              Turn your <span className="text-[var(--kf-orange)]">underperforming</span> unit into a high-performing, high-CSAT function.
            </h2>
            <Link
              to="/contact"
              data-testid="footer-cta-discovery"
              className="inline-flex items-center gap-3 mt-10 font-mono-acc text-sm uppercase tracking-[0.16em] border-b border-[var(--kf-orange)] pb-2 text-[var(--kf-orange)] hover:text-[var(--kf-ink)] hover:border-[var(--kf-ink)] transition-colors"
            >
              Book a Discovery Call <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-[var(--kf-line)]">
            <p className="kf-overline mb-4">// NEWSLETTER</p>
            <p className="font-serif text-xl font-light mb-6 text-[var(--kf-ink-soft)]">
              CEO-grade insights on performance turnarounds, AI-based learning methodologies, and modern workforce strategy. Twice a month.
            </p>
            <form onSubmit={submit} className="flex items-end gap-3 border-b border-[var(--kf-line-strong)] focus-within:border-[var(--kf-orange)] transition-colors">
              <input
                data-testid="newsletter-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                className="flex-1 bg-transparent border-0 outline-none py-3 text-[var(--kf-ink)] placeholder:text-[var(--kf-gray-mid)] font-mono-acc text-sm"
              />
              <button
                data-testid="newsletter-submit-btn"
                type="submit"
                disabled={loading}
                className="font-mono-acc text-xs uppercase tracking-[0.18em] font-semibold text-[var(--kf-orange)] hover:text-[var(--kf-ink)] py-3 disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe →"}
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div>
            <p className="kf-overline mb-5">// EXPLORE</p>
            <ul className="space-y-3 text-[var(--kf-ink-soft)] text-sm">
              <li><Link to="/" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-home">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-about">About Seema</Link></li>
              <li><Link to="/kirafix" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-kirafix">KiraFix AI™ Model</Link></li>
              <li><Link to="/case-studies" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-cases">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="kf-overline mb-5">// SOLUTIONS</p>
            <ul className="space-y-3 text-[var(--kf-ink-soft)] text-sm">
              <li>Fractional CLO</li>
              <li>Performance Turnaround</li>
              <li>AI-Based Modern Learning</li>
              <li>Performance Consulting</li>
              <li>GenAI Learning Design</li>
            </ul>
          </div>
          <div>
            <p className="kf-overline mb-5">// CONNECT</p>
            <ul className="space-y-3 text-[var(--kf-ink-soft)] text-sm">
              <li className="flex items-center gap-2">
                <Linkedin size={13} className="text-[var(--kf-orange)]" />
                <a href="https://www.linkedin.com/in/seemabassi-hopper" target="_blank" rel="noreferrer" className="hover:text-[var(--kf-orange)]" data-testid="footer-linkedin">/seemabassi-hopper</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={13} className="text-[var(--kf-orange)]" />
                <a href="https://instagram.com/Hopper_Learning" target="_blank" rel="noreferrer" className="hover:text-[var(--kf-orange)]" data-testid="footer-instagram">@Hopper_Learning</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={13} className="text-[var(--kf-orange)]" />
                <a href="https://www.hoppermodern.com" target="_blank" rel="noreferrer" className="hover:text-[var(--kf-orange)]" data-testid="footer-web">hoppermodern.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-[var(--kf-orange)]" />
                <a href="mailto:hello@hoppermodern.com" className="hover:text-[var(--kf-orange)]">hello@hoppermodern.com</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kf-overline mb-5">// CREDENTIALS</p>
            <ul className="space-y-3 text-[var(--kf-ink-soft)] text-sm">
              <li>Top 10 CLO &apos;23</li>
              <li>EdTech, SDSU</li>
              <li>IIMB Women Start-up</li>
              <li>Cert. Independent Director</li>
              <li>PMP · Six Sigma</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-[var(--kf-line)] flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] text-[var(--kf-gray-mid)] font-mono-acc tracking-wider uppercase">
          <span>© {new Date().getFullYear()} Hopper Modern Innovative Learning Solutions. KiraFix AI™ is a trademark.</span>
          <span>Gurgaon · India · Engagements Delivered Globally</span>
        </div>
      </div>
    </footer>
  );
}
