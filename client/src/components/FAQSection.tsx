/*
 * Design: Tactical Command Center — Military-Futurism
 * FAQ: Accordion-style with monospaced question numbers
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What exactly can I ask LifeMaxx to do?",
    answer:
      "Almost anything you'd ask a personal assistant. Research supplements, book trainers, plan meals, negotiate bills, find therapists, plan dates, audit subscriptions, schedule appointments, compare products — if it helps optimize your life, we handle it.",
  },
  {
    question: "How does the AI + Human hybrid work?",
    answer:
      "When you send a request, our AI instantly processes what it can — research, comparisons, data analysis, recommendations. For tasks requiring real-world action (phone calls, bookings, negotiations), a trained human specialist takes over. You get the speed of AI with the capability of a real person.",
  },
  {
    question: "How fast do I get results?",
    answer:
      "AI-powered research tasks are typically completed within minutes. Tasks requiring human action depend on your plan tier — from same-day (Commander) to 48 hours (Recon). Most requests are completed well within the stated timeframe.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. All communications are encrypted end-to-end. Our human specialists operate under strict NDAs. We never sell or share your data. You control what information we have access to at all times.",
  },
  {
    question: "Can I use LifeMaxx for business tasks too?",
    answer:
      "Yes! While we specialize in personal life optimization, many users delegate business-adjacent tasks like scheduling, research, travel planning, and expense management. Our Operator and Commander plans are popular with entrepreneurs and executives.",
  },
  {
    question: "What if I'm not satisfied with a result?",
    answer:
      "We'll redo any task at no extra cost. If we can't deliver what you need, we'll refund the request. Our goal is your complete satisfaction — we're only successful when your life is measurably better.",
  },
  {
    question: "Do unused requests roll over?",
    answer:
      "Yes! On the Operator plan, unused requests roll over to the next month as long as your subscription is active. Commander plan members have unlimited requests, so rollover doesn't apply.",
  },
  {
    question: "How do I communicate with my assistant?",
    answer:
      "Through our messaging platform — just like texting. Send your request in plain language, attach photos or links if needed, and we'll handle the rest. No apps to learn, no forms to fill out.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 py-5 text-left group"
      >
        <span className="font-mono text-xs text-cyan/50 mt-1 shrink-0 w-6">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display font-semibold text-base text-foreground group-hover:text-cyan transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pl-10 pb-5 text-sm text-muted-foreground leading-relaxed max-w-2xl">
          {faq.answer}
        </p>
      </motion.div>
    </div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono text-xs text-cyan tracking-widest uppercase mb-3 block">
            // Intel Brief
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-cyan text-glow-cyan">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card border-glow rounded-lg px-6"
        >
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
