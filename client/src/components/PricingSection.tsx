/*
 * Design: Nature Tech — Biophilic Calm
 * Pricing: 3 rounded cards with sage/terracotta accents, warm shadows
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Leaf, Sparkles, Crown } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "Seedling",
    icon: Leaf,
    price: 49,
    description: "Perfect for getting started with life optimization.",
    features: [
      "5 requests per month",
      "AI-powered research",
      "Basic task completion",
      "Email support",
      "48-hour turnaround",
    ],
    accent: false,
    btnClass: "bg-white text-foreground border border-sand hover:bg-sand-light",
  },
  {
    name: "Growth",
    icon: Sparkles,
    price: 129,
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
    accent: true,
    btnClass: "bg-sage text-white hover:bg-[oklch(0.45_0.08_145)]",
  },
  {
    name: "Flourish",
    icon: Crown,
    price: 299,
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
    accent: false,
    btnClass: "bg-terracotta text-white hover:bg-[oklch(0.52_0.12_45)]",
  },
];

export default function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} id="pricing" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="sage-badge inline-block mb-4">Pricing</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="text-sage">Path</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Every plan includes AI + human hybrid processing. Scale up as your optimization needs grow.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className={`relative nature-card p-8 ${
                plan.accent
                  ? "ring-2 ring-sage shadow-xl shadow-[oklch(0.55_0.08_145/0.1)] md:scale-[1.03]"
                  : ""
              }`}
            >
              {/* Popular badge */}
              {plan.accent && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-sage text-white text-xs font-semibold rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  plan.accent ? "bg-sage-light" : "bg-sand-light"
                }`}>
                  <plan.icon className={`w-5 h-5 ${plan.accent ? "text-sage" : "text-muted-foreground"}`} />
                </div>
                <span className="font-display text-lg font-semibold text-foreground">
                  {plan.name}
                </span>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span className="font-display text-4xl font-bold text-foreground">${plan.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>

              {/* CTA */}
              <button
                onClick={() => toast("Feature coming soon")}
                className={`w-full py-3 rounded-full font-medium text-sm transition-all duration-200 shadow-sm hover:shadow-md mb-6 ${plan.btnClass}`}
              >
                Get Started
              </button>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-muted-foreground mt-10">
          All plans include a 7-day free trial. Cancel anytime. No contracts.
        </p>
      </div>
    </section>
  );
}
