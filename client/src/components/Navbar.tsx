/*
 * Design: Nature Tech — Biophilic Calm
 * Navbar: Warm cream with sage accents, organic rounded feel, Lora display + DM Sans
 */
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";

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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.97_0.01_90/0.9)] backdrop-blur-md shadow-sm border-b border-sand"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-sage flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-xl font-bold text-foreground tracking-tight">
              Life<span className="text-sage">Maxx</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-sand-light transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#pricing")}
              className="px-6 py-2.5 bg-sage text-white text-sm font-medium rounded-full hover:bg-[oklch(0.45_0.08_145)] transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-sand-light transition-colors"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[oklch(0.97_0.01_90/0.95)] backdrop-blur-lg border-t border-sand"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm font-medium text-foreground hover:bg-sand-light rounded-xl transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#pricing")}
                className="block w-full mt-3 px-4 py-3 bg-sage text-white text-sm font-medium rounded-xl text-center"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
