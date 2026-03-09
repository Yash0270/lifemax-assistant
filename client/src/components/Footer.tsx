/*
 * Design: Nature Tech — Biophilic Calm
 * Footer: Warm cream footer with sage accents, organic feel
 */
import { Leaf } from "lucide-react";

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
    <footer className="bg-cream border-t border-sand py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-xl bg-sage flex items-center justify-center">
                <Leaf className="w-4 h-4 text-white" />
              </div>
              <span className="font-display text-lg font-bold text-foreground">
                Life<span className="text-sage">Maxx</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your personal optimization engine. AI + Human hybrid assistant for health, fitness, wealth, and beyond.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-sage transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Domains */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
              Domains
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.domains.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-sage transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-sm text-foreground mb-4">
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
        <div className="mt-12 pt-8 border-t border-sand flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} LifeMaxx. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-sage transition-colors">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-sage transition-colors">
              Terms
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-sage transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
