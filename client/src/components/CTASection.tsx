/*
 * Design: Nature Tech — Biophilic Calm
 * CTA: Warm watercolor background with organic rounded card
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const CTA_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/nature-cta-bg-2TBQnNEFxKvVJLXHpFvPkL.webp";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-sand-light relative overflow-hidden">
      {/* Watercolor background */}
      <div className="absolute inset-0">
        <img
          src={CTA_BG}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.95_0.01_75/0.6)] via-[oklch(0.95_0.01_75/0.8)] to-[oklch(0.95_0.01_75)]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Ready to Start{" "}
            <span className="text-sage">Optimizing</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of ambitious people who stopped doing everything themselves and started delegating to LifeMaxx. Your first week is free.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => scrollTo("#pricing")}
              className="group px-8 py-4 bg-sage text-white font-medium rounded-full hover:bg-[oklch(0.45_0.08_145)] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Start Your Free Trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo("#how-it-works")}
              className="px-8 py-4 bg-white text-foreground font-medium rounded-full border border-sand hover:border-sage/30 transition-all duration-300 shadow-sm"
            >
              Learn More
            </button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            No credit card required. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
