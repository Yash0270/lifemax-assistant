/*
 * Design: Nature Tech — Biophilic Calm
 * FAQ: Warm accordion with organic rounded styling
 */
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does the AI + Human hybrid model work?",
    answer:
      "When you send a request, our AI instantly processes it — handling research, comparisons, and data analysis. If the task requires real-world action (phone calls, bookings, negotiations), a trained human specialist takes over seamlessly. You get the speed of AI with the capability of a real person.",
  },
  {
    question: "What kinds of tasks can I request?",
    answer:
      "Almost anything related to life optimization: health research, fitness bookings, meal planning, financial analysis, travel planning, appointment scheduling, gift shopping, subscription auditing, and much more. If it can be researched or done by a capable assistant, we can handle it.",
  },
  {
    question: "How fast do I get results?",
    answer:
      "AI-powered research tasks are typically completed within minutes. Tasks requiring human action (calls, bookings, negotiations) are completed within the turnaround time of your plan — 48 hours for Seedling, 24 hours for Growth, and same-day for Flourish.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Absolutely. We use end-to-end encryption for all communications. Our human specialists are background-checked and sign NDAs. We never share your data with third parties, and you can request data deletion at any time.",
  },
  {
    question: "Can I try it before committing?",
    answer:
      "Yes! Every plan includes a 7-day free trial with 2 sample requests. No credit card required to start. You can upgrade, downgrade, or cancel at any time with no contracts or hidden fees.",
  },
  {
    question: "How do I communicate with my assistant?",
    answer:
      "Simply message us through our chat interface, SMS, WhatsApp, or email — whatever is most convenient for you. Your dedicated specialist will respond through the same channel.",
  },
  {
    question: "Do unused requests roll over?",
    answer:
      "Yes! On the Growth plan, unused requests roll over to the next month as long as your subscription is active. Flourish plan members have unlimited requests, so rollover doesn't apply.",
  },
  {
    question: "What if I'm not satisfied with a result?",
    answer:
      "We'll redo any task at no extra cost. If we can't deliver what you need, we'll refund the request. Our goal is your complete satisfaction — we're only successful when your life is measurably better.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      className="border-b border-[oklch(0.90_0.02_75/0.6)] last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-display font-semibold text-foreground pr-4 group-hover:text-sage transition-colors">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
            open ? "rotate-180 text-sage" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-muted-foreground leading-relaxed pr-8">
          {faq.answer}
        </p>
      </div>
    </motion.div>
  );
}

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-cream">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="sage-badge inline-block mb-4">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Common <span className="text-sage">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about LifeMaxx.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="nature-card p-6 sm:p-8">
          {isInView &&
            faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
        </div>
      </div>
    </section>
  );
}
