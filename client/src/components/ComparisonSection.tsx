/*
 * Design: Nature Tech — Biophilic Calm
 * Comparison: Clean warm table showing AI vs Human vs LifeMaxx
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Instant Research", ai: true, human: false, lifemaxx: true },
  { feature: "Real-World Actions", ai: false, human: true, lifemaxx: true },
  { feature: "Phone Calls & Negotiations", ai: false, human: true, lifemaxx: true },
  { feature: "24/7 Availability", ai: true, human: false, lifemaxx: true },
  { feature: "Personalized Recommendations", ai: "partial", human: true, lifemaxx: true },
  { feature: "Booking & Purchasing", ai: false, human: true, lifemaxx: true },
  { feature: "Data Analysis & Comparison", ai: true, human: "partial", lifemaxx: true },
  { feature: "Emotional Intelligence", ai: false, human: true, lifemaxx: true },
];

function CellIcon({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="w-5 h-5 text-sage mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-[oklch(0.65_0.10_25)] mx-auto" />;
  return <Minus className="w-5 h-5 text-muted-foreground/50 mx-auto" />;
}

export default function ComparisonSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-sand-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="sage-badge inline-block mb-4">Why Choose Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-terracotta italic">Hybrid</span> Wins
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Pure AI is fast but can't act in the real world. Pure human is capable but slow. LifeMaxx gives you both.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="nature-card overflow-hidden"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-sand">
                <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground">
                  Capability
                </th>
                <th className="text-center py-4 px-4 text-sm font-medium text-muted-foreground">
                  AI Only
                </th>
                <th className="text-center py-4 px-4 text-sm font-medium text-muted-foreground">
                  Human Only
                </th>
                <th className="text-center py-4 px-4">
                  <span className="text-sm font-bold text-sage">LifeMaxx</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-[oklch(0.90_0.02_75/0.5)] last:border-0 ${
                    i % 2 === 0 ? "bg-[oklch(0.97_0.01_90/0.5)]" : ""
                  }`}
                >
                  <td className="py-4 px-6 text-sm font-medium text-foreground">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4">
                    <CellIcon value={row.ai} />
                  </td>
                  <td className="py-4 px-4">
                    <CellIcon value={row.human} />
                  </td>
                  <td className="py-4 px-4 bg-[oklch(0.92_0.03_145/0.3)]">
                    <CellIcon value={row.lifemaxx} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
