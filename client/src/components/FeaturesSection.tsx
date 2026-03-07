/*
 * Design: Tactical Command Center — Military-Futurism
 * Features: Optimization domains grid with generated features image
 * Glass-morphism cards, glow borders, staggered entrance
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Heart,
  Dumbbell,
  Brain,
  TrendingUp,
  Users,
  Clock,
  Sparkles,
  Shield,
} from "lucide-react";

const OPTIMIZATION_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/optimization-visual-JCbawJCasWgBhhew3jiYvy.webp";

const domains = [
  {
    icon: Heart,
    title: "Health",
    description: "Nutrition plans, supplement research, doctor appointments, lab work coordination, sleep optimization protocols.",
    accent: "cyan",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Personal trainer booking, gym negotiations, workout programming, recovery protocols, equipment research.",
    accent: "lime",
  },
  {
    icon: Brain,
    title: "Mindset",
    description: "Therapist matching, meditation app research, journaling prompts, habit tracking setup, focus optimization.",
    accent: "cyan",
  },
  {
    icon: TrendingUp,
    title: "Wealth",
    description: "Financial advisor matching, investment research, expense auditing, side hustle research, tax optimization.",
    accent: "lime",
  },
  {
    icon: Users,
    title: "Relationships",
    description: "Date planning, gift research, social event coordination, networking introductions, communication coaching.",
    accent: "cyan",
  },
  {
    icon: Clock,
    title: "Productivity",
    description: "Calendar optimization, tool setup, workflow automation, travel planning, errand delegation, appointment scheduling.",
    accent: "lime",
  },
];

const capabilities = [
  {
    icon: Sparkles,
    title: "AI-Powered Research",
    description: "Our AI scans thousands of sources in seconds to find the best options for you.",
  },
  {
    icon: Shield,
    title: "Human Verification",
    description: "Every AI recommendation is verified by a trained human specialist before delivery.",
  },
];

function DomainCard({ domain, index }: { domain: typeof domains[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card border-glow rounded-lg p-6 h-full hover:bg-dark-elevated/40 transition-all duration-300">
        <div
          className={`w-10 h-10 rounded flex items-center justify-center mb-4 border ${
            domain.accent === "cyan"
              ? "bg-cyan/10 border-cyan/20 group-hover:bg-cyan/15"
              : "bg-lime/10 border-lime/20 group-hover:bg-lime/15"
          } transition-colors duration-300`}
        >
          <domain.icon
            className={`w-5 h-5 ${
              domain.accent === "cyan" ? "text-cyan" : "text-lime"
            }`}
          />
        </div>
        <h3 className="font-display font-bold text-base mb-2 text-foreground">
          {domain.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {domain.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Diagonal top accent */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-dark-surface" style={{ clipPath: "polygon(0 0, 100% 0, 100% 60%, 0 100%)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-lime tracking-widest uppercase mb-3 block">
              // Optimization Domains
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              Six Vectors of{" "}
              <span className="text-lime text-glow-lime">Peak Performance</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We cover every dimension of life optimization. Tell us what area you want to level up, and we deploy the right combination of AI and human expertise.
            </p>

            {/* Capabilities */}
            <div className="space-y-4">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center shrink-0 mt-0.5">
                    <cap.icon className="w-4 h-4 text-cyan" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-foreground mb-1">
                      {cap.title}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-cyan/5 rounded-full blur-3xl" />
            <img
              src={OPTIMIZATION_IMG}
              alt="Life optimization visualization showing health, fitness, wealth, and mindset metrics"
              className="relative w-full max-w-lg mx-auto"
            />
          </motion.div>
        </div>

        {/* Domains Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domains.map((domain, i) => (
            <DomainCard key={domain.title} domain={domain} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
