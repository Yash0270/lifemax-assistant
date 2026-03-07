/*
 * Design: Tactical Command Center — Military-Futurism
 * Hero: Asymmetric layout with hero bg, bold typography, chat mockup image
 * Typewriter effect on headline, staggered entrance animations
 */
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Bot, User } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/hero-bg-4SnUhVMqThkipnkFkWgsSb.webp";
const CHAT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/chat-interface-bsCxcXsXCb8JA84s5MSZ5b.webp";

const stats = [
  { value: "10K+", label: "Tasks Completed" },
  { value: "<2min", label: "Avg Response" },
  { value: "24/7", label: "Always Online" },
];

export default function HeroSection() {
  const handleGetStarted = () => {
    const el = document.querySelector("#pricing");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-base/60 via-dark-base/80 to-dark-base" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 lg:pt-36 pb-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-cyan/20 bg-cyan/5 mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
              <span className="text-xs font-mono text-cyan tracking-widest uppercase">
                System Active — Accepting New Users
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight mb-6"
            >
              <span className="text-foreground">Just Message.</span>
              <br />
              <span className="text-foreground">We </span>
              <span className="text-cyan text-glow-cyan">Optimize</span>
              <span className="text-foreground"> Your Life.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
            >
              AI handles what it can. A real human handles the rest. From booking trainers to researching supplements — your personal optimization engine is one message away.
            </motion.p>

            {/* How it works mini */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 mb-10"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded bg-dark-elevated/60 border border-border">
                <MessageSquare className="w-4 h-4 text-cyan" />
                <span className="text-sm font-mono text-foreground">You message</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
              <div className="flex items-center gap-2 px-3 py-2 rounded bg-dark-elevated/60 border border-border">
                <Bot className="w-4 h-4 text-lime" />
                <span className="text-sm font-mono text-foreground">AI processes</span>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
              <div className="flex items-center gap-2 px-3 py-2 rounded bg-dark-elevated/60 border border-border">
                <User className="w-4 h-4 text-cyan" />
                <span className="text-sm font-mono text-foreground">Human delivers</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={handleGetStarted}
                className="px-8 py-4 bg-cyan text-dark-base font-display font-bold text-base rounded tracking-wide hover:bg-cyan-glow transition-all duration-300 glow-cyan flex items-center gap-2"
              >
                START OPTIMIZING
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  const el = document.querySelector("#how-it-works");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border border-cyan/30 text-cyan font-display font-semibold text-base rounded tracking-wide hover:bg-cyan/5 transition-all duration-300"
              >
                SEE HOW IT WORKS
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-8 mt-12 pt-8 border-t border-border"
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-mono font-semibold text-2xl text-cyan">
                    {stat.value}
                  </div>
                  <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Chat Interface Image */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -5 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-cyan/5 rounded-2xl blur-3xl" />
              <img
                src={CHAT_IMG}
                alt="LifeMaxx chat interface showing AI assistant finding personal trainers"
                className="relative w-full max-w-md mx-auto lg:max-w-none rounded-xl border border-cyan/15 glow-cyan-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-dark-base" style={{ clipPath: "polygon(0 100%, 100% 40%, 100% 100%)" }} />
    </section>
  );
}
