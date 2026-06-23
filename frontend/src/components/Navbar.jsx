import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/kirafix", label: "KiraFix™ Model" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-[rgba(250,250,248,0.82)] border-b border-[var(--kf-line)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[72px]">
        {/* Brand */}
        <Link to="/" data-testid="nav-brand" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[var(--kf-orange)] flex items-center justify-center text-white font-serif text-xl leading-none pb-[2px]">K</div>
          <div className="leading-tight">
            <div className="font-serif text-[20px] tracking-tight">KiraFix<sup className="text-[10px] ml-0.5">™</sup></div>
            <div className="text-[10px] font-mono-acc tracking-[0.22em] uppercase text-[var(--kf-gray)]">by Hopper Modern</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={({ isActive }) =>
                `kf-link text-sm font-medium tracking-wide ${isActive ? "kf-link-active text-[var(--kf-orange)]" : "text-[var(--kf-ink)]"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" data-testid="nav-cta-discovery" className="kf-btn-primary">
            Book Discovery Call <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[var(--kf-ink)]"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div data-testid="nav-mobile-menu" className="lg:hidden bg-[var(--kf-bg)] border-t border-[var(--kf-line)]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={({ isActive }) =>
                  `font-serif text-3xl ${isActive ? "text-[var(--kf-orange)]" : "text-[var(--kf-ink)]"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" data-testid="nav-mobile-cta" className="kf-btn-primary mt-2 w-fit">
              Book Discovery Call <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
