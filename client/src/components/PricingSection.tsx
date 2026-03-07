/*
 * Design: Tactical Command Center — Military-Futurism
 * Pricing: Three tiers with glass cards, glow borders, monospaced prices
 * Popular tier gets cyan glow treatment
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Zap, Crown, Rocket } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "RECON",
    icon: Zap,
    price: "49",
    period: "/month",
    description: "Perfect for getting started with life optimization.",
    features: [
      "5 requests per month",
      "AI-powered research",
      "Basic task completion",
      "Email support",
      "48-hour turnaround",
    ],
    accent: "cyan",
    popular: false,
  },
  {
    name: "OPERATOR",
    icon: Crown,
    price: "129",
    period: "/month",
    description: "For serious optimizers who want consistent results.",
    features: [
      "20 requests per month",
      "AI + Human hybrid processing",
      "Priority task queue",
      "Direct messaging",
      "24-hour turnaround",
      "Dedicated specialist",
      "Rollover unused requests",
    ],
    accent: "cyan",
    popular: true,
  },
  {
    name: "COMMANDER",
    icon: Rocket,
    price: "299",
    period: "/month",
    description: "Unlimited optimization for peak performers.",
    features: [
      "Unlimited requests",
      "AI + Human hybrid processing",
      "Instant priority queue",
      "24/7 direct messaging",
      "Same-day turnaround",
      "Dedicated team of specialists",
      "Monthly optimization review",
      "Custom automation setup",
    ],
    accent: "lime",
    popular: false,
  },
];

function PricingCard({ plan, index }: { plan: typeof plans[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <span className="px-4 py-1.5 bg-cyan text-dark-base font-mono font-semibold text-xs rounded tracking-widest glow-cyan">
            MOST POPULAR
          </span>
        </div>
      )}

      <div
        className={`glass-card rounded-lg p-8 h-full relative overflow-hidden ${
          plan.popular
            ? "border border-cyan/30 glow-cyan-sm"
            : "border-glow"
        }`}
      >
        {/* Plan header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`w-10 h-10 rounded flex items-center justify-center border ${
              plan.accent === "cyan"
                ? "bg-cyan/10 border-cyan/30"
                : "bg-lime/10 border-lime/30"
            }`}
          >
            <plan.icon
              className={`w-5 h-5 ${
                plan.accent === "cyan" ? "text-cyan" : "text-lime"
              }`}
            />
          </div>
          <span className="font-mono font-semibold text-sm tracking-widest text-muted-foreground">
            {plan.name}
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="font-mono text-4xl font-bold text-foreground">
            $<span className="text-5xl">{plan.price}</span>
          </span>
          <span className="font-mono text-sm text-muted-foreground">
            {plan.period}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground mb-8">
          {plan.description}
        </p>

        {/* CTA */}
        <button
          onClick={() => toast("Feature coming soon — join the waitlist!")}
          className={`w-full py-3.5 rounded font-display font-semibold text-sm tracking-wide transition-all duration-300 mb-8 ${
            plan.popular
              ? "bg-cyan text-dark-base hover:bg-cyan-glow glow-cyan-sm"
              : plan.accent === "lime"
              ? "bg-lime text-dark-base hover:bg-lime-glow glow-lime"
              : "border border-cyan/30 text-cyan hover:bg-cyan/5"
          }`}
        >
          GET STARTED
        </button>

        {/* Features */}
        <div className="space-y-3">
          {plan.features.map((feature) => (
            <div key={feature} className="flex items-start gap-3">
              <Check
                className={`w-4 h-4 mt-0.5 shrink-0 ${
                  plan.accent === "cyan" ? "text-cyan/70" : "text-lime/70"
                }`}
              />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function PricingSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 bg-dark-surface/50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 block">
            // Select Your Tier
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Choose Your{" "}
            <span className="text-cyan text-glow-cyan">Protocol</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Every plan includes AI + human hybrid processing. Scale up as your optimization needs grow.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-xs font-mono text-muted-foreground mt-12"
        >
          All plans include a 7-day free trial. Cancel anytime. No contracts.
        </motion.p>
      </div>
    </section>
  );
}
