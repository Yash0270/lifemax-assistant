/*
 * Design: Nature Tech — Biophilic Calm
 * How It Works: 3 organic rounded cards with sage/terracotta accents, warm shadows
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Cpu, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: MessageCircle,
    title: "Message Your Request",
    description:
      "Just tell us what you need — in plain language. Book a trainer, research the best nootropics, plan a meal prep schedule, negotiate a gym membership. Anything.",
    examples: [
      "Find a personal trainer near downtown",
      "Research the top 5 sleep supplements",
      "Book a table at the best steakhouse Friday",
    ],
    color: "bg-sage-light",
    iconColor: "text-sage",
  },
  {
    step: "02",
    icon: Cpu,
    title: "AI + Human Processing",
    description:
      "Our AI instantly handles research, comparisons, and data-heavy tasks. For anything requiring human judgment, negotiation, or real-world action — a trained human specialist takes over.",
    examples: [
      "AI: Compares 200+ supplements in seconds",
      "Human: Calls and negotiates your gym rate",
      "AI + Human: Plans your full weekly routine",
    ],
    color: "bg-terracotta-light",
    iconColor: "text-terracotta",
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Results Delivered",
    description:
      "Get actionable results back in your chat. Bookings confirmed, research summarized, tasks completed. Your life, optimized — without lifting a finger.",
    examples: [
      "Trainer booked: Alex Chen, Mon/Wed/Fri 7AM",
      "Top pick: Magnesium Glycinate — here's why",
      "Reservation confirmed: Cut Prime, 8PM Friday",
    ],
    color: "bg-[oklch(0.92_0.03_160)]",
    iconColor: "text-[oklch(0.55_0.08_160)]",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} id="how-it-works" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="sage-badge inline-block mb-4">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Three Simple Steps to a{" "}
            <span className="text-sage">Better Life</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            No apps to learn, no dashboards to manage. Just message us and we handle everything.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="nature-card p-8 relative overflow-hidden group"
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-6 font-display text-7xl font-bold text-[oklch(0.90_0.02_75/0.5)] select-none">
                {step.step}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-6`}>
                <step.icon className={`w-6 h-6 ${step.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Examples */}
              <div className="space-y-2">
                {step.examples.map((ex) => (
                  <div
                    key={ex}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-sage mt-0.5 shrink-0">&#8250;</span>
                    <span>{ex}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
