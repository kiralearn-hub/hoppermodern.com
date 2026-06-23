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
      toast.success("You're on the list. Welcome to the Hopper insider circle.");
      setEmail("");
    } catch (err) {
      toast.error("Could not subscribe. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer data-testid="site-footer" className="bg-[var(--kf-dark)] text-[var(--kf-cream)] mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-24 pb-12">
        {/* Big Let's Talk */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-white/10">
          <div className="lg:col-span-7">
            <p className="kf-overline text-[var(--kf-orange)] mb-6">— Let&apos;s transform together</p>
            <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter">
              Turn your <em className="text-[var(--kf-orange)] not-italic font-normal">struggling</em> L&amp;D function into a profit engine.
            </h2>
            <Link
              to="/contact"
              data-testid="footer-cta-discovery"
              className="inline-flex items-center gap-3 mt-10 text-lg font-medium border-b border-[var(--kf-orange)] pb-2 hover:text-[var(--kf-orange)] transition-colors"
            >
              Book a Discovery Call <ArrowUpRight size={20} />
            </Link>
          </div>

          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-white/10">
            <p className="kf-overline mb-4">— Newsletter</p>
            <p className="font-serif text-2xl font-light mb-6 text-white/80">
              CEO-grade insights on L&amp;D turnarounds, AI in learning, and modern workforce strategy. Twice a month.
            </p>
            <form onSubmit={submit} className="flex items-end gap-3 border-b border-white/30 focus-within:border-[var(--kf-orange)] transition-colors">
              <input
                data-testid="newsletter-email-input"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@company.com"
                className="flex-1 bg-transparent border-0 outline-none py-3 text-white placeholder:text-white/40"
              />
              <button
                data-testid="newsletter-submit-btn"
                type="submit"
                disabled={loading}
                className="text-xs uppercase tracking-[0.2em] font-semibold text-[var(--kf-orange)] hover:text-white py-3 disabled:opacity-50"
              >
                {loading ? "..." : "Subscribe →"}
              </button>
            </form>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-16">
          <div>
            <p className="kf-overline mb-5">— Explore</p>
            <ul className="space-y-3 text-white/70">
              <li><Link to="/" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-home">Home</Link></li>
              <li><Link to="/about" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-about">About Seema</Link></li>
              <li><Link to="/kirafix" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-kirafix">KiraFix™ Model</Link></li>
              <li><Link to="/case-studies" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-cases">Case Studies</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--kf-orange)]" data-testid="footer-link-contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="kf-overline mb-5">— Solutions</p>
            <ul className="space-y-3 text-white/70">
              <li>Fractional CLO</li>
              <li>L&amp;D Turnarounds</li>
              <li>Scalable Content Strategy</li>
              <li>Performance Consulting</li>
              <li>GenAI Learning Design</li>
            </ul>
          </div>
          <div>
            <p className="kf-overline mb-5">— Connect</p>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-center gap-2">
                <Linkedin size={14} />
                <a href="https://www.linkedin.com/in/seemabassi-hopper" target="_blank" rel="noreferrer" className="hover:text-[var(--kf-orange)]" data-testid="footer-linkedin">/seemabassi-hopper</a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} />
                <a href="https://instagram.com/Hopper_Learning" target="_blank" rel="noreferrer" className="hover:text-[var(--kf-orange)]" data-testid="footer-instagram">@Hopper_Learning</a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={14} />
                <a href="https://www.hoppermodern.com" target="_blank" rel="noreferrer" className="hover:text-[var(--kf-orange)]" data-testid="footer-web">hoppermodern.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} />
                <a href="mailto:hello@hoppermodern.com" className="hover:text-[var(--kf-orange)]">hello@hoppermodern.com</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kf-overline mb-5">— Credentials</p>
            <ul className="space-y-3 text-white/70">
              <li>Top 10 CLO &apos;23</li>
              <li>EdTech, SDSU</li>
              <li>IIMB Women Start-up</li>
              <li>Certified Independent Director</li>
              <li>PMP Certified</li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/40 font-mono-acc tracking-wider uppercase">
          <span>© {new Date().getFullYear()} Hopper Modern Innovative Learning Solutions. KiraFix™ is a trademark.</span>
          <span>Gurgaon, India · Operating Globally</span>
        </div>
      </div>
    </footer>
  );
}
