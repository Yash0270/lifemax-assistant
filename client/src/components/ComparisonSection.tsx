/*
 * Design: Tactical Command Center — Military-Futurism
 * Comparison: Table comparing pure AI, pure human, and LifeMaxx hybrid
 * Glass card with glow accents
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Minus } from "lucide-react";

const comparisons = [
  {
    feature: "Instant Research",
    ai: true,
    human: false,
    lifemaxx: true,
  },
  {
    feature: "Real-World Actions",
    ai: false,
    human: true,
    lifemaxx: true,
  },
  {
    feature: "Phone Calls & Negotiations",
    ai: false,
    human: true,
    lifemaxx: true,
  },
  {
    feature: "24/7 Availability",
    ai: true,
    human: false,
    lifemaxx: true,
  },
  {
    feature: "Personalized Recommendations",
    ai: "partial",
    human: true,
    lifemaxx: true,
  },
  {
    feature: "Booking & Purchasing",
    ai: false,
    human: true,
    lifemaxx: true,
  },
  {
    feature: "Data Analysis & Comparison",
    ai: true,
    human: "partial",
    lifemaxx: true,
  },
  {
    feature: "Emotional Intelligence",
    ai: false,
    human: true,
    lifemaxx: true,
  },
];

function StatusIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-4 h-4 text-lime" />;
  if (value === false) return <X className="w-4 h-4 text-destructive/60" />;
  return <Minus className="w-4 h-4 text-muted-foreground" />;
}

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dark-surface/30" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 block">
            // System Comparison
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Why <span className="text-cyan text-glow-cyan">Hybrid</span> Wins
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pure AI is fast but can't act in the real world. Pure human is capable but slow. LifeMaxx gives you both.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card border-glow rounded-lg overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-4 gap-4 p-4 sm:p-6 border-b border-border bg-dark-elevated/30">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Capability
            </div>
            <div className="text-center text-xs font-mono text-muted-foreground uppercase tracking-wider">
              AI Only
            </div>
            <div className="text-center text-xs font-mono text-muted-foreground uppercase tracking-wider">
              Human Only
            </div>
            <div className="text-center">
              <span className="text-xs font-mono text-cyan uppercase tracking-wider font-semibold">
                LifeMaxx
              </span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <div
              key={row.feature}
              className={`grid grid-cols-4 gap-4 p-4 sm:px-6 items-center ${
                i < comparisons.length - 1 ? "border-b border-border/50" : ""
              } hover:bg-dark-elevated/20 transition-colors`}
            >
              <div className="text-sm text-foreground">{row.feature}</div>
              <div className="flex justify-center">
                <StatusIcon value={row.ai} />
              </div>
              <div className="flex justify-center">
                <StatusIcon value={row.human} />
              </div>
              <div className="flex justify-center">
                <StatusIcon value={row.lifemaxx} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
