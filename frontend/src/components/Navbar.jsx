import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/kirafix", label: "KiraFix" },
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
        scrolled ? "backdrop-blur-xl bg-[rgba(255,87,34,0.88)] border-b border-[var(--kf-line)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[96px]">
        <Link to="/" data-testid="nav-brand" className="flex items-center gap-4 group">
          <img
            src="https://customer-assets.emergentagent.com/job_enterprise-boost-ai/artifacts/xplppvud_newlogo.jpg"
            alt="Hopper Modern AI Performance Solutions"
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md border border-[var(--kf-ink)] shadow-[0_6px_20px_-8px_rgba(20,16,16,0.45)]"
          />
          <div className="leading-tight hidden md:block">
            <div className="font-serif text-[15px] md:text-[17px] tracking-[-0.02em] text-[var(--kf-ink)] font-semibold max-w-[260px] leading-tight">Hopper Modern AI Performance Solutions</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={({ isActive }) =>
                `kf-link font-mono-acc text-[11px] uppercase tracking-[0.18em] font-medium ${isActive ? "kf-link-active" : "text-[var(--kf-ink)]"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/contact" data-testid="nav-cta-discovery" className="kf-btn-primary">
            Discovery Call <ArrowUpRight size={14} strokeWidth={2} />
          </Link>
        </div>

        <button
          data-testid="nav-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-[var(--kf-ink)]"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div data-testid="nav-mobile-menu" className="lg:hidden bg-[var(--kf-bg)] border-t border-[var(--kf-line)]">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={({ isActive }) =>
                  `font-serif text-3xl font-medium ${isActive ? "italic" : "text-[var(--kf-ink)]"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link to="/contact" data-testid="nav-mobile-cta" className="kf-btn-primary mt-2 w-fit">
              Discovery Call <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
