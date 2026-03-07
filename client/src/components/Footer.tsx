/*
 * Design: Tactical Command Center — Military-Futurism
 * Footer: Minimal, dark, with monospaced accents and status indicators
 */
import { Zap } from "lucide-react";

const footerLinks = {
  product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ],
  domains: [
    { label: "Health", href: "#features" },
    { label: "Fitness", href: "#features" },
    { label: "Wealth", href: "#features" },
    { label: "Mindset", href: "#features" },
    { label: "Relationships", href: "#features" },
    { label: "Productivity", href: "#features" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
};

export default function Footer() {
  const handleClick = (href: string) => {
    if (href.startsWith("#") && href !== "#") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-border bg-dark-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded bg-cyan/10 border border-cyan/30 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-cyan" />
              </div>
              <span className="font-display font-bold text-base tracking-tight text-foreground">
                LIFE<span className="text-cyan">MAXX</span>
              </span>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4 max-w-xs">
              Your personal optimization engine. AI + Human hybrid assistant for health, fitness, wealth, and life.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span>SYSTEM OPERATIONAL</span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-mono text-xs text-cyan tracking-widest uppercase mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h4 className="font-mono text-xs text-lime tracking-widest uppercase mb-4">
              Domains
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.domains.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-lime transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-foreground">
            &copy; {new Date().getFullYear()} LifeMaxx. All rights reserved.
          </p>
          <p className="text-xs font-mono text-muted-foreground/50">
            v1.0.0 // BUILD 2026.03
          </p>
        </div>
      </div>
    </footer>
  );
}
