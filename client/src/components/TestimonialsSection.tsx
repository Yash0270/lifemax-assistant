/*
 * Design: Nature Tech — Biophilic Calm
 * Testimonials: Warm cards with avatar initials, organic rounded styling
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Entrepreneur",
    quote:
      "I told them to find me the best personal trainer in my area and negotiate a deal. Two hours later I had three options with pricing. This is insane.",
    initials: "MT",
    color: "bg-sage-light text-sage",
    task: "Fitness",
  },
  {
    name: "Sarah K.",
    role: "Software Engineer",
    quote:
      "I've been trying to optimize my sleep for months. Sent one message and got a complete protocol with supplement recommendations, light exposure timing, and a sleep tracker comparison.",
    initials: "SK",
    color: "bg-terracotta-light text-terracotta",
    task: "Health",
  },
  {
    name: "James R.",
    role: "Startup Founder",
    quote:
      "They planned my entire week — meal prep, gym schedule, date night restaurant, and even found a financial advisor. I just messaged what I needed and it happened.",
    initials: "JR",
    color: "bg-[oklch(0.92_0.03_160)] text-[oklch(0.45_0.08_160)]",
    task: "Full Optimization",
  },
  {
    name: "Elena V.",
    role: "Content Creator",
    quote:
      "The AI research is incredibly fast, but what sold me is the human follow-through. They actually called restaurants and booked everything for me.",
    initials: "EV",
    color: "bg-[oklch(0.92_0.03_75)] text-[oklch(0.50_0.06_55)]",
    task: "Lifestyle",
  },
  {
    name: "David L.",
    role: "Investment Analyst",
    quote:
      "Asked them to audit my monthly subscriptions and find savings. They found $340/month I was wasting. Paid for itself 3x over in the first month.",
    initials: "DL",
    color: "bg-sage-light text-sage",
    task: "Wealth",
  },
  {
    name: "Priya M.",
    role: "Medical Resident",
    quote:
      "With my insane schedule, I have zero time for life admin. LifeMaxx handles everything from grocery delivery to dry cleaning to booking my car service. Life-changing.",
    initials: "PM",
    color: "bg-terracotta-light text-terracotta",
    task: "Productivity",
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section ref={ref} id="testimonials" className="py-24 lg:py-32 bg-sand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="sage-badge inline-block mb-4">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-sage">Members</span> Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Real results from real people who decided to optimize their lives.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="nature-card p-7"
            >
              {/* Top: task + stars */}
              <div className="flex items-center justify-between mb-5">
                <span className="text-xs font-medium px-3 py-1 rounded-full bg-sage-light text-[oklch(0.40_0.08_145)]">
                  {t.task}
                </span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-[oklch(0.75_0.12_75)] text-[oklch(0.75_0.12_75)]" />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[oklch(0.90_0.02_75/0.6)]">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <div className="font-display font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
