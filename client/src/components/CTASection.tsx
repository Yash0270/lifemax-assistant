/*
 * Design: Tactical Command Center — Military-Futurism
 * CTA: Bold final call-to-action with animated background
 * Glowing border, large typography, urgency messaging
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { toast } from "sonner";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan/20 via-lime/10 to-cyan/20 rounded-xl blur-xl" />

          {/* Card */}
          <div className="relative glass-card rounded-xl p-10 sm:p-14 lg:p-20 border border-cyan/15 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-lime/20 bg-lime/5 mb-8">
                <Zap className="w-3 h-3 text-lime" />
                <span className="text-xs font-mono text-lime tracking-widest uppercase">
                  Limited Beta Access
                </span>
              </div>

              {/* Headline */}
              <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-6 leading-tight">
                Stop Managing.
                <br />
                Start <span className="text-cyan text-glow-cyan">Optimizing.</span>
              </h2>

              {/* Description */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Every minute you spend on tasks that could be delegated is a minute stolen from your highest-value activities. Let LifeMaxx handle the rest.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => toast("Feature coming soon — join the waitlist!")}
                  className="px-8 py-4 bg-cyan text-dark-base font-display font-bold text-base rounded tracking-wide hover:bg-cyan-glow transition-all duration-300 glow-cyan flex items-center gap-2"
                >
                  JOIN THE WAITLIST
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const el = document.querySelector("#pricing");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 border border-cyan/30 text-cyan font-display font-semibold text-base rounded tracking-wide hover:bg-cyan/5 transition-all duration-300"
                >
                  VIEW PRICING
                </button>
              </div>

              {/* Trust line */}
              <p className="text-xs font-mono text-muted-foreground mt-8">
                7-day free trial &middot; No credit card required &middot; Cancel anytime
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
