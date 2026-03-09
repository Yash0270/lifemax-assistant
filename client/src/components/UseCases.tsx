/*
 * Design: Nature Tech — Biophilic Calm
 * Use Cases: Real example request cards with warm badges and organic styling
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, User } from "lucide-react";

const FEATURES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/nature-features-TpQKjy9Z9g6x2M8YCnf5Uc.webp";

const useCases = [
  {
    category: "Health",
    request: "Find me the best magnesium supplement for sleep",
    result: "Compared 47 products. Top pick: Magnesium Glycinate 400mg by Thorne. Here's why...",
    handlers: ["ai"],
  },
  {
    category: "Fitness",
    request: "Book me a personal trainer near downtown, under $80/session",
    result: "Found 3 trainers. Best match: Alex Chen, $65/session, Mon/Wed/Fri 7AM. Booked trial.",
    handlers: ["human"],
  },
  {
    category: "Health",
    request: "Plan my entire meal prep for next week, high protein, under $100",
    result: "5-day plan ready. Grocery list sent to Instacart. Total: $87. Prep instructions included.",
    handlers: ["ai", "human"],
  },
  {
    category: "Wealth",
    request: "Negotiate my gym membership down or find a better deal",
    result: "Called your gym. Got $15/month off. Also found a competitor offering $29/month with pool access.",
    handlers: ["human"],
  },
  {
    category: "Mindset",
    request: "Research the top 5 therapists in my area who take Blue Cross",
    result: "5 therapists found, all in-network. Profiles, reviews, and availability attached. Want me to book?",
    handlers: ["ai", "human"],
  },
  {
    category: "Relationships",
    request: "Plan a memorable anniversary dinner for Saturday",
    result: "Reserved at Eleven Madison Park, 8PM. Arranged flowers to be at the table. Uber scheduled.",
    handlers: ["human"],
  },
];

const categoryColors: Record<string, string> = {
  Health: "bg-sage-light text-[oklch(0.40_0.08_145)]",
  Fitness: "bg-terracotta-light text-terracotta",
  Wealth: "bg-[oklch(0.92_0.03_75)] text-[oklch(0.45_0.06_55)]",
  Mindset: "bg-[oklch(0.92_0.03_160)] text-[oklch(0.45_0.08_160)]",
  Relationships: "bg-[oklch(0.92_0.04_20)] text-[oklch(0.50_0.10_20)]",
};

export default function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="sage-badge inline-block mb-4">Real Examples</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What People <span className="text-sage">Ask For</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From quick research to complex multi-step tasks — here are real examples of what LifeMaxx users ask for every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img
              src={FEATURES_IMG}
              alt="Wellness lifestyle flat-lay"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="nature-card p-6"
            >
              {/* Top row: category + handler badges */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${categoryColors[uc.category] || "bg-sage-light text-[oklch(0.40_0.08_145)]"}`}>
                  {uc.category}
                </span>
                <div className="flex items-center gap-2">
                  {uc.handlers.includes("ai") && (
                    <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-sage-light text-[oklch(0.40_0.08_145)]">
                      <Sparkles className="w-3 h-3" /> AI
                    </span>
                  )}
                  {uc.handlers.includes("human") && (
                    <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-terracotta-light text-terracotta">
                      <User className="w-3 h-3" /> Human
                    </span>
                  )}
                </div>
              </div>

              {/* Request */}
              <p className="font-display font-semibold text-foreground mb-3">
                "{uc.request}"
              </p>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-[oklch(0.85_0.03_75)] to-transparent my-3" />

              {/* Result */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {uc.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
