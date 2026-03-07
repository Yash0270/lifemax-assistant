/*
 * Design: Tactical Command Center — Military-Futurism
 * Use Cases: Scrolling ticker of real example requests
 * Shows the breadth of what users can ask for
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Bot, User, ArrowRight } from "lucide-react";

const FEATURES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/features-grid-CPZM7FBftSWawMT3UxHpis.webp";

const useCases = [
  {
    request: "Find me the best magnesium supplement for sleep",
    handler: "AI",
    result: "Compared 47 products. Top pick: Magnesium Glycinate 400mg by Thorne. Here's why...",
    domain: "Health",
  },
  {
    request: "Book me a personal trainer near downtown, under $80/session",
    handler: "Human",
    result: "Found 3 trainers. Best match: Alex Chen, $65/session, Mon/Wed/Fri 7AM. Booked trial.",
    domain: "Fitness",
  },
  {
    request: "Plan my entire meal prep for next week, high protein, under $100",
    handler: "AI + Human",
    result: "5-day plan ready. Grocery list sent to Instacart. Total: $87. Prep instructions included.",
    domain: "Health",
  },
  {
    request: "Negotiate my gym membership down or find a better deal",
    handler: "Human",
    result: "Called your gym. Got $15/month off. Also found a competitor offering $29/month with pool access.",
    domain: "Wealth",
  },
  {
    request: "Research the top 5 therapists in my area who take Blue Cross",
    handler: "AI + Human",
    result: "5 therapists found, all in-network. Profiles, reviews, and availability attached. Want me to book?",
    domain: "Mindset",
  },
  {
    request: "Plan a memorable anniversary dinner for Saturday",
    handler: "Human",
    result: "Reserved at Eleven Madison Park, 8PM. Arranged flowers to be at the table. Uber scheduled.",
    domain: "Relationships",
  },
];

function UseCaseCard({ useCase, index }: { useCase: typeof useCases[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card border-glow rounded-lg p-5 hover:bg-dark-elevated/30 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] text-cyan tracking-widest uppercase px-2 py-0.5 rounded border border-cyan/20 bg-cyan/5">
          {useCase.domain}
        </span>
        <div className="flex items-center gap-1.5">
          {useCase.handler.includes("AI") && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-lime/10 border border-lime/20">
              <Bot className="w-3 h-3 text-lime" />
              <span className="font-mono text-[10px] text-lime">AI</span>
            </div>
          )}
          {useCase.handler.includes("Human") && (
            <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-cyan/10 border border-cyan/20">
              <User className="w-3 h-3 text-cyan" />
              <span className="font-mono text-[10px] text-cyan">HUMAN</span>
            </div>
          )}
        </div>
      </div>

      {/* Request */}
      <div className="mb-3">
        <div className="flex items-start gap-2">
          <span className="text-xs font-mono text-muted-foreground mt-0.5 shrink-0">&gt;</span>
          <p className="text-sm font-medium text-foreground">
            "{useCase.request}"
          </p>
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center gap-2 mb-3 pl-4">
        <ArrowRight className="w-3 h-3 text-cyan/40" />
        <div className="flex-1 h-px bg-gradient-to-r from-cyan/20 to-transparent" />
      </div>

      {/* Result */}
      <div className="pl-4">
        <p className="text-xs text-muted-foreground leading-relaxed">
          {useCase.result}
        </p>
      </div>
    </motion.div>
  );
}

export default function UseCases() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 block">
              // Real Requests, Real Results
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
              See What You Can{" "}
              <span className="text-cyan text-glow-cyan">Delegate</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              From quick research to complex multi-step tasks — here are real examples of what LifeMaxx users ask for every day.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isHeaderInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={FEATURES_IMG}
              alt="Six optimization domains: mindset, health, fitness, wealth, relationships, productivity"
              className="w-full rounded-lg opacity-80"
            />
          </motion.div>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {useCases.map((uc, i) => (
            <UseCaseCard key={i} useCase={uc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
