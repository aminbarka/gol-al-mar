"use client";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "The sunset was turning everything orange and then the movie just… started. I genuinely didn't know where the sky ended and the screen began. Absolutely unreal.",
    name: "Layla A.",
    age: 23,
    avatar: "🌅",
    rating: 5,
    event: "Sunset Cinema",
    eventColor: "text-orange-400 bg-orange-500/10",
  },
  {
    quote:
      "Best first date spot I have ever found. Full stop. She was impressed before the film even started. I just pointed at the horizon and said 'this is us tonight.' Booked again next week.",
    name: "Omar K.",
    age: 25,
    avatar: "🏖️",
    rating: 5,
    event: "Sunset Cinema",
    eventColor: "text-orange-400 bg-orange-500/10",
  },
  {
    quote:
      "We got the whole crew together for the Champions League final. Cold drinks, sand between our toes, and every goal felt enormous. Can't imagine watching it indoors ever again.",
    name: "Sofia M.",
    age: 21,
    avatar: "⚽",
    rating: 5,
    event: "Football Beach Night",
    eventColor: "text-rose-400 bg-rose-500/10",
  },
  {
    quote:
      "Rented the setup for my birthday on the beach. My friends are STILL talking about it a year later. Worth every cent. The team set everything up in under an hour.",
    name: "Youssef R.",
    age: 28,
    avatar: "🎉",
    rating: 5,
    event: "Equipment Rental",
    eventColor: "text-amber-400 bg-amber-500/10",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#1c0d02] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-orange-700/5 blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[300px] rounded-full bg-rose-700/4 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase mb-5">
            Reviews
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-none">
            Don&apos;t Take{" "}
            <span className="text-orange-400">Our Word For It</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-orange-400 text-2xl">★</span>
            ))}
          </div>
          <p className="text-orange-900/60 text-sm">4.9 average · 300+ reviews</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="p-6 rounded-3xl bg-white/3 border border-orange-900/20 hover:border-orange-900/40 transition-all"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-orange-400 text-sm">★</span>
                ))}
              </div>
              <p className="text-orange-100/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="text-3xl">{t.avatar}</span>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-orange-900/50 text-xs">Age {t.age}</p>
                </div>
              </div>
              <div className="mt-4">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${t.eventColor}`}>
                  {t.event}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
