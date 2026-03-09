/*
 * Design: Nature Tech — Biophilic Calm
 * Hero: Warm, inviting split layout with botanical background, chat mockup, organic shapes
 * Dark text on light background — Lora headings, DM Sans body
 */
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, User } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/nature-hero-74s86PWhPKvQR9A7y5LmV2.webp";
const CHAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/nature-chat-cEAxbWRsFqbCQPeLYiqZ46.webp";

export default function HeroSection() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Soft botanical background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.97_0.01_90/0.6)] via-[oklch(0.97_0.01_90/0.8)] to-[oklch(0.97_0.01_90)]" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 sage-badge mb-8">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="font-body text-xs tracking-wide">Accepting new members</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              Just Message.{" "}
              <br />
              <span className="text-sage">We Optimize</span>{" "}
              <br />
              Your Life.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
              AI handles what it can. A real human handles the rest. From booking trainers
              to researching supplements — your personal optimization engine is one message away.
            </p>

            {/* Flow indicator */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              {[
                { icon: MessageCircle, label: "You message" },
                { icon: Sparkles, label: "AI processes" },
                { icon: User, label: "Human delivers" },
              ].map((step, i) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand shadow-sm">
                    <step.icon className="w-4 h-4 text-sage" />
                    <span className="text-sm font-medium text-foreground">{step.label}</span>
                  </div>
                  {i < 2 && (
                    <ArrowRight className="w-4 h-4 text-muted-foreground/40" />
                  )}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("#pricing")}
                className="group px-8 py-3.5 bg-sage text-white font-medium rounded-full hover:bg-[oklch(0.45_0.08_145)] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
              >
                Start Optimizing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("#how-it-works")}
                className="px-8 py-3.5 bg-white text-foreground font-medium rounded-full border border-sand hover:border-sage/30 hover:bg-sand-light transition-all duration-300"
              >
                See How It Works
              </button>
            </div>
          </motion.div>

          {/* Right: Chat mockup image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-[300px] sm:w-[340px]">
              {/* Decorative organic blob behind */}
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[oklch(0.65_0.06_145/0.1)] rounded-[60%_40%_50%_50%/50%_60%_40%_50%] blur-2xl" />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[oklch(0.90_0.06_45/0.4)] rounded-[40%_60%_50%_50%/60%_40%_50%_50%] blur-2xl" />

              <img
                src={CHAT_IMG}
                alt="LifeMaxx chat interface showing a personal assistant conversation"
                className="relative rounded-3xl shadow-2xl shadow-[oklch(0.55_0.08_145/0.1)] border border-sand"
              />
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10,000+", label: "Tasks completed" },
            { value: "< 2 min", label: "AI response time" },
            { value: "98%", label: "Satisfaction rate" },
            { value: "24/7", label: "Always available" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-5 bg-white/60 backdrop-blur-sm rounded-2xl border border-[oklch(0.88_0.03_75/0.6)]"
            >
              <div className="font-display text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Soft wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 40C240 70 480 80 720 60C960 40 1200 20 1440 40V80H0V40Z" fill="oklch(0.97 0.01 90)" />
        </svg>
      </div>
    </section>
  );
}
