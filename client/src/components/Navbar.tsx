/*
 * Design: Tactical Command Center — Military-Futurism
 * Navbar: Persistent top bar with status indicator feel, monospaced accents
 * Colors: Dark base, cyan primary, lime secondary
 */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark-base/90 backdrop-blur-xl border-b border-cyan/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded bg-cyan/10 border border-cyan/30 flex items-center justify-center group-hover:glow-cyan-sm transition-all duration-300">
              <Zap className="w-4 h-4 text-cyan" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-foreground">
              LIFE<span className="text-cyan">MAXX</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-mono text-muted-foreground hover:text-cyan transition-colors duration-200 tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA + Status */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>ONLINE</span>
            </div>
            <button
              onClick={() => handleNavClick("#pricing")}
              className="px-5 py-2.5 bg-cyan text-dark-base font-display font-semibold text-sm rounded tracking-wide hover:bg-cyan-glow transition-colors duration-200 glow-cyan-sm"
            >
              GET STARTED
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-base/95 backdrop-blur-xl border-b border-cyan/10"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-mono text-muted-foreground hover:text-cyan transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#pricing")}
                className="w-full mt-3 px-5 py-3 bg-cyan text-dark-base font-display font-semibold text-sm rounded tracking-wide"
              >
                GET STARTED
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
