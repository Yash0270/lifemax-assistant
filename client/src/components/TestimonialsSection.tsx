/*
 * Design: Tactical Command Center — Military-Futurism
 * Testimonials: Quote cards with glass morphism, star ratings
 * Testimonial background image, staggered entrance
 */
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const TESTIMONIAL_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663318051643/mRfVYPJDrxJkGQvAoTBXce/testimonial-bg-Luw4STanitD5yQRhHaTMZa.webp";

const testimonials = [
  {
    name: "Marcus T.",
    role: "Entrepreneur",
    quote:
      "I told them to find me the best personal trainer in my area and negotiate a deal. Two hours later I had three options with pricing. This is insane.",
    rating: 5,
    task: "Fitness Optimization",
  },
  {
    name: "Sarah K.",
    role: "Software Engineer",
    quote:
      "I've been trying to optimize my sleep for months. Sent one message and got a complete protocol with supplement recommendations, light exposure timing, and a sleep tracker comparison.",
    rating: 5,
    task: "Health Protocol",
  },
  {
    name: "James R.",
    role: "Startup Founder",
    quote:
      "They planned my entire week — meal prep, gym schedule, date night restaurant, and even found a financial advisor. I just messaged what I needed and it happened.",
    rating: 5,
    task: "Full Life Optimization",
  },
  {
    name: "Elena V.",
    role: "Content Creator",
    quote:
      "The AI research is incredibly fast, but what sold me is the human follow-through. They actually called restaurants and booked everything for me.",
    rating: 5,
    task: "Lifestyle Management",
  },
  {
    name: "David L.",
    role: "Investment Analyst",
    quote:
      "Asked them to audit my monthly subscriptions and find savings. They found $340/month I was wasting. Paid for itself 3x over in the first month.",
    rating: 5,
    task: "Wealth Optimization",
  },
  {
    name: "Priya M.",
    role: "Medical Resident",
    quote:
      "With my insane schedule, I have zero time for life admin. LifeMaxx handles everything from grocery delivery to dry cleaning to booking my car service. Life-changing.",
    rating: 5,
    task: "Productivity",
  },
];

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: typeof testimonials[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card border-glow rounded-lg p-6 h-full hover:bg-dark-elevated/30 transition-all duration-300">
        {/* Task tag */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-mono text-[10px] text-cyan tracking-widest uppercase px-2 py-1 rounded border border-cyan/20 bg-cyan/5">
            {testimonial.task}
          </span>
          <div className="flex gap-0.5">
            {Array.from({ length: testimonial.rating }).map((_, i) => (
              <Star
                key={i}
                className="w-3 h-3 fill-lime text-lime"
              />
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="relative mb-6">
          <Quote className="w-6 h-6 text-cyan/20 absolute -top-1 -left-1" />
          <p className="text-sm text-foreground/80 leading-relaxed pl-4">
            "{testimonial.quote}"
          </p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-3 pt-4 border-t border-border">
          <div className="w-8 h-8 rounded bg-cyan/10 border border-cyan/20 flex items-center justify-center">
            <span className="font-mono text-xs text-cyan font-semibold">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <div className="text-sm font-display font-semibold text-foreground">
              {testimonial.name}
            </div>
            <div className="text-xs font-mono text-muted-foreground">
              {testimonial.role}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={TESTIMONIAL_BG}
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-dark-base/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-xs text-lime tracking-widest uppercase mb-3 block">
            // Field Reports
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            What Our{" "}
            <span className="text-lime text-glow-lime">Operators</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Real results from real people who stopped doing everything themselves and started delegating to LifeMaxx.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
