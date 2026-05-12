"use client";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    emoji: "🌅",
    title: "Pick Your Sunset",
    desc: "Choose an evening. Check the forecast. Pick the golden hour you want to live in.",
    color: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/25",
  },
  {
    number: "02",
    emoji: "🏖️",
    title: "Claim Your Spot",
    desc: "Reserve your section on the sand — front row at the water's edge or back row under the stars.",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/25",
  },
  {
    number: "03",
    emoji: "🍹",
    title: "Order Your Drinks",
    desc: "Pre-order cocktails, cold beers, and beach snacks to have waiting when you arrive.",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/25",
  },
  {
    number: "04",
    emoji: "🌊",
    title: "Let the Vibes Flow",
    desc: "Show up, kick off your shoes, feel the sand, and just enjoy the moment. We handle everything else.",
    color: "text-pink-400",
    bg: "bg-pink-500/10 border-pink-500/25",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-28 bg-gradient-to-b from-[#130900] to-[#1c0d02] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-orange-700/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-rose-500/10 border border-rose-500/25 text-rose-400 text-xs font-bold tracking-widest uppercase mb-5">
            How It Works
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-none">
            Easier Than Finding a{" "}
            <span className="text-orange-400">Good Spot on the Beach</span>
          </h2>
          <p className="text-orange-100/50 text-lg max-w-xl mx-auto">
            Book in two minutes. Show up, sink in the sand, and let the evening do the rest.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="absolute top-10 left-0 right-0 hidden lg:flex items-center px-20 z-0">
            <div className="flex-1 h-px border-t border-dashed border-orange-900/40" />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 rounded-2xl border ${step.bg} flex items-center justify-center text-4xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {step.emoji}
              </div>
              <span className={`text-xs font-black tracking-widest ${step.color} mb-2`}>
                STEP {step.number}
              </span>
              <h3 className="text-xl font-black text-white mb-3">{step.title}</h3>
              <p className="text-orange-100/50 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#reserve"
            className="inline-block px-10 py-4 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white font-black rounded-full text-lg transition-all transform hover:scale-105 shadow-xl shadow-orange-500/25"
          >
            Grab Your Spot →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
