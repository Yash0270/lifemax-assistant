/*
 * Design: Tactical Command Center — Military-Futurism
 * How It Works: 3-step process with numbered cards, diagonal accents
 * Staggered scroll animations, monospaced step numbers
 */
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, Cpu, CheckCircle2 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Message Your Request",
    description:
      "Just tell us what you need — in plain language. Book a trainer, research the best nootropics, plan a meal prep schedule, negotiate a gym membership. Anything.",
    examples: [
      "Find me a personal trainer near downtown",
      "Research the top 5 sleep supplements",
      "Book a table at the best steakhouse Friday",
    ],
    accent: "cyan",
  },
  {
    num: "02",
    icon: Cpu,
    title: "AI + Human Processing",
    description:
      "Our AI instantly handles research, comparisons, and data-heavy tasks. For anything requiring human judgment, negotiation, or real-world action — a trained human specialist takes over.",
    examples: [
      "AI: Compares 200+ supplements in seconds",
      "Human: Calls and negotiates your gym rate",
      "AI + Human: Plans your full weekly routine",
    ],
    accent: "lime",
  },
  {
    num: "03",
    icon: CheckCircle2,
    title: "Results Delivered",
    description:
      "Get actionable results back in your chat. Bookings confirmed, research summarized, tasks completed. Your life, optimized — without lifting a finger.",
    examples: [
      "Trainer booked: Alex Chen, Mon/Wed/Fri 7AM",
      "Top pick: Magnesium Glycinate — here's why",
      "Reservation confirmed: Cut Prime, 8PM Friday",
    ],
    accent: "cyan",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative group"
    >
      <div className="glass-card border-glow rounded-lg p-8 h-full relative overflow-hidden">
        {/* Step number background */}
        <div className="absolute -top-4 -right-4 font-display font-bold text-[120px] leading-none text-foreground/[0.03] select-none">
          {step.num}
        </div>

        {/* Icon + Number */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`w-12 h-12 rounded flex items-center justify-center border ${
              step.accent === "cyan"
                ? "bg-cyan/10 border-cyan/30"
                : "bg-lime/10 border-lime/30"
            }`}
          >
            <step.icon
              className={`w-5 h-5 ${
                step.accent === "cyan" ? "text-cyan" : "text-lime"
              }`}
            />
          </div>
          <span
            className={`font-mono font-semibold text-sm tracking-widest ${
              step.accent === "cyan" ? "text-cyan" : "text-lime"
            }`}
          >
            STEP {step.num}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-xl mb-3 text-foreground">
          {step.title}
        </h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">
          {step.description}
        </p>

        {/* Examples */}
        <div className="space-y-2">
          {step.examples.map((ex, i) => (
            <div
              key={i}
              className="flex items-start gap-2 text-xs font-mono text-muted-foreground"
            >
              <span
                className={`mt-0.5 ${
                  step.accent === "cyan" ? "text-cyan/60" : "text-lime/60"
                }`}
              >
                &gt;
              </span>
              <span>{ex}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 block">
            // Protocol Overview
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            How It <span className="text-cyan text-glow-cyan">Works</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Three steps between you and a fully optimized life. No apps to learn, no dashboards to manage. Just message us.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.num} step={step} index={i} />
          ))}
        </div>

        {/* Connecting line (desktop) */}
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-cyan/20 to-transparent" />
      </div>
    </section>
  );
}
