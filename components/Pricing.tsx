"use client";
import { motion } from "framer-motion";

const plans = [
  {
    icon: "🎬",
    name: "Sunset Cinema",
    price: "12",
    unit: "/ person",
    desc: "A full golden hour evening watching a film with the beach as your backdrop.",
    highlight: false,
    badge: null,
    border: "border-orange-500/25",
    bg: "",
    shadow: "",
    cta: "Book Cinema Night",
    ctaClass: "bg-white/5 hover:bg-orange-500 border border-orange-500/40 hover:border-orange-500 text-white hover:text-white transition-all",
    checkColor: "text-orange-400",
    features: [
      "Starts at golden hour",
      "Giant 6m beach screen",
      "Premium surround sound",
      "Reserved sandy spot",
      "Snack bar access",
      "1 welcome drink",
    ],
  },
  {
    icon: "⚽",
    name: "Football Beach Night",
    price: "10",
    unit: "/ person",
    desc: "Live matches with a sea breeze, cold drinks and the whole crew screaming every goal.",
    highlight: true,
    badge: "Best Value",
    border: "border-rose-500/50",
    bg: "bg-gradient-to-b from-rose-900/15 to-transparent",
    shadow: "shadow-2xl shadow-rose-500/10",
    cta: "Book Football Night",
    ctaClass: "bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-400 hover:to-rose-400 text-white",
    checkColor: "text-rose-400",
    features: [
      "Live match screening",
      "Giant 6m beach screen",
      "Full bar stays open",
      "Reserved sandy spot",
      "Group sections available",
      "2 welcome drinks",
    ],
  },
  {
    icon: "📦",
    name: "Rent the Setup",
    price: "299",
    unit: "/ day",
    desc: "Full outdoor cinema kit delivered to your beach. You host, we set everything up.",
    highlight: false,
    badge: null,
    border: "border-amber-500/25",
    bg: "",
    shadow: "",
    cta: "Rent Equipment",
    ctaClass: "bg-white/5 hover:bg-amber-500 border border-amber-500/40 hover:border-amber-500 text-white hover:text-black transition-all",
    checkColor: "text-amber-400",
    features: [
      "6m inflatable screen",
      "4K laser projector",
      "Dolby sound system",
      "50 chairs or cushions",
      "Generator included",
      "Setup & pickup (+€50)",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-gradient-to-b from-[#1c0d02] to-[#130900]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-5 py-2 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase mb-5">
            Pricing
          </span>
          <h2 className="text-4xl sm:text-6xl font-black text-white mb-5 leading-none">
            No Hidden Costs.{" "}
            <span className="text-orange-400">Just Good Times.</span>
          </h2>
          <p className="text-orange-100/50 text-lg max-w-xl mx-auto">
            Affordable evenings for you and your crew. Because great memories
            shouldn&apos;t cost a fortune.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-3xl border ${plan.border} p-8 ${plan.bg} ${plan.shadow} ${plan.highlight ? "scale-105" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-orange-500 to-rose-500 text-white text-xs font-black rounded-full shadow-lg">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="text-4xl mb-4">{plan.icon}</div>
              <h3 className="text-xl font-black text-white mb-1">{plan.name}</h3>
              <p className="text-orange-100/45 text-sm mb-6 leading-relaxed">{plan.desc}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-orange-300/60 text-lg">€</span>
                <span className="text-5xl font-black text-white">{plan.price}</span>
                <span className="text-orange-300/50 text-sm">{plan.unit}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className={`text-xs ${plan.checkColor}`}>✓</span>
                    <span className="text-orange-100/65">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#reserve"
                className={`block w-full py-3.5 rounded-full font-bold text-center text-sm transform hover:scale-105 ${plan.ctaClass}`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-orange-900/60 text-sm mt-10"
        >
          All prices exclude VAT · Group discounts available · Free cancellation up to 48h before the event
        </motion.p>
      </div>
    </section>
  );
}
