/*
 * Design: Nature Tech — Biophilic Calm
 * Features: 6 domain cards with organic icons, warm earth palette
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Dumbbell, Brain, TrendingUp, Users, Clock, Sparkles, Shield } from "lucide-react";

const domains = [
  {
    icon: Heart,
    title: "Health",
    description: "Nutrition plans, supplement research, doctor appointments, lab work coordination, sleep optimization protocols.",
    color: "bg-[oklch(0.92_0.04_20)]",
    iconColor: "text-[oklch(0.55_0.10_20)]",
  },
  {
    icon: Dumbbell,
    title: "Fitness",
    description: "Personal trainer booking, gym negotiations, workout programming, recovery protocols, equipment research.",
    color: "bg-sage-light",
    iconColor: "text-sage",
  },
  {
    icon: Brain,
    title: "Mindset",
    description: "Therapist matching, meditation app research, journaling prompts, habit tracking setup, focus optimization.",
    color: "bg-[oklch(0.92_0.03_160)]",
    iconColor: "text-[oklch(0.55_0.08_160)]",
  },
  {
    icon: TrendingUp,
    title: "Wealth",
    description: "Financial advisor matching, investment research, expense auditing, side hustle research, tax optimization.",
    color: "bg-[oklch(0.92_0.03_75)]",
    iconColor: "text-[oklch(0.50_0.06_55)]",
  },
  {
    icon: Users,
    title: "Relationships",
    description: "Date planning, gift research, social event coordination, networking introductions, communication coaching.",
    color: "bg-terracotta-light",
    iconColor: "text-terracotta",
  },
  {
    icon: Clock,
    title: "Productivity",
    description: "Calendar optimization, tool setup, workflow automation, travel planning, errand delegation, appointment scheduling.",
    color: "bg-sage-light",
    iconColor: "text-sage",
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} id="features" className="py-24 lg:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="sage-badge inline-block mb-4">Optimization Domains</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Six Dimensions of{" "}
            <span className="text-sage">Growth</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We cover every dimension of life optimization. Tell us what area you want to level up, and we deploy the right combination of AI and human expertise.
          </p>
        </motion.div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand shadow-sm">
            <Sparkles className="w-4 h-4 text-sage" />
            <span className="text-sm font-medium text-foreground">AI-Powered Research</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-sand shadow-sm">
            <Shield className="w-4 h-4 text-terracotta" />
            <span className="text-sm font-medium text-foreground">Human Verification</span>
          </div>
        </motion.div>

        {/* Domain Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((domain, i) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="nature-card p-7 group"
            >
              <div className={`w-12 h-12 ${domain.color} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <domain.icon className={`w-6 h-6 ${domain.iconColor}`} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {domain.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {domain.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
